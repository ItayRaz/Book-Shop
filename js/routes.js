'use strict'

import bookApp from './cmps/book-app.cmp.js';
import homePage from './cmps/home.cmp.js';
import bookAdd from './cmps/book-add.cmp.js';
import aboutPage from './cmps/about-page.cmp.js';
import bookDetails from './cmps/book-details.cmp.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
      path:'/about',
      component: aboutPage
    },
    {
      path:'/add',
      component: bookAdd
    },
    {
        path: '/book',
        component: bookApp,
    },
    {
        path: '/book/:id',
        component: bookDetails
    },
   
    
]
const myRouter = new VueRouter({routes: myRoutes})

export default myRouter;