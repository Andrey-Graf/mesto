// Валидация форм
const formElement = document.querySelector('.form'); // Переменная форм
const inputElement  = formElement.querySelector('.form__text'); // Переменная полей ввода
// Выбираем элемент ошибки на основе уникального класса
const formError = formElement.querySelector(`#${inputElement.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add('form__text_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('form__text_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
};

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

const setEventListeners = (formElement) => {
    // Находим все поля внутри формы, сделаем масив.
    const inputList = Array.from(formElement.querySelectorAll('.form__text'));
    const buttonElement = formElement.querySelector('.popup__button-save');
    // Обойдём все элементы полученной коллекции
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
    });
    });
};

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся фунцкция
      // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
    });
};

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
    buttonElement.classList.add('popup__button-save_inactive');
    buttonElement.setAttribute('disabled', 'disabled');
    } else {
      // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__button-save_inactive');
    buttonElement.removeAttribute('disabled', 'disabled');
    }
};

function enableValidation() {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.form'));
    // Переберём полученную коллекцию
        formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            // У каждой формы отменим стандартное поведение
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
        fieldsetList.forEach((fieldSet) => {
        setEventListeners(fieldSet);
        });
    });
};

enableValidation();