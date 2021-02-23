import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import Work from '../components/Work.vue'
import Contact from '../components/Contact.vue'
const routes = [
	{
		path: '/',
		component: Home,
		name: 'Home'
	},
	{
		path: '/about',
		component: About,
		name: 'About'
	},
	{
		path: '/skills',
		component: Skills,
		name: 'Skills'
	},
	{
		path: '/work',
		component: Work,
		name: 'Work'
	},
	{
		path: '/contact',
		component: Contact,
		name: 'Contact'
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;