const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-button');
const closePopupEdit = document.querySelector('.popup__button-close_edit_form');
const nameInput = document.querySelector('.input__text_type_name');
const jobInput = document.querySelector('.input__text_type_job');
const titleName = document.querySelector('.profile__info-title');
const subtitleJob = document.querySelector('.profile__info-subtitle');
const formEdit = document.querySelector('.edit-input');

const popupAdd = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-button');
const closePopupAdd =document.querySelector('.popup__button-close_add_form');
const formAdd = document.querySelector('.add-input');
const namePhotoInput = document.querySelector('.input__text_photo_name');
const linkPhotoInput = document.querySelector('.input__text_photo_link');

const photoButton = document.querySelector('.photo-grid__image');
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoClose = document.querySelector('.popup__button-close_photo_form');
const photoCaption = document.querySelector('.popup-photo__caption');
const photoImage = document.querySelector('.popup-photo__image');

const photoGridElements = document.querySelector('.photo-grid__elements');
const photoTemplate = document.querySelector('.photo-template').content;

const initialCards = [
    {
    name: 'Бали',
    link: 'https://images.unsplash.com/photo-1622512272112-adeced423785?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
    name: 'Калининград, порт',
    link: 'https://images.unsplash.com/photo-1518291825369-f4bbd68a350a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
    },
    {
    name: 'Дом советов',
    link: 'https://images.unsplash.com/photo-1570980283252-4fffeb60229a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
    },
    {
    name: 'Кафедральный собор',
    link: 'https://images.unsplash.com/photo-1548270095-a5b17516d66a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
    name: 'Великий Новгород',
    link: 'https://images.unsplash.com/photo-1600253613497-8a39b8b4a5de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
    },
    {
    name: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/flagged/photo-1583861353616-4dfabcc7ea9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'
    }
];
//Общая функция открытия попап.
function openPopup(popup) {
    popup.classList.add('popup_opened');
}
//Общая функция закрытия попап.
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//Открыть попап редактор профиля.
function openFormEdit(){
    nameInput.value = titleName.textContent;
    jobInput.value = subtitleJob.textContent;
    openPopup(popupEdit);
}

editButton.addEventListener('click', openFormEdit);

//Закрыть попап редактора профиля.
function closeFormEdit(){
    closePopup(popupEdit);
}

closePopupEdit.addEventListener('click', closeFormEdit);

//Открыть попап добавления фото.
function openFormAdd(){
    namePhotoInput.value = '';
    linkPhotoInput.value = '';
    openPopup(popupAdd);
}

addButton.addEventListener('click', openFormAdd);

//Закрыть попап добавления фото.
function closeFormAdd(){
    closePopup(popupAdd);
}

closePopupAdd.addEventListener('click', closeFormAdd);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt){
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    titleName.textContent = nameInput.value;
    subtitleJob.textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent
    closeFormEdit();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEdit.addEventListener('submit', formSubmitHandler);
//Закрыть просмотр фото.
function clousePhoto () {
    closePopup(popupPhoto);
}

popupPhotoClose.addEventListener('click', clousePhoto);

function renederItems () {
    initialCards.forEach(renederItem);
}
renederItems();
//Добавление 6 карточек из масива.
function renederItem(el) {
    const initialCardsElement = photoTemplate.cloneNode(true);
    initialCardsElement.querySelector('.photo-grid__caption').textContent = el.name;
    initialCardsElement.querySelector('.photo-grid__image').src = el.link;
    initialCardsElement.querySelector('.photo-grid__image').alt = el.name;
    initialCardsElement.querySelector('.photo-grid__like-button').addEventListener('click', function (evt){
        const eventTarget = evt.target.classList.toggle('photo-grid__like-button_activ');
    });
    initialCardsElement.querySelector('.photo-grid__delete-button').addEventListener('click', function (evt) {
        evt.target.closest('.photo-grid__element').remove();
    });
    initialCardsElement.querySelector('.photo-grid__image_click_open').addEventListener('click', function(evt){
        popupPhoto.classList.add('popup_opened');
        photoCaption.textContent = evt.target.closest('.photo-grid__element').querySelector('.photo-grid__caption').textContent;
        photoImage.src = evt.target.closest('.photo-grid__image').src;
    });
    photoGridElements.prepend(initialCardsElement);
    
}

//Функция добавление новых карт.
function createNewCards(evt) {
    evt.preventDefault();
    const addNewCard = renederItem({name: namePhotoInput.value, link: linkPhotoInput.value});
    closeFormAdd();
    return addNewCard;
}

formAdd.addEventListener('submit', createNewCards);