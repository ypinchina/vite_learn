import { defineComponent } from "vue";
import './style/test.styl';

export default defineComponent({
  setup() {
    return () => {
      return <div class="root">Hello Vue3 Jsx</div>
    }
  }
})