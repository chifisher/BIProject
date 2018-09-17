import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewContact from '@/components/NewContact/NewContact'
import Vchart from '@/components/Vchart/vchart'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
      path: '/newcontact',
      name: 'NewContact',
      component: NewContact
    },
		,
		{
			path: '/vchart',
			name: 'Vchart',
			component: Vchart
		}
  ]
})
