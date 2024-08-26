'use strict'

let shown = false;
window.onkeydown = function () {
    let preFContent = document.querySelectorAll('.pre-f-content');
    let fContent = document.querySelectorAll('.f-content');
    if (this.event.key === "f" || this.event.key === "F") {
        let hiddenClass = "hidden";
        let shownClass = "shown";

        if (!shown) {
            fContent.forEach(c => {
                c.classList.add(shownClass);
            });
            preFContent.forEach(c => {
                c.classList.add(hiddenClass);
            });
        }
        else {
            fContent.forEach(c => {
                c.classList.remove(shownClass);
            });
            preFContent.forEach(c => {
                c.classList.remove(hiddenClass);
            });
        }

        shown = !shown;
    }
}