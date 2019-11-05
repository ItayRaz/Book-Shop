'use strict'

function load(key) {
    const json = localStorage.getItem(key);
    const value = JSON.parse(json)
    return value;
}

function store(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json)
}

export function makeId(length=3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(var i=0; i < length; i++){
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

export const utilService = {
    load,
    store,
    makeId
}