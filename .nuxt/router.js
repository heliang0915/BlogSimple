import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _581c185c = () => import('../pages/layout/blog-rg.vue' /* webpackChunkName: "pages/layout/blog-rg" */).then(m => m.default || m)
const _4bf2fd42 = () => import('../pages/layout/blog-footer.vue' /* webpackChunkName: "pages/layout/blog-footer" */).then(m => m.default || m)
const _6d256134 = () => import('../pages/layout/blog-header.vue' /* webpackChunkName: "pages/layout/blog-header" */).then(m => m.default || m)
const _2f10d8fd = () => import('../pages/detail/_id.vue' /* webpackChunkName: "pages/detail/_id" */).then(m => m.default || m)
const _6af78806 = () => import('../pages/_page.vue' /* webpackChunkName: "pages/_page" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/layout/blog-rg",
			component: _581c185c,
			name: "layout-blog-rg"
		},
		{
			path: "/layout/blog-footer",
			component: _4bf2fd42,
			name: "layout-blog-footer"
		},
		{
			path: "/layout/blog-header",
			component: _6d256134,
			name: "layout-blog-header"
		},
		{
			path: "/detail/:id?",
			component: _2f10d8fd,
			name: "detail-id"
		},
		{
			path: "/:page?",
			component: _6af78806,
			name: "page"
		}
    ],
    
    
    fallback: false
  })
}
