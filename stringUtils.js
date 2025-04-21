"use strict";

export default class happyOrSad {
    constructor() {
        this.happy = ":)";
        this.sad = ":("
    }
}
export function smile(str) {
    if (str === ":)") {
        return "What makes you so happy?";
    }
    if (str === ":(") {
        return "Why are you so sad?";
    }
}
