export default class Card {
    constructor(data, cardSelector, userId, photoSelector, { handleCardClick, handleDeleteCard, handleLikeClick, deleteLikeClick }) {
        this._data = data;
        this._cardSelector = cardSelector;
        this._userId = userId;
        this._photoSelector = photoSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeletecard = handleDeleteCard;
        this._handleLikeClick = handleLikeClick;
        this._deleteLikeClick = deleteLikeClick;

    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content.querySelector('.photo-grid__element')
            .cloneNode(true);

        return cardElement;
    }

    deleteCardElem() {
        this._deleteElement(this._card);
    }

    _deleteElement(elem) {
        elem.remove();
        elem = null;
    }

    _like(data) {
        this._addLike();
        this._handleLikeClick(data);
    }

    _disLike(data) {
        this._removeLike();
        this._deleteLikeClick(data);
    }

    _addLike = () => {
        this._card.querySelector('.photo-grid__like-button').classList.add('photo-grid__like-button_activ');
    }

    _removeLike = () => {
        this._card.querySelector('.photo-grid__like-button').classList.remove('photo-grid__like-button_activ');
    }

    setLikeCount(data) {
        this._likeCount.textContent = String(data.likes.length);
    }

    _checkUserCard() {
        if (this._data.owner._id !== this._userId) {
            this._deleteElement(this._deleteButtonClick);
        }
    }

    _checkLeked() {
        this._data.likes.forEach((likeUser) => {
            if (likeUser._id === this._userId) {
                this._addLike();
            }
        });
    }

    _setEventListeners() {
        this._card.querySelector('.photo-grid__image_click_open').addEventListener('click', () => {
            this._handleCardClick(this._data);
        });
        this._likeButton.addEventListener('click', () => {
            if (this._likeButton.classList.contains('photo-grid__like-button_activ')) {
                this._disLike(this._data);
            } else {
                this._like(this._data);
            }
        });
        this._deleteButtonClick.addEventListener('click', this._handleDeletecard);
    }

    generateCard() {
        this._card = this._getTemplate();
        this._photoImage = this._card.querySelector(this._photoSelector.photoImageSelector);
        this._photoFigcaption = this._card.querySelector(this._photoSelector.photoFigcaptionSelector);
        this._likeCount = this._card.querySelector(this._photoSelector.photoLikeCount);
        this._likeButton = this._card.querySelector(this._photoSelector.photoLikeButton);
        this._deleteButtonClick = this._card.querySelector(this._photoSelector.photoDelete);
        this._card.setAttribute('id', `a${this._data._id}`);
        this._photoImage.src = this._data.link;
        this._photoImage.alt = this._data.name;
        this._photoFigcaption.textContent = this._data.name;
        this.setLikeCount(this._data);
        this._setEventListeners();
        this._checkUserCard();
        this._checkLeked();

        return this._card;
    }
}