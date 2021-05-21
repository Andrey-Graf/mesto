// Находим форму в DOM
let formElement = document.querySelector('.button-open-form');// Воспользуйтесь методом querySelector()
let popup = document.querySelector('.popup');
let closePopup = document.querySelector('.popup__button-close');

formElement.addEventListener('click', function(){
    popup.classList.add('popup_opened');
})

closePopup.addEventListener('click', function(){
    popup.classList.remove('popup_opened');
})
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input-name');// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input-job');// Воспользуйтесь инструментом .querySelector()

let formSubmitHandler = document.querySelector('.button-save');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
formSubmitHandler.addEventListener('click', function(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
    document.getElementById('name').value;
    document.getElementById('job').value;
    // Получите значение полей jobInput и nameInput из свойства value
    let titleName = document.querySelector('.profile__info-title');
    let subtitleJob = document.querySelector('.profile__info-subtitle');
    // Выберите элементы, куда должны быть вставлены значения полей
    titleName.textContent = document.getElementById('name').value;
    subtitleJob.textContent = document.getElementById('job').value;
    // Вставьте новые значения с помощью textContent
    popup.classList.remove('popup_opened');
}) 

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);