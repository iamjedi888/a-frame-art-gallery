AFRAME.registerComponent('image-size', {
    init: function() {
      const el = this.el;
      const imgId = el.getAttribute('src').replace('#', '-image');
      const imgEl = document.getElementById(imgId);
      const frameEl = el.querySelector('.frame');

      if (!imgEl) {
        console.warn(`Image with id ${imgId} not found.`);
        return;
      }

      imgEl.addEventListener('load', () => {
        const width = imgEl.naturalWidth;
        const height = imgEl.naturalHeight;
        const aspectRatio = width / height;
        const newWidth = 1;
        const newHeight = newWidth / aspectRatio;
        const padding = 0.25;

        el.setAttribute('height', newHeight);
        el.setAttribute('width', newWidth);

        if (frameEl) {
          frameEl.setAttribute('height', newHeight + padding);
          frameEl.setAttribute('depth', newWidth + padding);
        }
      });
    }
});
