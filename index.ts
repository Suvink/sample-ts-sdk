import { AsgardeoAuthClient, Store } from '@asgardeo/auth-js';
import axios from 'axios';
import { LocalStore, MemoryCacheStore, MemoryStore, SessionStore } from "./stores";
import { Storage } from './constants/storage';
import cache from 'memory-cache';

const initiateStore = (store: Storage | undefined): Store => {
    
    switch (store) {
        case Storage.LocalStorage:
            return new LocalStore();
        case Storage.SessionStorage:
            return new SessionStore();
        case Storage.BrowserMemory:
            return new MemoryStore();
        case Storage.MemoryCache:
            return new MemoryCacheStore();
        default:
            return new MemoryCacheStore();
    }
};

export function initializeApp(config: any, storeLib: any): any {
    //TODO: Add config validation
    // if(config.hasOwnProperty(''))
    console.log(config)
    const store: Store = initiateStore(config.storage);
    console.log("store ", store)
    const auth = new AsgardeoAuthClient(store);
    auth.initialize(config);
    return auth;
}

export function getAuthURL(auth: any): Promise<object> {
    return new Promise((resolve, reject) => {
        auth.getAuthorizationURL().then((url: any) => {
            resolve(url);
        }).catch((reject));
    });
}

export function requestAccessToken(authorizationCode: string, sessionState: string, auth: any): Promise<object> {
    console.log(authorizationCode)
    console.log('keys',cache.keys())
    console.log('instance',cache.get('config_data-instance_0'))
    return new Promise((resolve, reject) => {
        auth.requestAccessToken(authorizationCode, sessionState).then((response: any) => {
            resolve(response);
        }).catch((reject));
    });
}

export function getIDToken(auth: any): Promise<string> {
    return new Promise((resolve, reject) => {
        auth.getIDToken().then((response: any) => {
            resolve(response);
        }).catch((reject));
    });
}

export async function getLogoutURL(auth: any): Promise<object> {
    const signOutURL = await auth.getSignOutURL();
    return signOutURL;
}

export async function getDL(auth: any): Promise<object> {
    const dataLayer = auth.getDataLayer();
    return dataLayer;
}

export async function getOIDCEndpoints(auth: any): Promise<object> {
    const endpoints = await auth.getOIDCServiceEndpoints();
    console.log(endpoints)
    return endpoints;
}

//How to rename these?
export default { initializeApp, getAuthURL, requestAccessToken, getLogoutURL, getOIDCEndpoints, getIDToken, getDL };