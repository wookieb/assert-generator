'use strict';

/**
 * Creates a function that calls a given testFunction.
 * If it returns a falsy value, throws an Error (of given type) with provided message.
 *
 * @param {Function} testFunction
 * @param {String} message error message
 * @param {Error} errorType error constructor
 * @returns {Function}
 */
module.exports = function(testFunction, message, errorType) {
    if (typeof message === 'undefined') {
        throw new TypeError('Assert message cannot be empty');
    }
    return function(value) {
        if (!testFunction(value)) {
            throw new (errorType || Error)(message);
        }
    }
};
