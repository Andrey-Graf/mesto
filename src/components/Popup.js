export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(this._popupSelector);
        this._handleClickClose = this._handleClickClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    _handleEscClose(evnt) {
        if (evnt.key === 'Escape') {
            this.close();
        }
    }

    _handleClickClose(evnt) {
        if (evnt.target.classList.contains('popup__button-close') || evnt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', this._handleClickClose);
        document.addEventListener('keydown', this._handleEscClose);
    }

    _removeEventListeners() {
        this._popupElement.removeEventListener('click', this._handleClickClose);
        document.removeEventListener('keydown', this._handleKeydownClose);
    }

    open() {
        this.setEventListeners();
        this._popupElement.classList.add('popup_opened');
    }

    close() {
        this._removeEventListeners();
        this._popupElement.classList.remove('popup_opened');
    }
}