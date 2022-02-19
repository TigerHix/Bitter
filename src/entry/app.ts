import { createApp } from 'vue'
import { createRouter, createWebHashHistory, Router } from 'vue-router'

import App from '../view/app.vue'
import Test from '../view/test.vue'
import Login from '../view/login.vue'
import Timeline from '../view/timeline.vue'
import Profile from '../view/profile.vue'
import PostPage from '../view/postPage.vue'
import CommentPage from '../view/commentPage.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog';
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './../assets/index.css'

import linkify from 'vue-linkify'
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import 'animate.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasHeart, faRetweet as fasRetweet, faArrowUpFromBracket as fasArrowUpFromBracket, faHome as fasHome, faHashtag as fasHashtag, faBell as fasBell, faEnvelope as fasEnvelope, faBookmark as fasBookmark, faRectangleList as fasRectangleList, faUser as fasUser, faGear as fasGear, faFeatherPointed as fasFeatherPointed, faArrowLeft as fasArrowLeft, faThumbTack as fasThumbTack } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart, faComment as farComment, faFaceSmile as farFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fasHeart, farHeart, fasRetweet, farComment, fasArrowUpFromBracket, fasHome, fasHashtag, fasBell, fasEnvelope, fasBookmark, fasRectangleList, fasUser, fasGear, fasFeatherPointed, farFaceSmile, fasArrowLeft, fasThumbTack)
import VueTippy from 'vue-tippy'
import vue3PhotoPreview from 'vue3-photo-preview';
import 'vue3-photo-preview/dist/index.css';

const routes = [
  { name: 'test', path: '/test', component: Test },
  { name: 'login', path: '/login', component: Login },
  { name: 'timeline', path: '/', component: Timeline },
  { name: 'profile', path: '/profile/:uid', component: Profile, props: true },
  { name: 'post', path: '/post/:postId', component: PostPage, props: true },
  { name: 'comment', path: '/post/:postId/:type/:objectId/:rootId/:threadId?/:targetId?', component: CommentPage, props: true }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      cache: {
        posts: {}
      }
    }
  },
  getters: {
    getCachedPost: (state: any) => (id: string) => {
      return state.cache.posts[id]
    }
  },
  mutations: {
    cachePost(state: any, post: Post) {
      state.cache.posts[post.id] = post
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(PrimeVue)
app.component('Button', Button)
app.component('Card', Card)
app.component('Dialog', Dialog)
app.directive('linkified', linkify)
app.component("InfiniteLoading", InfiniteLoading);
app.use(VueTippy, {
  defaultProps: { placement: 'bottom', theme: 'light-border' },
})
app.use(vue3PhotoPreview);
import 'tippy.js/dist/tippy.css'
import "tippy.js/themes/light-border.css";
import { Post } from '@/models/models'
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')