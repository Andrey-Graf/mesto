export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    rendererCards(cardData) {
        cardData.forEach(card => {
            this._renderer(card);
        });
    }

    addItem(domElement) {
        this._container.prepend(domElement);
    }
}