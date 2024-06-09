AFRAME.registerComponent('arrange', {
    init: function () {
        const el = this.el;
        const doors = Array.from(el.querySelectorAll('.link'));
        const xSpacing = 5;

        doors.forEach((door, index) => {
            door.setAttribute('position', {
                x: -5 + index * xSpacing,
                y: 1.5,
                z: -5
            });
        });
    }
});
