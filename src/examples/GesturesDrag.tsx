import { motion } from 'framer-motion'
import {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  useState,
} from 'react'
import { CodeSample } from '../components/CodeSample.tsx'
import { H3 } from '../components/Headings.tsx'
import { Link } from '../components/Link.tsx'
import { Page } from '../components/Page.tsx'
import { PageParagraph } from '../components/PageParagraph.tsx'
import { TextInput } from '../components/TextInput.tsx'

export function GesturesDrag() {
  const [drag, setDrag] = useState('true')
  const [dragConstraintTop, setDragConstraintTop] = useState(-50)
  const [dragConstraintBottom, setDragConstraintBottom] = useState(100)
  const [dragConstraintLeft, setDragConstraintLeft] = useState(-100)
  const [dragConstraintRight, setDragConstraintRight] = useState(100)
  const [dragSnapToOrigin, setDragSnapToOrigin] = useState(false)
  const [dragElastic, setDragElastic] = useState(0.5)
  const [dragMomentum, setDragMomentum] = useState(true)

  return (
    <Page title="Gestures drag">
      <PageParagraph>
        You can use a simple{' '}
        <Link
          href="https://www.framer.com/motion/gestures/#drag"
          target="_blank"
        >
          <code>drag</code>
        </Link>{' '}
        to allow elements to be dragged around the page. This is achieved with{' '}
        <code>transform: translateX/translateY</code>.
      </PageParagraph>

      <H3>Controls</H3>
      <div className="mx-auto mb-4 mt-2 w-fit max-w-full">
        <div className="grid w-full  grid-cols-[1fr_minmax(0,1fr)]">
          <LabelledSelect
            id="drag"
            label={
              <Link
                href="https://www.framer.com/motion/gestures/#drag"
                target="_blank"
              >
                <code>drag</code>
              </Link>
            }
            selectClassName="font-mono"
            value={drag}
            onOptionChange={(value) => setDrag(value)}
          >
            <option value="false">false</option>
            <option value="true">true</option>
            <option value="x">x</option>
            <option value="y">y</option>
          </LabelledSelect>

          {[
            {
              label: 'dragConstraints.top',
              value: dragConstraintTop,
              setter: setDragConstraintTop,
            },
            {
              label: 'dragConstraints.bottom',
              value: dragConstraintBottom,
              setter: setDragConstraintBottom,
            },
            {
              label: 'dragConstraints.left',
              value: dragConstraintLeft,
              setter: setDragConstraintLeft,
            },
            {
              label: 'dragConstraints.right',
              value: dragConstraintRight,
              setter: setDragConstraintRight,
            },
          ].map(({ label, value, setter }) => (
            <LabelledTextInput
              key={label}
              id={label}
              label={
                <Link
                  href="https://www.framer.com/motion/gestures/###dragconstraints"
                  target="_blank"
                >
                  <code>{label}</code>
                </Link>
              }
              step="10"
              value={value}
              onNumChange={setter}
            />
          ))}

          <LabelledSelect
            id="dragSnapToOrigin"
            label={
              <Link
                href="https://www.framer.com/motion/gestures/###dragsnaptoorigin"
                target="_blank"
              >
                <code>dragSnapToOrigin</code>
              </Link>
            }
            selectClassName="font-mono"
            value={String(dragSnapToOrigin)}
            onOptionChange={(value) => setDragSnapToOrigin(value === 'true')}
          >
            <option value="false">false</option>
            <option value="true">true</option>
          </LabelledSelect>

          <LabelledTextInput
            id="dragElastic"
            label={
              <Link
                href="https://www.framer.com/motion/gestures/###dragelastic"
                target="_blank"
              >
                <code>dragElastic</code>
              </Link>
            }
            min="0"
            max="1"
            step="0.1"
            value={dragElastic}
            onNumChange={(val) => setDragElastic(val)}
          />

          <LabelledSelect
            id="dragMomentum"
            label={
              <Link
                href="https://www.framer.com/motion/gestures/###dragmomentum"
                target="_blank"
              >
                <code>dragMomentum</code>
              </Link>
            }
            selectClassName="font-mono"
            value={String(dragMomentum)}
            onOptionChange={(value) => setDragMomentum(value === 'true')}
          >
            <option value="false">false</option>
            <option value="true">true</option>
          </LabelledSelect>
        </div>
      </div>

      <motion.div
        className="mx-auto mt-16 w-fit"
        drag={drag === 'true' ? true : (drag as boolean | 'x' | 'y')}
        dragConstraints={{
          top: dragConstraintTop,
          bottom: dragConstraintBottom,
          left: dragConstraintLeft,
          right: dragConstraintRight,
        }}
        dragSnapToOrigin={dragSnapToOrigin}
        dragElastic={dragElastic}
        dragMomentum={dragMomentum}
      >
        <CodeSample
          customStyle={{
            // The code sample was interfering with the drag on mobile.
            // Fixed this by disabling pointer events on it.
            pointerEvents: 'none',
          }}
          language="jsx"
        >{`<motion.div 
  drag={${drag}}
  dragConstraints={{
    top: ${dragConstraintTop},
    bottom: ${dragConstraintBottom},
    left: ${dragConstraintLeft},
    right: ${dragConstraintRight}
  }}
  dragSnapToOrigin={${dragSnapToOrigin}}
  dragElastic={${dragElastic}}
  dragMomentum={${dragMomentum}}
/>`}</CodeSample>
      </motion.div>
    </Page>
  )
}

function LabelledTextInput({
  id,
  label,
  value,
  onNumChange,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode
  value: number
  onNumChange: (value: number) => void
}) {
  return (
    <>
      <label htmlFor={id}>{<code>{label}</code>}</label>
      <TextInput
        id={id}
        type="number"
        value={value}
        onChange={(e) => onNumChange(Number(e.target.value))}
        {...rest}
      />
    </>
  )
}

function LabelledSelect({
  id,
  label,
  value,
  children,
  onOptionChange,
  selectClassName,
}: SelectHTMLAttributes<HTMLSelectElement> & {
  label: ReactNode
  value: string
  onOptionChange: (value: string) => void
  selectClassName?: string
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className={selectClassName}
        value={value}
        onChange={(e) => onOptionChange(e.target.value)}
      >
        {children}
      </select>
    </>
  )
}
