import '../pages/index.css';
import { FormValidator, configValidation } from '../components/FormValidator.js';
import { inCards } from '../components/initial-cards.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { editButton, nameInput, jobInput, titleName, subtitleJob, formEdit, addButton, formAdd } from '../utils/constants.js'

// Открыть попап с фотографией.
const popupWithImage = new PopupWithImage('.popup-photo');
popupWithImage.setEventListeners();

const createNewCard = (link, title) => {
    const card = new Card('.photo-template', {
        link: link,
        title: title,
        handleCardClick: () => {
            popupWithImage.open(link, title);
        }
    });
    return card;
}

// Отрисовка элементов на странице.
const cardsTemplate = new Section({
    items: inCards,
    renderer: (data) => {
        const card = createNewCard(data.link, data.title);
        const cardElement = card.generateCard();
        cardsTemplate.addItem(cardElement);
    }
}, '.photo-grid__elements');

cardsTemplate.rendererCards();
//проверка валидации формы добавления фотографии
const validateAddForm = new FormValidator(configValidation, formAdd);
validateAddForm.enableValidation();

// Попап создать новую карточку.
const popupWithAddForm = new PopupWithForm('.popup-add', {
    validate: validateAddForm,
    handleSubmit: (data) => {
        const card = createNewCard(data.link, data.title);
        const cardElement = card.generateCard();
        cardsTemplate.addItem(cardElement);
    }
});

addButton.addEventListener('click', () => {
    popupWithAddForm.open();
});

// Попап профиль.
const userInfo = new UserInfo({
    userNameSelector: titleName,
    userJobSelector: subtitleJob
});

//Проверка валидации формы редактора профиля.
const validateEditForm = new FormValidator(configValidation, formEdit);
validateEditForm.enableValidation();

//Открыть попап редактора профиля.
const popupUserInfo = new PopupWithForm('.popup-edit', {
    validate: validateEditForm,
    handleSubmit: (data) => {
        userInfo.setUserInfo(data);
    }
});

const popupEditProfile = () => {
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.job;
    popupUserInfo.open();
}

editButton.addEventListener('click', popupEditProfile);