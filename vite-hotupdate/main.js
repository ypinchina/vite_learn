import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'



export function render() {
  document.querySelector('#app').innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
        <p>444444444444414242142144444</p>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  `

  setupCounter(document.querySelector('#counter'))

}

render()

if (import.meta.hot) {
  // 只有开发环境使用
  import.meta.hot.accept((newModule) => {
    newModule.render()
  })
}