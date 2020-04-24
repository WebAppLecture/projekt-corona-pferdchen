export class Menu {

    constructor(domElement) {
        this.domElement = domElement;
        this.domElement.addEventListener("wheel", event => this.changeActiveItem(event.wheelDelta));
    }

    

    load(items, callback) {
        this.domElement.innerHTML = "";
        this.show();

        items.forEach(item => {
            let listElement = document.createElement("ul");
            listElement.innerText = item.NAME;
            this.domElement.appendChild(listElement);
        });
    
        this.activeItem = this.domElement.firstElementChild;    
        this.onSelect = callback;
    }
    select() {
        this.onSelect();
    }
}