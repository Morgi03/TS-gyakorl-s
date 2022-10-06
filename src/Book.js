"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Book_name, _Book_rating;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(name, rating) {
        _Book_name.set(this, void 0);
        _Book_rating.set(this, 1);
        __classPrivateFieldSet(this, _Book_name, name, "f");
        this.setRating(rating);
    }
    getRating() {
        return __classPrivateFieldGet(this, _Book_rating, "f");
    }
    getName() {
        return __classPrivateFieldGet(this, _Book_name, "f");
    }
    setRating(newrating) {
        if (newrating >= 1 && newrating <= 10) {
            __classPrivateFieldSet(this, _Book_rating, newrating, "f");
        }
        else {
            throw 'Az értékelésnek 1 és 10 közötti számnak kell lennie.';
        }
    }
    toString() {
        console.log("Könyv neve: " + __classPrivateFieldGet(this, _Book_name, "f") + ", értékelése: " + __classPrivateFieldGet(this, _Book_rating, "f"));
    }
}
exports.Book = Book;
_Book_name = new WeakMap(), _Book_rating = new WeakMap();
