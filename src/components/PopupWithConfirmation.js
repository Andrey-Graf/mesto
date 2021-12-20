import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, { handleSubmit }) {
        super(popupSelector);
        this._popupElement = document.querySelector(this._popupSelector);
        this._form = this._popupElement.querySelector('.form');
        this._handleSubmit = handleSubmit;
        this._submitPreventDefault = this._submitPreventDefault.bind(this);
    }

    _submitPreventDefault(evt) {
        evt.preventDefault();
        this._handleSubmit(this._data);
        this.close();
    }

    setEventListeners = () => {
        this._form.addEventListener('reset', this._submitPreventDefault);
        super.setEventListeners();
    }

    _removeEventListeners() {
        this._form.removeEventListener('reset', this._submitPreventDefault);
        super._removeEventListeners();
    }

    open(data) {
        this.setEventListeners();
        this._data = data;
        super.open();
    }

    close() {
        this._removeEventListeners();
        this._form.reset();
        super.close();
    }
}