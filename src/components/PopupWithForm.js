import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { validate, handleSubmit }) {
        super(popupSelector);
        this._form = this._popupElement.querySelector('.form');
        this._handleSubmit = handleSubmit;
        this._validate = validate;
    }

    open() {
        super.open();
        this._validate.enableValidation();
        this._validate.toggleButtonState();
    }

    _getInputValues() {
        const inputList = Array.from(this._form.querySelectorAll('.form__text'));
        const data = {};
        inputList.forEach(input => {
            data[input.name] = input.value;
        });
        return data;
    }

    setEventListeners = () => {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValues());
            this.close();
        });
        super.setEventListeners();
    }

    close() {
        this._form.reset();
        this._form.removeEventListener('submit', this._submitHandler);
        super.close();
    }
}