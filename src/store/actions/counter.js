import * as actionTypes from './actionTypes';


export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};
export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};
export const add = (wartosc) => {
    return {
        type: actionTypes.ADD,
        value: wartosc
    }
};
export const subtract = (wartosc) => {
    return {
        type: actionTypes.SUBTRACT,
        value: wartosc
    };
}