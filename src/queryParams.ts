import { useEffect } from 'react'
import { componentConfig, ConfigEntry } from './exampleConfig.ts'

/**
 * Get the current example from query params.
 */
export function getExampleFromQueryParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  return id ? componentConfig.find((example) => example.id === id) : undefined
}

/**
 * Helper for example ID query param changes. Listens for changes and updates
 * selected examples, and provides helper to set the query param.
 */
export function useExampleQueryParams(
  onSelectedExampleChange: (example: ConfigEntry | undefined) => void
) {
  // Listen for changes in query params with the forward/back buttons.
  useEffect(() => {
    const popstateListener = () =>
      onSelectedExampleChange(getExampleFromQueryParams())
    window.addEventListener('popstate', popstateListener)
    return () => window.removeEventListener('popstate', popstateListener)
  }, [onSelectedExampleChange])

  return {
    setIdQueryParamToExample: (example?: ConfigEntry) => {
      const urlParams = new URLSearchParams(window.location.search)
      if (example) {
        urlParams.set('id', example.id)
      } else {
        urlParams.delete('id')
      }
      window.history.pushState({}, '', '?' + urlParams.toString())
    },
  }
}
