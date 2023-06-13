export function clsx(...classNames: (string | undefined)[]) {
  return classNames
    .filter((cl) => typeof cl === 'string' && cl.trim() !== '')
    .join(' ')
}
