import '../pages/index.css';
import { FormValidator } from '../components/FormValidator.js';
import { configValidation } from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import { editButton, nameInput, jobInput, titleName, subtitleJob, userAvatar, formEdit, addButton, formAdd, formAvatar, popupConfirm, editButtonAvatar, photoSelector, photoElementTemplete } from '../utils/constants.js'
import Api from '../components/Api.js';

let elemCard = null;
let userId = null;
// Открыть попап с фотографией.
const popupWithImage = new PopupWithImage('.popup-photo');

const renderCard = (data) => {
    const card = createNewCard(data);
    const cardElement = card.generateCard();
    card.setLikeCount(data);
    cardsList.addItem(cardElement);
}

// Отрисовка элементов на странице.
const cardsList = new Section({
    renderer: (data) => {
        renderCard(data);
    }
}, '.photo-grid__elements');

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-31',
    headers: {
        authorization: '32e84a94-3e62-41e4-a88d-158365ef2a09',
        'Content-Type': 'application/json'
    }
});

api.getInitial()
    .then(([userData, cardData]) => {
        userId = userData._id;
        userInfo.setUserInfo(userData);
        cardsList.rendererCards(cardData);
    })
    .catch((err) => {
        console.log(err);
    })

//Попап удаления фотокарточек.
const popupWithConfirmation = new PopupWithConfirmation(popupConfirm, {
    handleSubmit: (data) => {
        api.deleteCard(data)
            .then(() => {
                elemCard.deleteCardElem();
            })
            .then(() => {
                elemCard = null;
                popupWithConfirmation.close();
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

const createNewCard = (data) => {
    const card = new Card(data, photoElementTemplete, userId, photoSelector, {
        handleCardClick: () => {
            popupWithImage.open(data);
        },
        handleDeleteCard: () => {
            elemCard = card;
            popupWithConfirmation.open(data);
        },
        handleLikeClick: () => {
            api.setLike(data)
                .then((data) => {
                    card.setLikeCount(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        },
        deleteLikeClick: () => {
            api.deleteLike(data)
                .then((data) => {
                    card.setLikeCount(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        },
    });
    return card;
}

// Попап создать новую карточку.
const popupWithAddForm = new PopupWithForm('.popup-add', {
    handleSubmit: (data) => {
        popupWithAddForm.renderLoading(true);
        api.postCard(data)
            .then((res) => {
                renderCard(res);
                popupWithAddForm.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupWithAddForm.renderLoading(false);
            })
    }
});

addButton.addEventListener('click', () => {
    validateAddForm.resetValidation();
    popupWithAddForm.open();
});

//проверка валидации формы добавления фотографии.
const validateAddForm = new FormValidator(configValidation, formAdd);
validateAddForm.enableValidation();

// Профиль.
const userInfo = new UserInfo({
    userNameSelector: titleName,
    userJobSelector: subtitleJob,
    userAvatarSelector: userAvatar
});

const editPopupProfile = () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.about;
    popupUserInfo.open();
}

editButton.addEventListener('click', editPopupProfile);

//Проверка валидации формы редактора профиля.
const validateEditForm = new FormValidator(configValidation, formEdit);
validateEditForm.enableValidation();

//Открыть попап редактора профиля.
const popupUserInfo = new PopupWithForm('.popup-edit', {
    handleSubmit: (data) => {
        popupUserInfo.renderLoading(true);
        api.setUserInfo(data)
            .then((res) => {
                userInfo.setUserInfo(res);
                popupUserInfo.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupUserInfo.renderLoading(false);
            })
    }
});

//Попап редактора аватарки.
const popupUserEditAvatar = new PopupWithForm('.popup-avatar', {
    handleSubmit: (data) => {
        popupUserEditAvatar.renderLoading(true);
        api.setUserAvatar(data)
            .then((res) => {
                userInfo.setUserAvatar(res);
                popupUserEditAvatar.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupUserEditAvatar.renderLoading(false);
            })
    }
});

editButtonAvatar.addEventListener('click', () => {
    validateEditAvatarForm.resetValidation();
    popupUserEditAvatar.open();
});

//Проверка валидации формы редактора аватарки.
const validateEditAvatarForm = new FormValidator(configValidation, formAvatar);
validateEditAvatarForm.enableValidation();