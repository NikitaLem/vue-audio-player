export default class Dragger {
  constructor(elem) {
    this.elem = elem;
    this.shiftY = 0;
    this.shiftX = 0;
  }

  prepareDrag(event) {
    this.isDragging = true;
    const { top, left } = this.getCoords();
    this.shiftY = top;
    this.shiftX = left;
    this.position.top = event.pageY - this.shiftY;
    this.position.left = event.pageX - this.shiftX;
    document.addEventListener('mousemove', this.drag);
    document.addEventListener('mouseup', this.endDrag);
  }

  drag(event) {
    if (!this.isDragging) return;
    this.position.top = event.pageY - this.shiftY;
    this.position.left = event.pageX - this.shiftX;
  }

  endDrag() {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.drag);
    document.removeEventListener('mouseup', this.endDrag);
  }

  getCoords() {
    return {
      top: this.elem.getBoundingClientRect().top + window.pageYOffset,
      left: this.elem.getBoundingClientRect().left + window.pageXOffset,
    };
  }
}
