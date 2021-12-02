export default class Card {
    constructor(cardSelector, { link, title, handleCardClick }) {
        this._cardSelector = cardSelector;
        this._image = link;
        this._title = title;
        this._handleCardClick = handleCardClick;
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

    _setEventListeners() {
        this._card.querySelector('.photo-grid__image_click_open').addEventListener('click', () => {
            this._handleCardClick();
        });
        this._card.querySelector('.photo-grid__like-button').addEventListener('click', () => {
            this._handleLike();
        });
        this._card.querySelector('.photo-grid__delete-button').addEventListener('click', () => {
            this._handleDelete();
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