import Vue from 'vue';
import Router from 'vue-router';

import NotFound from './components/Content/pages/NotFound';

import Home from './components/Content/pages/Home';
import Aboutus from './components/Content/pages/Aboutus';
import Faq from './components/Content/pages/Faq';
import Careers from './components/Content/pages/Careers';
import Blog from './components/Content/pages/Blog';
import BlogIndividual from './components/Content/pages/BlogIndividual';
import CaseStudies from './components/Content/pages/CaseStudies';
import Products from './components/Content/pages/Products';
import RealTimeDash from './components/Content/pages/RealTimeDashboards';
import AudienceIntel from './components/Content/pages/AudienceIntel';


import BlogEntries from './statics/BlogsEntries.json';


const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.slug,
    name: child.slug,
    component: BlogIndividual
  }))
  return {
    path: '/blog',
    name: 'blog',
    label: 'Blog',
    component: Blog,
    children
  }
});


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },  
    {
      path: '/',
      name: 'home',
      label : 'Home',
      component: Home
    },
    {
      path: '/products',
      name : 'products',
      label : 'Products',
      component : Products,
      children: [
        {
          path: '/realtimedashboard',
          name : 'realtimedashboard',
          label : 'Real-Time Dashboard',
          component: RealTimeDash
        },
        {
          path: '/audiencesocialintel',
          name : 'audiencesocialintel',
          label : 'Audience & Social Intelligence',
          component: AudienceIntel
        },
      ]
    },
    {
      path: '/services',
      name: 'services',
      label : 'Services',
      beforeEnter() {
        window.open('http://credibleinfluence.com/','_blank');
      },
    },
    {
      path: '/casestudies',
      name: 'casestudies',
      label : 'Case Studies',
      component: CaseStudies
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      label : 'About Us',
      component: Aboutus
    },
    {
      path: '/faq',
      name: 'faq',
      label : 'FAQ',
      component: Faq
    },

    ...blogRoutes,

    {
      path: '/careers',
      name: 'careers',
      label : 'Careers',
      component: Careers
    },

    
  ]

});
