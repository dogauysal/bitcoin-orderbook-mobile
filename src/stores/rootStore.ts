import { configure } from "mobx";
import { create } from "mobx-persist";
import { createContext } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStore from "./AuthStore";

configure({ enforceActions: 'always' });

export class RootStore {
    authStore: AuthStore;


    constructor() {
        this.authStore = new AuthStore(this);
    }
}

export const RootStoreContext = createContext(new RootStore())