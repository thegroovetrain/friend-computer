"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SKILL_GROUPS = void 0;
const randInt_1 = __importDefault(require("./randInt"));
exports.SKILL_GROUPS = {
    VIOLENCE_SKILLS: [
        'athletics',
        'guns',
        'melee',
        'throw'
    ],
    BRAINS_SKILLS: [
        'science',
        'psychology',
        'bureaucracy',
        'alphaComplex'
    ],
    CHUTZPAH_SKILLS: [
        'bluff',
        'charm',
        'intimidate',
        'stealth'
    ],
    MECHANICS_SKILLS: [
        'operate',
        'engineer',
        'program',
        'demolitions'
    ]
};
function generateRandomCloneStats() {
    const allSkills = exports.SKILL_GROUPS.VIOLENCE_SKILLS
        .concat(exports.SKILL_GROUPS.BRAINS_SKILLS)
        .concat(exports.SKILL_GROUPS.CHUTZPAH_SKILLS)
        .concat(exports.SKILL_GROUPS.MECHANICS_SKILLS);
    const ratings = [5, 4, 3, 2, 1, -1, -2, -3, -4, -5];
    const skills = {};
    while (ratings.length) {
        const randomSkillIndex = (0, randInt_1.default)(allSkills.length);
        const randomSkill = allSkills[randomSkillIndex];
        allSkills.splice(randomSkillIndex, 1);
        const skillRating = ratings.pop();
        skills[randomSkill] = typeof (skillRating) === 'number' ? skillRating : 0;
    }
    allSkills.forEach(skill => skills[skill] = 0);
    const stats = {
        violence: 0,
        brains: 0,
        chutzpah: 0,
        mechanics: 0,
    };
    for (const skill in skills) {
        if (skills[skill] > 0) {
            if (exports.SKILL_GROUPS.VIOLENCE_SKILLS.includes(skill)) {
                stats.brains++;
            }
            else if (exports.SKILL_GROUPS.BRAINS_SKILLS.includes(skill)) {
                stats.chutzpah++;
            }
            else if (exports.SKILL_GROUPS.CHUTZPAH_SKILLS.includes(skill)) {
                stats.mechanics++;
            }
            else if (exports.SKILL_GROUPS.MECHANICS_SKILLS.includes(skill)) {
                stats.violence++;
            }
        }
    }
    ;
    return {
        stats,
        skills,
    };
}
exports.default = generateRandomCloneStats;
