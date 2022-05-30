import randInt from "./randInt";

export const SKILL_GROUPS:{[SKILL_GROUP:string]:Array<string>} = {
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
}

export type CloneStats = {
    violence: number;
    brains: number;
    chutzpah: number;
    mechanics: number;
};

export type CloneSkills = {
    [skill: string]: number;
}

export type CloneStatsSkills = {
    stats: CloneStats;
    skills: CloneSkills;
}

function generateRandomCloneStats ():CloneStatsSkills {
    const allSkills = SKILL_GROUPS.VIOLENCE_SKILLS
        .concat(SKILL_GROUPS.BRAINS_SKILLS)
        .concat(SKILL_GROUPS.CHUTZPAH_SKILLS)
        .concat(SKILL_GROUPS.MECHANICS_SKILLS);
    const ratings:Array<number> = [5, 4, 3, 2, 1, -1, -2, -3, -4, -5];
    const skills: CloneSkills = {};
    while (ratings.length) {
      const randomSkillIndex = randInt(allSkills.length);
      const randomSkill = allSkills[randomSkillIndex];
      allSkills.splice(randomSkillIndex, 1);
      const skillRating = ratings.pop();
      skills[randomSkill] = typeof(skillRating) === 'number' ? skillRating : 0;
    }

    allSkills.forEach(skill => skills[skill] = 0);
    const stats:CloneStats = {
        violence: 0,
        brains: 0,
        chutzpah: 0,
        mechanics: 0,
    };
    for (const skill in skills) {
        if (skills[skill] > 0) {
            if (SKILL_GROUPS.VIOLENCE_SKILLS.includes(skill)) {
                stats.brains++;
            } else if (SKILL_GROUPS.BRAINS_SKILLS.includes(skill)) {
                stats.chutzpah++;
            } else if (SKILL_GROUPS.CHUTZPAH_SKILLS.includes(skill)) {
                stats.mechanics++;
            } else if (SKILL_GROUPS.MECHANICS_SKILLS.includes(skill)) {
                stats.violence++;
            }
        }
    };

    return {
        stats,
        skills,
    }
}

export default generateRandomCloneStats;