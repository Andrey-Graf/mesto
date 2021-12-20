// Валидация форм

import { configValidation } from '../utils/constants.js'

class FormValidator {
    constructor(data, form) {
            this._form = form;
            this._inputSelector = data.inputSelector;
            this._inputList = data.inputList;
            this._buttonElement = data.buttonElement;
            this._submitButtonSelector = data.submitButtonSelector;
            this._inactiveButtonClass = data.inactiveButtonClass;
            this._inputErrorClass = data.inputErrorClass;
            this._errorClass = data.errorClass;
        }
        // Функция принимает массив полей
    _hasInvalidInput = () => {
        // проходим по этому массиву методом some
        return this._inputList.some((inputElement) => {
            // Если поле не валидно, колбэк вернёт true
            // Обход массива прекратится и вся фунцкция
            // hasInvalidInput вернёт true
            return !inputElement.validity.valid;
        });
    };

    toggleButtonState = () => {
        // Если есть хотя бы один невалидный инпут
        if (this._hasInvalidInput()) {
            // сделай кнопку неактивной
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.setAttribute('disabled', 'disabled');
        } else {
            // иначе сделай кнопку активной
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.removeAttribute('disabled');
        }
    };

    resetValidation() {
        this.toggleButtonState(); //<= = управляем кнопкой ==
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement) //<= = очищаем ошибки ===
        })

    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError = (inputElement) => {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    _isValid = (inputElement) => {
        if (!inputElement.validity.valid || inputElement.validity.typeMismatch) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _setEventListeners = () => {
        // Находим все поля внутри формы, сделаем масив.
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
        this._inputList.forEach((inputElement) => {
            // каждому полю добавим обработчик события input
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement);
                this.toggleButtonState();
            });
        });
    };

    enableValidation = () => {
        this._setEventListeners(this._form);
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    };
}

export { FormValidator };