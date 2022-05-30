"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roll = void 0;
const utils_1 = require("./utils");
const rollDice = () => (0, utils_1.randInt)(6) + 1;
const rollComputerDice = () => (0, utils_1.randInt)(6);
function roll(node) {
    node = node !== null && node !== void 0 ? node : 0;
    const numberOfDice = Math.abs(node) + 1;
    const rolls = Array.apply(null, Array(numberOfDice)).map((element, index, array) => (index < array.length - 1) ? rollDice() : rollComputerDice());
    const isNegativeNode = node < 0;
    const successes = rolls.filter(roll => roll >= 5).length;
    const failures = rolls.filter(roll => roll < 5).length;
    return {
        computer: rolls.filter(roll => roll === 0).length > 0,
        rolls,
        total: isNegativeNode ? successes - failures : successes,
    };
}
exports.roll = roll;
