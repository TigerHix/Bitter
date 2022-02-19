<script>
import { PopperWrapper } from 'floating-vue'

export default {
  ...PopperWrapper,
  name: 'BitterDropdown',
  vPopperTheme: 'bitter-dropdown',
}
</script>

<style>
.v-popper--theme-bitter-dropdown .v-popper__inner {
  background: #fff;
  color: #0f1419;
  border-radius: 16px;
  border: 0;
  box-shadow: rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px;
}
</style>