export default class UserInfo {
    constructor({ userNameSelector, userJobSelector, userAvatarSelector }) {
        this._userNameSelector = userNameSelector;
        this._userJobSelector = userJobSelector;
        this._userAvatarSelector = userAvatarSelector;
        this._userName = document.querySelector(this._userNameSelector);
        this._userJob = document.querySelector(this._userJobSelector);
        this._userAvatar = document.querySelector(this._userAvatarSelector);
    }

    getUserInfo() {
        const data = {
            name: this._userName.textContent,
            about: this._userJob.textContent
        };
        return data;
    }

    setUserAvatar(data) {
        this._userAvatar.src = data.avatar;
    }

    setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userJob.textContent = data.about;
        this.setUserAvatar(data);
        this._userAvatar.alt = `${data.name}`;
    }
}