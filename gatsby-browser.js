// Inform plugins when a service worker has been updated in the background and the page is ready to reload to apply changes

import './src/components/fonts/index.css' // import custom fonts

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This page has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}