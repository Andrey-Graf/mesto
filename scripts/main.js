//Переменные относящиеся к попап редактирования профиля
const popupEdit = document.querySelector('.popup-edit');
const editButton = document.querySelector('.profile__edit-button');
const buttonClosePopupEdit = document.querySelector('.popup__button-close_edit_form');
const nameInput = document.querySelector('.form__text_type_name');
const jobInput = document.querySelector('.form__text_type_job');
const titleName = document.querySelector('.profile__name');
const subtitleJob = document.querySelector('.profile__job');
const formEdit = document.querySelector('.edit-form');
//Переменные относящиеся к попап добавления фото
const popupAdd = document.querySelector('.popup-add');
const addButton = document.querySelector('.profile__add-button');
const buttonClosePopupAdd =document.querySelector('.popup__button-close_add_form');
const formAdd = document.querySelector('.add-form');
const namePhotoInput = document.querySelector('input[name="name-photo"]');
const linkPhotoInput = document.querySelector('input[name="link"]');
const buttonSubmitFormProfile = formEdit.querySelector('.popup__button-save');
//Переменные относящиеся к фото-карточкам 
const photoButton = document.querySelector('.photo-grid__image');
const popupPhoto = document.querySelector('.popup-photo');
const buttonClosePopupPhoto = document.querySelector('.popup__button-close_photo_form');
const photoCaption = document.querySelector('.popup-photo__caption');
const photoImage = document.querySelector('.popup-photo__image');

const photoGridElements = document.querySelector('.photo-grid__elements');
const photoTemplate = document.querySelector('.photo-template').content;

//Общая функция закрытия попап при нажатие на клавишу "Escape"
function closeEscPopup(evt) {
    if (evt.key === 'Escape') {
        const popup = document.querySelector('.popup_opened');
        closePopup(popup);
    }
}

//Общая функция открытия попап.
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEscPopup);
}

//Функция закрытия попап по клику мыши
function closeClickPopup(evt) {
    if(!evt.target.closest('.popup__container')) {
        closePopup(evt.target.closest('.popup'));
    }
}

popupEdit.addEventListener('click', closeClickPopup);
popupAdd.addEventListener('click', closeClickPopup);

//Общая функция закрытия попап.
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEscPopup);
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

buttonClosePopupEdit.addEventListener('click', closeFormEdit);

//Открыть попап добавления фото.
function openFormAdd() {
    openPopup(popupAdd);
    formAdd.reset();
    const input = Array.from(formAdd.querySelectorAll('input'));
    const button = formAdd.querySelector('button');
    toggleButtonState(input, button, configValidation);
}

addButton.addEventListener('click', openFormAdd);

//Закрыть попап добавления фото.
function closeFormAdd() {
    closePopup(popupAdd);
}

buttonClosePopupAdd.addEventListener('click', closeFormAdd);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function submitFormProfile(evt){
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
formEdit.addEventListener('submit', submitFormProfile);

//Закрыть просмотр фото.
function clousePhoto() {
    closePopup(popupPhoto);
}

buttonClosePopupPhoto.addEventListener('click', clousePhoto);
// Закрытие фото попап по клику на оверлей.
popupPhoto.addEventListener('click', function (evt) {
    if(!evt.target.closest('.popup-photo__container')) {
        closePopup(evt.target.closest('.popup'));
    }
});

function createCard(link, title) {
    const initialCardsElement = photoTemplate.cloneNode(true);
    initialCardsElement.querySelector('.photo-grid__caption').innerText = title;
    initialCardsElement.querySelector('.photo-grid__image').src = link;
    initialCardsElement.querySelector('.photo-grid__image').alt = title;
    initialCardsElement.querySelector('.photo-grid__image_click_open').addEventListener('click', function(evt){
        photoCaption.textContent = title;
        photoImage.src = link;
        openPopup(popupPhoto);
    });
    initialCardsElement.querySelector('.photo-grid__delete-button').addEventListener('click', function (evt) {
        evt.target.closest('.photo-grid__element').remove();
    });
    initialCardsElement.querySelector('.photo-grid__like-button').addEventListener('click', function (evt){
        const eventTarget = evt.target.classList.toggle('photo-grid__like-button_activ');
    });
    closeFormAdd();
    return initialCardsElement;
}


function addElement(container, element) {
    container.prepend(element);
}

function createNewCard(evt) {
    evt.preventDefault();
    addElement(photoGridElements, createCard(linkPhotoInput.value, namePhotoInput.value));
    closeFormAdd();
    return addElement;
}

formAdd.addEventListener('submit', createNewCard);

function renderElements() {
    initialCards.forEach((el) => addElement(photoGridElements, createCard(el.link, el.title)));
}

renderElements();