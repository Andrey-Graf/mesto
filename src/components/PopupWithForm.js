import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleSubmit }) {
        super(popupSelector);
        this._form = this._popupElement.querySelector('.form');
        this._handleSubmit = handleSubmit;
        this._submitPreventDefault = this._submitPreventDefault.bind(this);
    }

    _getInputValues() {
        const inputList = Array.from(this._form.querySelectorAll('.form__text'));
        const data = {};
        inputList.forEach(input => {
            data[input.name] = input.value;
        });
        return data;
    }

    _submitPreventDefault(evt) {
        evt.preventDefault();
        this._handleSubmit(this._getInputValues());
        this.close();
    }

    setEventListeners = () => {
        this._form.addEventListener('submit', this._submitPreventDefault);
        super.setEventListeners();
    }

    _removeEventListeners() {
        this._form.removeEventListener('submit', this._submitPreventDefault);
    }

    close() {
        this._removeEventListeners();
        this._form.reset();
        super.close();
    }
}