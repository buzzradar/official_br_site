import Vue from 'vue';
import Router from 'vue-router';

import NotFound from './components/Content/pages/NotFound';

import Home from './components/Content/pages/Home';
import About from './components/Content/pages/aboutUs/AboutWrapper';
import AboutUs from './components/Content/pages/aboutUs/AboutUs';
import Contactus from './components/Content/pages/aboutUs/Contactus';
import Faq from './components/Content/pages/aboutUs/Faq';
import Careers from './components/Content/pages/aboutUs/Careers';
import CareerIndividual from './components/Content/pages/aboutUs/CareerIndividual';
import Blog from './components/Content/pages/Blog';
import BlogIndividual from './components/Content/pages/BlogIndividual';
import CaseStudies from './components/Content/pages/CaseStudies';
import CaseStudyIndividual from './components/Content/pages/CaseStudyIndividual';


import Products from './components/Content/pages/products/Products';
import RealTimeDash from './components/Content/pages/products/RealTimeDashboards';
import AIAudienceAnal from './components/Content/pages/products/AIAudienceAnal';
import MarketingIntel from './components/Content/pages/products/MarketingIntel';
import MktgSocialIntelligence from './components/Content/pages/products/MktgIntelSocialIntelligence';
import MktgPaidMedia from './components/Content/pages/products/MtkgIntelPaidMedia';
import MktgNewsPr from './components/Content/pages/products/MktgIntelNewsPr';
import TermsConditions from './components/Content/pages/TermsConditions';
import PrivacyPolicy from './components/Content/pages/PrivacyPolicy';
import CookiePolicy from './components/Content/pages/CookiePolicy';
import VirtualEvents from './components/Content/pages/products/VirtualEvents';

import Services from './components/Content/pages/services/Services';
import CredibleInfluence from './components/Content/pages/services/CredibleInfluenceLanding';
import Reports from './components/Content/pages/services/Reports';

import CES from './components/Content/pages/campaigns/Ces';
import CESPersonalities from './components/Content/pages/campaigns/CesPersonalities';


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
      component : Products,
      children: [
        {
          path: '/realtimedashboard',
          name : 'realtimedashboard',
          label : 'Real-Time Dashboard',
          description_menu : 'Turn your data into fast, accessible and actionable intelligence for your entire organisation.',
          icon_menu : 'icon_dash.svg',
          component: RealTimeDash
        },
        {
          path: '/aiaudienceanalysis',
          name : 'aiaudienceanalysis',
          label : 'AI Audience Analysis',
          description_menu : 'Find what really makes your customers tick with AI Audience Analysis.',
          icon_menu : 'icon_ai.svg',
          component: AIAudienceAnal
        },
        {
          path: '/marketingintelplatform',
          name : 'marketingintelplatform',
          label : 'Marketing Intelligence Platform',
          description_menu : 'Buzz Radar connects the sea of marketing data created around your organisation and turns it into actionable, intelligent insights.',
          icon_menu : 'icon_mkt_intel.svg',
          component: MarketingIntel
        },
        {
          path: '/virtualevents',
          name : 'virtualevents',
          label : 'Virtual Events',
          description_menu : 'Make your Virtual Event count with Real-Time Social and Audience Intelligence you can act on instantly',
          icon_menu : 'icon_events.svg',
          component: VirtualEvents
        },
      ]
    },











    {
      path: '/services',
      name : 'services',
      label : 'Services',
      component : Services,
      children: [
        {
          path: '/srv-human-ai-insight',
          name : 'srv-human-ai-insight',
          label : 'Human x AI insight',
          description_menu : 'Combine AI powered social intelligence with award winning human expertise to go beyond the data and understand how insight can be applied to your business.',
          icon_menu : 'icon_dash.svg',
          component: RealTimeDash
        },
        {
          path: '/srv-data-driven-strategy',
          name : 'srv-data-driven-strategy',
          label : 'Data Driven Strategy',
          description_menu : 'Fully data driven digital and social and strategies for brands and campaigns. Powered by deep audience, competitor and landscape analysis.',
          icon_menu : 'icon_ai.svg',
          component: AIAudienceAnal
        },
        {
          path: '/srv-content-optimisation',
          name : 'srv-content-optimisation',
          label : 'Content Optimisation',
          description_menu : 'Using our Virtual AI Audience technology understand how to align your creative so it really resonates with your target personas.',
          icon_menu : 'icon_mkt_intel.svg',
          component: MarketingIntel
        },
        {
          path: '/srv-real-time-monitoring-support',
          name : 'srv-real-time-monitoring-support',
          label : 'Real-Time crisis monitoring & support',
          description_menu : 'With our technology and experienced team we can help you protect your brand’s reputation and prepare you for any future social media crisis.',
          icon_menu : 'icon_events.svg',
          component: VirtualEvents
        },
      ]
    },







    // {
    //   path: '/services',
    //   name : 'services',
    //   label : 'Services',
    //   component : Services,
    // },



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
      path: '/ces-personalities',
      name: 'ces-personalities',
      label : 'CES Personalities',
      component: CESPersonalities
    },

    
  ]

});


