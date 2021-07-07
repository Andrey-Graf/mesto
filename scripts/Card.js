export default class Card {
    constructor(data, cardSelector, openPopup, popupPhoto, photoImage, photoCaption) {
        this._cardSelector = cardSelector;
        this._image = data.link;
        this._title = data.title;
        this._openPopup = openPopup;
        this._popupPhoto = popupPhoto;
        this._photoImage = photoImage;
        this._photoCaption = photoCaption;
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content.querySelector('.photo-grid__element')
        .cloneNode(true);

        return cardElement;
    }

    _handleDelete() {
        this._card.remove();
        this._card = null;
    }

    _handleLike() {
        this._card.querySelector('.photo-grid__like-button').classList.toggle('photo-grid__like-button_activ');
    }

    _handleOpenPopup () {
        this._photoImage.src = this._card.querySelector('.photo-grid__image').src;
        this._photoImage.alt = this._card.querySelector('.photo-grid__image').alt;
        this._photoCaption.textContent = this._card.querySelector('.photo-grid__caption').textContent;
        this._openPopup(this._popupPhoto);
    }

    _setEventListeners() {
        this._card.querySelector('.photo-grid__delete-button').addEventListener('click', () => {
            this._handleDelete();
        });
        this._card.querySelector('.photo-grid__like-button').addEventListener('click', () => {
            this._handleLike();
        });
        this._card.querySelector('.photo-grid__image').addEventListener('click', () => {
            this._handleOpenPopup();
        });
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