import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './components/Welcome';
import Loading from './components/Loading';
import Pokemons from './components/Pokemons';

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'welcome',
			component: Welcome,
		},
		{
			path: '/loading',
			name: 'loading',
			component: Loading,
		},
		{
			path: '/pokemons/',
			name: 'pokemons',
			component: Pokemons,
			children: [
				{
					// when /user/:id/profile is matched
					path: 'search/:search',
					component: Pokemons
				},
			]
		},
	],
});

export default router;