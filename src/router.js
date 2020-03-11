import Vue from 'vue';
import Router from 'vue-router';

import NotFound from './components/Content/pages/NotFound';

import Home from './components/Content/pages/Home';
import About from './components/Content/pages/AboutWrapper';
import AboutUs from './components/Content/pages/AboutUs';
import Contactus from './components/Content/pages/Contactus';
import Faq from './components/Content/pages/Faq';
import Careers from './components/Content/pages/Careers';
import CareerIndividual from './components/Content/pages/CareerIndividual';
import Blog from './components/Content/pages/Blog';
import BlogIndividual from './components/Content/pages/BlogIndividual';
import CaseStudies from './components/Content/pages/CaseStudies';
import CaseStudyIndividual from './components/Content/pages/CaseStudyIndividual';


import Products from './components/Content/pages/Products';
import RealTimeDash from './components/Content/pages/RealTimeDashboards';
import AIAudienceAnal from './components/Content/pages/AIAudienceAnal';
import MarketingIntel from './components/Content/pages/MarketingIntel';
import MktgSocialIntelligence from './components/Content/pages/MktgIntelSocialIntelligence';
import MktgPaidMedia from './components/Content/pages/MtkgIntelPaidMedia';
import MktgNewsPr from './components/Content/pages/MktgIntelNewsPr';
import TermsConditions from './components/Content/pages/TermsConditions';
import PrivacyPolicy from './components/Content/pages/PrivacyPolicy';
import CookiePolicy from './components/Content/pages/CookiePolicy';

import CES from './components/Content/pages/campaigns/Ces';
import VirtualEvents from './components/Content/pages/campaigns/VirtualEvents';

import BlogEntries from './statics/WPPostsEntries.json';
import JobsEntries from './statics/CareersEntries.json';
import CaseStudiesEntries from './statics/CaseStudiesEntries.json';

//Routes for the Blog
const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: 'post'+child.ID,
    name: 'post'+child.ID,
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

//Routes for Careers
const jobsRoutes = Object.keys(JobsEntries).map(section => {
  const children = JobsEntries[section].map(child => ({
    path: child.slug,
    name: child.slug,
    component: CareerIndividual
  }))
  return {
    path: '/careers',
    name: 'careers',
    label: 'Careers',
    component: Careers,
    children
  }
});


//Routes for Case Studies
const studiesRoutes = Object.keys(CaseStudiesEntries).map(section => {
  const children = CaseStudiesEntries[section].map(child => ({
    path: child.slug,
    name: child.slug,
    component: CaseStudyIndividual
  }))
  return {
    path: '/casestudies',
    name: 'casestudies',
    label: 'Case Studies',
    component: CaseStudies,
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
      redirect: '/realtimedashboard',
      component : Products,
      children: [
        {
          path: '/realtimedashboard',
          name : 'realtimedashboard',
          label : 'Real-Time Dashboard',
          component: RealTimeDash
        },
        {
          path: '/aiaudienceanalysis',
          name : 'aiaudienceanalysis',
          label : 'AI Audience Analysis',
          component: AIAudienceAnal
        },
        {
          path: '/marketingintelplatform',
          name : 'marketingintelplatform',
          label : 'Marketing Intelligence Platform',
          component: MarketingIntel
        },
      ]
    },
    {
      path: '/services',
      name: 'services',
      label : 'Services',
      beforeEnter() {
        location.href = 'http://www.credibleinfluence.com/';
      },
    },

    ...studiesRoutes,
    
    ...blogRoutes,

    {
      path: '/about',
      name : 'about',
      label : 'About Us',
      component : About,
      //redirect : '/aboutus',
      children: [
        {
          path: '/aboutus',
          name: 'aboutus',
          label : 'About Us',
          component: AboutUs
        },
        {
          path: '/contactus',
          name: 'contactus',
          label : 'Contact Us',
          component: Contactus
        },
        {
          path: '/faq',
          name: 'faq',
          label : 'FAQ',
          component: Faq
        },
        ...jobsRoutes,

      ]
      
    },


    {
      path: '/marketingintelplatform/socialintelligence',
      name: 'socialintelligence',
      label : 'Social Intelligence',
      component: MktgSocialIntelligence
    },

    {
      path: '/marketingintelplatform/paidmedia',
      name: 'paidmedia',
      label : 'Paid Media',
      component: MktgPaidMedia
    },

    {
      path: '/marketingintelplatform/newspr',
      name: 'newspr',
      label : 'News & PR',
      component: MktgNewsPr
    },

    {
      path: '/terms-conditions',
      name: 'terms-conditions',
      label : 'Terms & Conditions',
      component: TermsConditions
    },

    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      label : 'Privacy Policy',
      component: PrivacyPolicy
    },
    
    {
      path: '/cookie-policy',
      name: 'cookie-policy',
      label : 'Cookie Policy',
      component: CookiePolicy
    },

    {
      path: '/ces',
      name: 'ces',
      label : 'CES',
      component: CES
    },

    {
      path: '/virtualevents',
      name: 'virtualevents',
      label : 'Virtual Events',
      component: VirtualEvents
    },







    
  ]

});
