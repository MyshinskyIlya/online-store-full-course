import { makeAutoObservable } from "mobx";

export interface UserStoreInterface {
    _isAuth: boolean;
    _user: any;
    setIsAuth: (boolean: boolean) => void;
    setUser: (user: any) => void;
    isAuth: boolean;
    user: any;
}

export default class UserStore implements UserStoreInterface {
    _isAuth = false;
    _user = {};

    constructor() {
        makeAutoObservable(this);
    }

    setIsAuth(boolean: boolean) {
        this._isAuth = boolean;
    }

    setUser(user: any) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}
