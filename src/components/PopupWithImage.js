import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPhoto = this._popupElement.querySelector('.popup-photo__image');
        this._popupFigcaption = this._popupElement.querySelector('.popup-photo__caption');
    }

    open(link, title) {
        this._popupPhoto.src = link;
        this._popupPhoto.alt = title;
        this._popupFigcaption.textContent = title;
        super.open();
    }
}