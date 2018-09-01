import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import Books from '@/components/Books'
import Login from '@/components/Login'
import IssueReturn from '@/components/IssueReturn'
import IssueCompleted from '@/components/IssueCompleted'
import BookSearchValidPage from '@/components/BookSearchValidPage'
import BookSearchInvalidPage from '@/components/BookSearchInvalidPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Books',
      name: 'Books',
      component: Books
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/IssueReturn',
      name: 'IssueReturn',
      component: IssueReturn
    },
    {
      path: '/IssueCompleted',
      name: 'IssueCompleted',
      component: IssueCompleted
    },
    {
      path: '/BookSearchValidPage',
      name: 'BookSearchValidPage',
      component: BookSearchValidPage
    },
    {
      path: '/BookSearchInvalidPage',
      name: 'BookSearchInvalidPage',
      component: BookSearchInvalidPage
    }

  ]
})
