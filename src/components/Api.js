export default class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        }).then(this._handleResponse);
    }

    getCard() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        }).then(this._handleResponse);
    }

    postCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        }).then(this._handleResponse);
    }

    deleteCard(data) {
        return fetch(`${this._url}/cards/${data._id}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(this._handleResponse);
    }

    setLike(data) {
        return fetch(`${this._url}/cards/likes/${data._id}`, {
            method: 'PUT',
            headers: this._headers
        }).then(this._handleResponse);
    }

    deleteLike(data) {
        return fetch(`${this._url}/cards/likes/${data._id}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(this._handleResponse);
    }

    setUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        }).then(this._handleResponse);
    }

    setUserAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        }).then(this._handleResponse);
    }

}