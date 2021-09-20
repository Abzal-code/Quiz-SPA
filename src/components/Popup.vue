<template>
  <div class="popup">
    <div class="popup__inner">
      <slot/>
      <button class="popup-close" @click="TogglePopup">close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['TogglePopup']
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  .popup__inner {
    background: #fff;
    padding: 32px;
  }
}

</style>
