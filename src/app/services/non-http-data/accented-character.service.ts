import { Injectable } from '@angular/core';

//not reachable outside this service, hardcoded value is OK
const accentedA : Array<object> = [
    {
        heading:'Grave',
        upper_char:'À',
        lower_char:'à'},
    {

        heading:'Acute',
        upper_char:'Á',
        lower_char:'á'},
    {
        heading:'Circumflex',
        upper_char:'Â',
        lower_char:'â'},
    {
        heading:'Tilde',
        upper_char:'Ã',
        lower_char:'ã'},
    {
        heading:'Umlaut',
        upper_char:'Ä',
        lower_char:'ä'}
];

const accentedE : Array<object> = [
    {
        heading:'Grave',
        upper_char:'È',
        lower_char:'è'},
    {

        heading:'Acute',
        upper_char:'É',
        lower_char:'é'},
    {
        heading:'Circumflex',
        upper_char:'Ê',
        lower_char:'ê'},
    {
        heading:'Umlaut',
        upper_char:'Ë',
        lower_char:'ë'}
];

const accentedI : Array<object> = [
    {
        heading:'Grave',
        upper_char:'Ì',
        lower_char:'ì'},
    {

        heading:'Acute',
        upper_char:'Í',
        lower_char:'í'},
    {
        heading:'Circumflex',
        upper_char:'Î',
        lower_char:'î'},
    {
        heading:'Umlaut',
        upper_char:'Ï',
        lower_char:'ï'}
];

const accentedN : Array<object> = [
    {
        heading:'Tilde',
        upper_char:'Ñ',
        lower_char:'ñ'}
];

const accentedO : Array<object> = [
    {
        heading:'Grave',
        upper_char:'Ò',
        lower_char:'ò'},
    {

        heading:'Acute',
        upper_char:'Ó',
        lower_char:'ó'},
    {
        heading:'Circumflex',
        upper_char:'Ô',
        lower_char:'ô'},
    {
        heading:'Tilde',
        upper_char:'Õ',
        lower_char:'õ'},
    {
        heading:'Umlaut',
        upper_char:'Ö',
        lower_char:'ö'}
];

const accentedU : Array<object> = [
    {
        heading:'Grave',
        upper_char:'Ù',
        lower_char:'ù'},
    {

        heading:'Acute',
        upper_char:'Ú',
        lower_char:'ú'},
    {
        heading:'Circumflex',
        upper_char:'Û',
        lower_char:'û'},
    {
        heading:'Umlaut',
        upper_char:'Ü',
        lower_char:'ü'}
];

const accentedY : Array<object> = [
    {
        heading:'Acute',
        upper_char:'Ý',
        lower_char:'ý'},
    {
        heading:'Umlaut',
        upper_char:'Ÿ',
        lower_char:'ÿ'}
];



@Injectable()
export class AccentedCharacterService {

    getAccentedCharacters(val:string) : Array<object> {

        let res : Array<object> = [];

        switch(val.toUpperCase()) {
            case 'A':
            case 'À':
            case 'Á':
            case 'Â':
            case 'Ã':
            case 'Ä':
            res = accentedA;
            break;
            case 'E':
            case 'È':
            case 'É':
            case 'Ê':
            case 'Ë':
            res = accentedE;
            break;
            case 'I':
            case 'Ì':
            case 'Í':
            case 'Î':
            case 'Ï':
            res = accentedI;
            break;
            case 'N':
            case 'Ñ':
            res = accentedN;
            break;
            case 'O':
            case 'Ò':
            case 'Ó':
            case 'Ô':
            case 'Õ':
            case 'Ö':
            res = accentedO;
            break;
            case 'U':
            case 'Ú':
            case 'Û':
            case 'Ü':
            case 'Ù':
            res = accentedU;
            break;
            case 'Y':
            case 'Ý':
            case 'Ÿ':
            res = accentedY;
            break;
        }
        return res;
    }
}
