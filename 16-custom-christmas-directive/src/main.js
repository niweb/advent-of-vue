import { createApp } from 'vue'
import App from './App.vue'
import './base.css'

const app = createApp(App)

app.directive('christmas', (el, {arg: color = 'red-green', value: duration}) => {
  el.classList.add('christmas-text', color)
  el.style.animationDuration = `${duration}s`
})

app.mount('#app')
