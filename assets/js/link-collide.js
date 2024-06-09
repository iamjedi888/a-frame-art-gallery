AFRAME.registerComponent('link-collide', {
    init: function () {
        console.log("Link Collide Component Loaded");
        this.el.addEventListener('hitstart', (event) => {
            let link = event.detail.target.getAttribute('link');
            if (link && link.href) {
                window.location.href = link.href;
            }
        });
    }
});
