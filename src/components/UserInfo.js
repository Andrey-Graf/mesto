export default class UserInfo {
    constructor({ userNameSelector, userJobSelector }) {
        this._userNameSelector = userNameSelector;
        this._userJobSelector = userJobSelector;
    }

    getUserInfo() {
        const data = {
            name: this._userNameSelector.textContent,
            job: this._userJobSelector.textContent
        };
        return data;
    }

    setUserInfo(data) {
        this._userNameSelector.textContent = data.name;
        this._userJobSelector.textContent = data.job;
    }
}