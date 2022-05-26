import { randInt } from './utils';

const rollDice = ():number => randInt(6) + 1;
const rollComputerDice = ():number => randInt(6);

export type RollResult = {
    computer: boolean;
    rolls: Array<number>;
    total: number;
}

export function roll(node:number | null | undefined):RollResult {
    node = node ?? 0;
    const numberOfDice = Math.abs(node) + 1;
    const rolls:Array<number> = Array.apply(null, Array(numberOfDice)).map((element, index, array) => (index < array.length - 1) ? rollDice() : rollComputerDice())
    const isNegativeNode = node < 0;
    const successes:number = rolls.filter(roll => roll >= 5).length;
    const failures:number = rolls.filter(roll => roll < 5).length;
    return {
        computer: rolls.filter(roll => roll === 0).length > 0,
        rolls,
        total: isNegativeNode ? successes - failures : successes,
    }
}