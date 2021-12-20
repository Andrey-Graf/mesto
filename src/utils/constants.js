const editButton = document.querySelector('.profile__edit-button');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_job');
const formEdit = document.querySelector('.edit-form');
const addButton = document.querySelector('.profile__add-button');
const formAdd = document.querySelector('.add-form');
const formAvatar = document.querySelector('.avatar-form');
const editButtonAvatar = document.querySelector('.profile__avatar-edit-btn');
//Slectors
const titleName = '.profile__name';
const subtitleJob = '.profile__job';
const userAvatar = '.profile__avatar';
const popupConfirm = '.popup-confirm';
const photoElementTemplete = '.photo-template';

const photoSelector = {
    photoImageSelector: '.photo-grid__image',
    photoFigcaptionSelector: '.photo-grid__caption',
    photoLikeButton: '.photo-grid__like-button',
    photoLikeCount: '.photo-grid__like-count',
    photoDelete: '.photo-grid__delete-button'
}

const configValidation = {
    formSelector: '.form',
    inputSelector: '.form__text',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save_inactive',
    inputErrorClass: 'form__text_type_error',
    errorClass: 'form__input-error_active',
}

export { editButton, nameInput, jobInput, titleName, subtitleJob, userAvatar, formEdit, addButton, formAdd, formAvatar, popupConfirm, editButtonAvatar, photoSelector, photoElementTemplete };

export { configValidation };