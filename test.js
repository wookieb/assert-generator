'use strict';

var generateAssert = require('./'),
    assert = require('assert');

describe('assert-generator', function() {
    var MESSAGE = 'empty message',
        VALUE = {some: 'value'};

    it('calls a test function with given value', function() {
        var functionCalled = false,
            testFunction = function(value) {
                assert.ok(value === VALUE);
                functionCalled = true;
                return true;
            };

        generateAssert(testFunction, MESSAGE)(VALUE);
        assert.ok(functionCalled);
    });

    it('throws an error if value fails to pass test function', function() {
        assert.throws(function() {
            generateAssert(function() { return false; }, MESSAGE)(VALUE);
        }, Error, new RegExp(MESSAGE));
    });

    it('throws an error of given type if values fails to pass test function', function() {
        assert.throws(function() {
            generateAssert(function() { return false; }, MESSAGE, TypeError)(VALUE);
        }, TypeError, new RegExp(MESSAGE));
    });
});
