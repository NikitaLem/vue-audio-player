<template>
  <div
    ref="audioPlayer"
    class="audio-player"
    @mousedown="prepareDrag"
  >
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  data() {
    return {
      position: {
        top: 0,
        left: 0,
      },
      isDragging: false,
      shiftY: 0,
      shiftX: 0,
    };
  },
  methods: {
    prepareDrag(event) {
      this.isDragging = true;
      const { top, left } = this.getCoords();
      console.log(top, left);
      this.shiftY = top;
      this.shiftX = left;
      this.position.top = event.pageY - this.shiftY;
      this.position.left = event.pageX - this.shiftX;
      document.addEventListener('mousemove', this.drag);
      document.addEventListener('mouseup', this.endDrag);
    },

    drag(event) {
      if (!this.isDragging) return;
      this.position.top = event.pageY - this.shiftY;
      this.position.left = event.pageX - this.shiftX;
      console.log(event.pageY, event.pageX);
    },

    endDrag() {
      this.isDragging = false;
      document.removeEventListener('mousemove', this.drag);
      document.removeEventListener('mouseup', this.endDrag);
    },

    getCoords() {
      return {
        top: this.$refs.audioPlayer.getBoundingClientRect().top + window.pageYOffset,
        left: this.$refs.audioPlayer.getBoundingClientRect().left + window.pageXOffset,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.audio-player {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 20rem;
  height: 47.5rem; //! временно
  border: 1px solid #232323;
}
</style>
