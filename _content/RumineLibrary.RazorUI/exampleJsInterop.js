export function scrollTo(elementId, offset) {
    const element = document.getElementById(elementId);
    window.scrollTo(0, element.offsetTop - offset);
    element.classList.add("highlite");
}

export function writeTextClipboard(text) {
    navigator.clipboard.writeText(text);
}

export function installNewsNavigationHighlight() {
    const highlightClass = "nav-highlight";
    const logoHeight = document.querySelector(".main-header").clientHeight;
    const headerNewsHeight = 0;
    const freeSpace = 0;

    var fixedHeight = headerNewsHeight + logoHeight + freeSpace;
    fixedHeight = -fixedHeight;

    window.addEventListener('scroll', function () {
        var currentElement;
        var navigatableElements = document.querySelectorAll(".navigatable");
        if (navigatableElements.length == 0) {
            return;
        }
        //Находим первый пролистанный
        var minDiffElement = {
            element: undefined,
            difference: 100000
        };
        navigatableElements.forEach(element => {
            var viewportOffset = element.getBoundingClientRect();
            var offsetY = viewportOffset.top + fixedHeight;

            //Больше 0 - еще впереди.
            //Равно 0 - у верхнего края экрана
            //Меньше 0 - уже начата прокрутка
            const offsetDifference = Math.abs(offsetY);
            if (offsetDifference < minDiffElement.difference && offsetY < 0) {
                minDiffElement.element = element;
                minDiffElement.difference = offsetDifference;
            }
        });

        const newCurrentElement = minDiffElement.element;
        if (newCurrentElement && newCurrentElement != currentElement) {
            document.querySelectorAll("." + highlightClass).forEach(e => e.classList.remove(highlightClass));

            currentElement = newCurrentElement;
            const id = newCurrentElement.id;
            const navID = "nav-" + id;
            const newNavElement = document.querySelector("#" + navID);
            if (newNavElement) {
                newNavElement.classList.add(highlightClass)
            }
            else {
                console.log(newCurrentElement);
                console.log("nav not found " + navID)
                console.log(navID);
            }
        }
    });
}