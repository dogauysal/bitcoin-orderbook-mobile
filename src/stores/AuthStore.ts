import { action, makeObservable } from "mobx";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { authentication } from "../firebase";
import { IUser } from "../models/User";
import { RootStore } from "./rootStore";


export default class AuthStore {

    rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore

        makeObservable(this)
    }


    @action register = async (_user: IUser) => {
        createUserWithEmailAndPassword(authentication, _user.Email, _user.Password)
    }

    @action login = async (email: string, password: string) => {
        signInWithEmailAndPassword(authentication, email, password)
    }

    @action logout = async () => {
        signOut(authentication)
    }


}
