const assert = require('assert');

const Color = require('../src/color');

describe('Color constructor', () => {
    'use strict';

    it('should create Color instance from sequence of numbers', () => {
        const color = new Color(0xaa, 0x88, 0x33);
        assert(color.r, 0xaa);
        assert(color.g, 0x88);
        assert(color.b, 0x33);
        assert.equal(color.a, 1);
    });

    it('should create HSL channels if RGB values are set', () => {
        const color = new Color({ r: 0xaa, g: 0x88, b: 0x33 });
        assert(color.h, 43);
        assert(color.s, 54);
        assert(color.l, 43);
    });

    it('should create RGB channels if HSL values are set', () => {
        const color = new Color({ h: 43, s: 54, l: 43 });
        assert(color.r, 0xaa);
        assert(color.g, 0x88);
        assert(color.b, 0x33);
    });
});

