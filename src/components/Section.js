export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    rendererCards() {
        this._items.forEach(card => {
            this._renderer(card);
        });
    }

    addItem(domElement) {
        this._container.prepend(domElement);
    }
}