// @ts-nocheck
/**
 * @param {{ mode: string; }} request
 */

let STATIC_ASSETS = ['/build/', '/icons/']

let ASSET_CACHE = 'asset-cache'
let DATA_CACHE = 'data-cache'
let DOCUMENT_CACHE = 'document-cache'

function debug(...messages) {
  console.debug(...messages)
}
function isDocumentGetRequest(request) {
  return isMethod(request, ['get']) && request.mode === 'navigate'
}
async function handleInstall() {
  debug('Service worker installed')
}
async function handleActivate() {
  debug('Service worker activated')
}
async function handleMessage(event) {
  debug('handleMessage', event)
  let cachePromises = new Map()
  await Promise.all(cachePromises.values())
}
async function appHandleFetch({ error, response }) {
  if (error) {
    throw error
  }
  if (!response) {
    throw new Error('Response is undefined')
  }
  return response
}
function isMethod(request, methods) {
  return methods.includes(request.method.toLowerCase())
}
function isAssetRequest(request) {
  return (
    isMethod(request, ['get']) &&
    STATIC_ASSETS.some((publicPath) => request.url.startsWith(publicPath))
  )
}
function isLoaderRequest(request) {
  let url = new URL(request.url)
  return isMethod(request, ['get']) && url.searchParams.get('_data')
}

self.addEventListener('install', (event) => {
  event.waitUntil(handleInstall(event).then(() => self.skipWaiting()))
})
self.addEventListener('activate', (event) => {
  event.waitUntil(handleActivate(event).then(() => self.clients.claim()))
})
self.addEventListener('message', (event) => {
  event.waitUntil(handleMessage(event))
})
self.addEventListener('load', () => {
  console.log('load')
  console.log('serviceWorker', navigator)
  Notification.requestPermission().then(function (result) {
    console.log(result)
  })
})
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.')
  console.log(`[Service Worker] Push had this data: "${event.data?.text()}"`)

  const title = 'Fulltime Force'
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png',
  }

  event.waitUntil(self.registration.showNotification(title, options))
})
