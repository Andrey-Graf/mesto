// Находим форму в DOM
let editButton = document.querySelector('.profile__edit-button');// Воспользуйтесь методом querySelector()
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('.input__text_type_name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.input__text_type_job');// Воспользуйтесь инструментом .querySelector()
let titleName = document.querySelector('.profile__info-title');
let subtitleJob = document.querySelector('.profile__info-subtitle');
let form = document.querySelector('.input');


function formOpen(){
    nameInput.value = titleName.textContent;
    jobInput.value = subtitleJob.textContent;
    popup.classList.add('popup_opened');
}

editButton.addEventListener('click', formOpen);

function formClose(){
    popup.classList.remove('popup_opened');
}

closePopup.addEventListener('click', formClose);

// Находим поля формы в DOM

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
    formClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
form.addEventListener('submit', formSubmitHandler);