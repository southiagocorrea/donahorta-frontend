
const routes = [
  {
    path: '/',
    component: () => import('layouts/App.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/auth') },
      { path: '/login', component: () => import('pages/auth/login') },
      { path: '/register', component: () => import('pages/auth/register') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
