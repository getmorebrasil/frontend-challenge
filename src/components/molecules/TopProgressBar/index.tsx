import { useState } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

const TopProgressBar: React.FC = () => {
  const originalFetch = window.fetch
  const [isLoading, setIsLoading] = useState(false)
  const [activeRequests, setActiveRequests] = useState(0)

  function onRouteChangeStart() {
    if (isLoading) return

    setIsLoading(true)

    NProgress.start()
  }

  function routeChangeComplete() {
    if (activeRequests > 0) return

    setIsLoading(false)

    NProgress.done()
  }

  Router.events.on('routeChangeStart', onRouteChangeStart)
  Router.events.on('routeChangeComplete', routeChangeComplete)
  Router.events.on('routeChangeError', routeChangeComplete)

  window.fetch = async (...args) => {
    if (activeRequests === 0) onRouteChangeStart()

    setActiveRequests(activeRequests + 1)

    try {
      const response = await originalFetch(...args)
      return response
    } catch (error) {
      return Promise.reject(error)
    } finally {
      setActiveRequests(activeRequests - 1)
      if (activeRequests === 0) routeChangeComplete()
    }
  }

  return null
}

export default TopProgressBar
