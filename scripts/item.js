'use strict';

function validateName(name) {
    try {
        if(!name) {
            throw new TypeError('Name must not be blank');
        } 
     } catch(error) {
            throw new TypeError('Name must not be blank');
     }
}

function create(name) {
    return {
        id: cuid(),
        name: name,
        checked: false,
    };
}


export default {
    validateName,
    create,
};
