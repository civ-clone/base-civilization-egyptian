"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Egyptian_1 = require("./Egyptian");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Egyptian',
    nation: 'Egypt',
    colors: ['#63e367', '#2f7b00', '#fff'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Egyptian_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map