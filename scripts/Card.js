export default class Card {
    constructor(data, cardSelector) {
        this._cardSelector = cardSelector;
        this._image = data.link;
        this._title = data.title;
        this._popupPhoto = data.popupPhoto;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector('.photo-grid__element')
            .cloneNode(true);

        return cardElement;
    }

    _handleDelete = () => {
        this._card.remove();
        this._card = null;
    }

    _handleLike = () => {
        this._card.querySelector('.photo-grid__like-button').classList.toggle('photo-grid__like-button_activ');
    }

    _open = () => {
        this._popupPhoto = document.querySelector('.popup-photo');
        this._popupPhoto.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    _close = () => {
        this._popupPhoto.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            const openPopup = document.querySelector('.popup_opened');
            this._close(openPopup);
        }
    }

    _handleOpenPopup = () => {
        document.querySelector('.popup-photo__image').src = this._image;
        document.querySelector('.popup-photo__image').alt = this._title;
        document.querySelector('.popup-photo__caption').textContent = this._title;
        this._open();

    }

    _setEventListeners() {
        this._card.querySelector('.photo-grid__like-button').addEventListener('click', this._handleLike);
        this._card.querySelector('.photo-grid__image_click_open').addEventListener('click', this._handleOpenPopup);
        this._card.querySelector('.photo-grid__delete-button').addEventListener('click', this._handleDelete);
    }

    generateCard() {
        this._card = this._getTemplate();
        this._card.querySelector('.photo-grid__image').src = this._image;
        this._card.querySelector('.photo-grid__image').alt = this._title;
        this._card.querySelector('.photo-grid__caption').textContent = this._title;
        this._setEventListeners();

        return this._card;
    }
}