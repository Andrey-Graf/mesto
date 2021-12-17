import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupPhoto = this._popupElement.querySelector('.popup-photo__image');
        this._popupFigCaption = this._popupElement.querySelector('.popup-photo__caption');
    }

    open(data) {
        this._popupPhoto.src = data.link;
        this._popupPhoto.alt = data.name;
        this._popupFigCaption.textContent = data.name;
        super.open();
    }
}