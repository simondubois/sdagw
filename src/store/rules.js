const isEvilFigurine = figurine => figurine.force === 'evil'
const isGoodFigurine = figurine => figurine.force === 'good'

const shootingEquipments = {
    '2hand-axe': { movement: 1, range: 6, strength: 3 },
    'elf-bow': { movement: 0.5, range: 24, strength: 3 },
    'human-bow': { movement: 0.5, range: 24, strength: 2 },
    javelin: { movement: 1, range: 6, strength: 3 },
    'orc-bow': { movement: 0.5, range: 18, strength: 2 },
    'throwing-axe': { movement: 1, range: 6, strength: 3 },
}
const firstShootingEquipment = equipments => shootingEquipments[equipments.find(equipment => shootingEquipments[equipment])]
const isShootingFigurine = figurine => firstShootingEquipment(figurine.equipments)

const throwingEquipments = (
    ({ '2hand-axe': twoHandAxe, javelin, 'throwing-axe': throwingAxe }) => ({ '2hand-axe': twoHandAxe, javelin, 'throwing-axe': throwingAxe })
)(shootingEquipments)
const firstThrowingEquipment = equipments => throwingEquipments[equipments.find(equipment => throwingEquipments[equipment])]
const isThrowingFigurine = figurine => firstThrowingEquipment(figurine.equipments)

export default [
    {
        phase: 'introduction',
        actions: [
            {
                action: 'hero',
                instructions: [
                    {
                            components: [
                            {
                                component: 'rule-force',
                                figurines: figurines => figurines.filter(figurine => figurine.hero).filter(isGoodFigurine),
                            },
                            {
                                component: 'rule-force',
                                figurines: figurines => figurines.filter(figurine => figurine.hero).filter(isEvilFigurine),
                            },
                        ],
                    },
                ],
            },
            {
                action: 'warrior',
                instructions: [
                    {
                        components: [
                            {
                                component: 'rule-force',
                                figurines: figurines => figurines.filter(figurine => figurine.hero === false).filter(isGoodFigurine),
                            },
                            {
                                component: 'rule-force',
                                figurines: figurines => figurines.filter(figurine => figurine.hero === false).filter(isEvilFigurine),
                            },
                        ],
                    },
                ],
            },
            {
                action: 'scenery',
                instructions: [
                    {
                        components: [
                            {
                                component: 'rule-scenery',
                            },
                        ],
                    },
                ],
            },
            {
                action: 'special',
                instructions: [
                    {
                        instruction: 'legendaryhero',
                        figurines: figurines => figurines.filter(figurine => figurine.army === 'aragorn'),
                    },
                    {
                        instruction: 'powerstick',
                        figurines: figurines => figurines.filter(figurine => figurine.equipments.includes('powerstick')),
                    },
                    {
                        instruction: 'ringwraith',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.army === 'ringwraith' || figurine.army === 'witch-king',
                        ),
                    },
                ],
            },
        ],
    },
    {
        phase: 'moving',
        actions: [
            {
                action: 'first',
                instructions: [
                    {
                        instruction: 'heroic',
                        figurines: figurines => figurines.filter(figurine => figurine.stats.mi),
                    },
                    {
                        instruction: 'firstplayer',
                    },
                    {
                        instruction: 'ring',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one', 'two', 'three', 'four', 'five'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['six'],
                            },
                        ],
                        figurines: figurines => figurines.filter(figurine => figurine.equipments.includes('ring')),
                    },
                ],
            },
            {
                action: 'courage',
                instructions: [
                    {
                        instruction: 'massacre',
                    },
                    {
                        instruction: 'isolated',
                    },
                    {
                        instruction: 'mordorskum',
                        figurines: figurines => figurines.some(figurine => figurine.army === 'ugluk') &&
                            figurines.some(figurine => ['orc-captain', 'orc-warrior'].includes(figurine.army))
                            ? figurines.filter(figurine => figurine.army === 'ugluk') : [],
                    },
                ],
            },
            {
                action: 'distance',
                instructions: [
                    {
                        instruction: 'maximum',
                        components: [
                            {
                                component: 'rule-distance',
                                distance: figurine => figurine.stats.mo,
                            },
                        ],
                    },
                    {
                        instruction: 'shooting',
                        components: [
                            {
                                component: 'rule-distance',
                                distance: figurine => figurine.stats.mo * firstShootingEquipment(figurine.equipments).movement,
                            },
                        ],
                        figurines: figurines => figurines.filter(isShootingFigurine),
                    },
                    {
                        instruction: 'difficult',
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('difficult')),
                    },
                    {
                        instruction: 'woodelf',
                        figurines: figurines => figurines.filter(figurine => figurine.army === 'legolas'),
                        sceneries: sceneries => sceneries.filter(scenery => scenery.id === 'tree'),
                    },
                    {
                        instruction: 'lying',
                        sceneries: sceneries => sceneries.filter(
                            scenery => scenery.rules.includes('jumpable') || scenery.rules.includes('climbable'),
                        ),
                    },
                ],
            },
            {
                action: 'jumping',
                instructions: [
                    {
                        instruction: 'test',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['two', 'three', 'four', 'five'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['six'],
                            },
                        ],
                        figurines: figurines => figurines.filter(
                            figurine => figurine.army !== 'goblin-captain' && figurine.army !== 'goblin-warrior',
                        ),
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('jumpable')),
                    },
                    {
                        instruction: 'goblin',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.army === 'goblin-captain' || figurine.army === 'goblin-warrior',
                        ),
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('jumpable')),
                    },
                    {
                        instruction: 'mounted',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.mount && figurine.army !== 'rohirrim-rider' && figurine.id !== 'rohan|eomer|mounted',
                        ),
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('jumpable')),
                    },
                    {
                        instruction: 'rohirrim',
                        figurines: figurines => figurines.filter(
                            figurine => (figurine.army === 'rohirrim-rider' || figurine.id === 'rohan|eomer|mounted'),
                        ),
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('jumpable')),
                    },
                ],
            },
            {
                action: 'climbing',
                instructions: [
                    {
                        instruction: 'test',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['two', 'three', 'four', 'five'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['six'],
                            },
                        ],
                        figurines: figurines => figurines.filter(
                            figurine => figurine.army !== 'goblin-captain' && figurine.army !== 'goblin-warrior',
                        ),
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('climbable')),
                    },
                    {
                        instruction: 'goblin',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.army === 'goblin-captain' || figurine.army === 'goblin-warrior',
                        ),
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('jumpable')),
                    },
                    {
                        instruction: 'falling',
                        components: [
                            {
                                component: 'rule-wound',
                                strength: 3,
                            },
                        ],
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('climbable')),
                    },
                    {
                        instruction: 'fate',
                        figurines: figurines => figurines.filter(figurine => figurine.stats.fa),
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one', 'two', 'three'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['four', 'five', 'six'],
                            },
                        ],
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('climbable')),
                    },
                ],
            },
            {
                action: 'charge',
                instructions: [
                    {
                        instruction: 'hideout',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one', 'two', 'three'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['four', 'five', 'six'],
                            },
                        ],
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('hideout')),
                    },
                    {
                        instruction: 'terrifying',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.terrifying || figurine.spells.includes('terrifyingaura'),
                        ),
                    },
                    {
                        instruction: 'throwing',
                        figurines: figurines => figurines.filter(isThrowingFigurine),
                    },
                    {
                        instruction: 'spell',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.length),
                    },
                ],
            },
            {
                action: 'mounted',
                instructions: [
                    {
                        instruction: 'difficult',
                        figurines: figurines => figurines.filter(figurine => figurine.mount),
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('difficult')),
                    },
                    {
                        instruction: 'mount',
                        figurines: figurines => figurines.filter(figurine => figurine.mount),
                    },
                    {
                        instruction: 'falling',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['two', 'three', 'four', 'five'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['six'],
                            },
                        ],
                        figurines: figurines => figurines.filter(figurine => figurine.mount),
                    },
                ],
            },
        ],
    },
    {
        phase: 'shooting',
        actions: [
            {
                action: 'first',
                instructions: [
                    {
                        instruction: 'heroic',
                        figurines: figurines => figurines.filter(figurine => figurine.stats.mi),
                    },
                    {
                        instruction: 'firstplayer',
                        figurines: figurines => figurines.filter(isGoodFigurine).some(isShootingFigurine) &&
                            figurines.filter(isEvilFigurine).some(isShootingFigurine) ? figurines : [],
                    },
                    {
                        instruction: 'throwing',
                        figurines: figurines => figurines.filter(isThrowingFigurine),
                    },
                    {
                        instruction: 'masterbowman',
                        figurines: figurines => figurines.filter(figurine => figurine.army === 'legolas'),
                    },
                ],
            },
            {
                action: 'hit',
                instructions: [
                    {
                        instruction: 'maximum',
                        components: [
                            {
                                component: 'rule-distance',
                                distance: figurine => firstShootingEquipment(figurine.equipments).range,
                            },
                        ],
                        figurines: figurines => figurines.filter(isShootingFigurine),
                    },
                    {
                        instruction: 'hideout',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one', 'two', 'three'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['four', 'five', 'six'],
                            },
                        ],
                        figurines: figurines => figurines.filter(isShootingFigurine),
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('hideout')),
                    },
                    {
                        instruction: 'meleegood',
                        figurines: figurines => figurines.filter(isGoodFigurine).filter(isShootingFigurine),
                    },
                    {
                        instruction: 'meleeevil',
                        figurines: figurines => figurines.filter(isEvilFigurine).filter(isShootingFigurine),
                    },
                    {
                        instruction: 'mounted',
                        figurines: figurines => [
                            ...figurines.filter(isEvilFigurine).some(isShootingFigurine)
                                ? figurines.filter(isGoodFigurine).filter(figurine => figurine.mount) : [],
                            ...figurines.filter(isGoodFigurine).some(isShootingFigurine)
                                ? figurines.filter(isEvilFigurine).filter(figurine => figurine.mount) : [],
                        ],
                    },
                    {
                        instruction: 'obstacle',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one', 'two', 'three'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['four', 'five', 'six'],
                            },
                        ],
                        figurines: figurines => figurines.filter(isShootingFigurine),
                    },
                    {
                        instruction: 'target',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one'],
                                figurines: figurines => figurines.filter(figurine => figurine.stats.sh === 1),
                            },

                            {
                                component: 'rule-dice',
                                dices: ['two'],
                                figurines: figurines => figurines.filter(figurine => figurine.stats.sh === 2),
                            },

                            {
                                component: 'rule-dice',
                                dices: ['three'],
                                figurines: figurines => figurines.filter(figurine => figurine.stats.sh === 3),
                            },

                            {
                                component: 'rule-dice',
                                dices: ['four'],
                                figurines: figurines => figurines.filter(figurine => figurine.stats.sh === 4),
                            },

                            {
                                component: 'rule-dice',
                                dices: ['five'],
                                figurines: figurines => figurines.filter(figurine => figurine.stats.sh === 5),
                            },

                            {
                                component: 'rule-dice',
                                dices: ['six'],
                                figurines: figurines => figurines.filter(figurine => figurine.stats.sh === 6),
                            },
                        ],
                        figurines: figurines => figurines.filter(isShootingFigurine),
                    },
                    {
                        instruction: 'blindinglight',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('blindinglight')),
                    },
                ],
            },
            {
                action: 'wound',
                instructions: [
                    {
                        instruction: 'test',
                        components: [
                            {
                                component: 'rule-wound',
                                figurines: figurines => figurines.filter(isGoodFigurine),
                                strength: figurine => firstShootingEquipment(figurine.equipments).strength,
                            },
                            {
                                component: 'rule-wound',
                                figurines: figurines => figurines.filter(isEvilFigurine),
                                strength: figurine => firstShootingEquipment(figurine.equipments).strength,
                                woundAllies: true,
                            },
                        ],
                        figurines: figurines => figurines.filter(isShootingFigurine),
                    },
                    {
                        instruction: 'fate',
                        figurines: figurines => figurines.some(isShootingFigurine)
                            ? figurines.filter(figurine => figurine.stats.fa) : [],
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one', 'two', 'three'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['four', 'five', 'six'],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        phase: 'fighting',
        actions: [
            {
                action: 'first',
                instructions: [
                    {
                        instruction: 'heroic',
                        figurines: figurines => figurines.filter(figurine => figurine.stats.mi),
                    },
                    {
                        instruction: 'firstplayer',
                        figurines:
                            figurines =>
                                figurines.filter(isGoodFigurine).reduce((total, { quantity }) => total + quantity, 0) > 1 &&
                                figurines.filter(isEvilFigurine).reduce((total, { quantity }) => total + quantity, 0) > 1
                                ? figurines : [],
                    },
                    {
                        instruction: 'barrier',
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('jumpable')),
                    },
                ],
            },
            {
                action: 'equipment',
                instructions: [
                    {
                        instruction: 'shield',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.equipments.includes('shield') && figurine.equipments.mount === undefined,
                        ),
                    },
                    {
                        instruction: '2hands',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.mount === undefined && figurine.equipments.some(
                                equipment => ['2hand-axe', 'powerstick', 'sword'].includes(equipment),
                            ),
                        ),
                    },
                    {
                        instruction: 'lance',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.equipments.includes('lance') && figurine.mount === undefined,
                        ),
                    },
                    {
                        instruction: 'pike',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.equipments.includes('pike') && figurine.mount === undefined,
                        ),
                    },
                ],
            },
            {
                action: 'resolution',
                instructions: [
                    {
                        instruction: 'gondorhorn',
                        figurines: figurines => figurines.filter(figurine => figurine.equipments.includes('horn')),
                    },
                    {
                        instruction: 'test',
                        components: [
                            {
                                component: 'rule-distance',
                                distance: figurine => figurine.stats.at,
                            },
                        ],
                    },
                    {
                        instruction: 'mounted',
                        figurines: figurines => figurines.filter(figurine => figurine.mount),
                    },
                    {
                        instruction: 'firstdraw',
                        components: [
                            {
                                component: 'rule-distance',
                                distance: figurine => figurine.stats.fi,
                            },
                        ],
                    },
                    {
                        instruction: 'additionaldraws',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one', 'two', 'three'],
                                figurines: figurines => figurines.filter(isGoodFigurine),
                            },
                            {
                                component: 'rule-dice',
                                dices: ['four', 'five', 'six'],
                                figurines: figurines => figurines.filter(isEvilFigurine),
                            },
                        ],
                    },
                ],
            },
            {
                action: 'recoil',
                instructions: [
                    {
                        instruction: 'default',
                    },
                    {
                        instruction: 'mounted',
                        figurines: figurines => figurines.filter(figurine => figurine.mount),
                    },
                    {
                        instruction: 'lying',
                    },
                ],
            },
            {
                action: 'wound',
                instructions: [
                    {
                        instruction: 'barrier',
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one', 'two', 'three'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['four', 'five', 'six'],
                            },
                        ],
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('jumpable')),
                    },
                    {
                        instruction: 'test',
                        components: [
                            {
                                component: 'rule-wound',
                                figurines: figurines => figurines.filter(isGoodFigurine),
                                strength: figurine => figurine.stats.st,
                            },
                            {
                                component: 'rule-wound',
                                figurines: figurines => figurines.filter(isEvilFigurine),
                                strength: figurine => figurine.stats.st,
                            },
                        ],
                    },
                    {
                        instruction: 'fate',
                        figurines: figurines => figurines.filter(figurine => figurine.stats.fa),
                        components: [
                            {
                                component: 'rule-dice',
                                dices: ['one', 'two', 'three'],
                            },
                            {
                                component: 'rule-dice',
                                dices: ['four', 'five', 'six'],
                            },
                        ],
                    },
                ],
            },
            {
                action: 'last',
                instructions: [
                    {
                        instruction: 'barrier',
                        sceneries: sceneries => sceneries.filter(scenery => scenery.rules.includes('jumpable')),
                    },
                    {
                        instruction: 'ringwraith',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.army === 'ringwraith' || figurine.army === 'witch-king',
                        ),
                    },
                ],
            },
        ],
    },
    {
        phase: 'courage',
        actions: [
            {
                action: 'test',
                instructions: [
                    {
                        instruction: 'test',
                        components: [
                            {
                                component: 'rule-distance',
                                distance: figurine => 10 - figurine.stats.co,
                            },
                        ],
                    },
                ],
            },
            {
                action: 'effect',
                instructions: [
                    {
                        instruction: 'success',
                    },
                    {
                        instruction: 'failure',
                    },
                ],
            },
        ],
    },
    {
        phase: 'spell',
        actions: [
            {
                action: 'test',
                instructions: [
                    {
                        instruction: 'test',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.length),
                    },
                    {
                        instruction: 'resistance',
                        figurines: figurines => [
                            ...figurines.filter(isEvilFigurine).some(figurine => figurine.spells.length)
                                ? figurines.filter(isGoodFigurine).filter(figurine => figurine.stats.wi) : [],
                            ...figurines.filter(isGoodFigurine).some(figurine => figurine.spells.length)
                                ? figurines.filter(isEvilFigurine).filter(figurine => figurine.stats.wi) : [],
                        ],
                    },
                    {
                        instruction: 'hobbit',
                        figurines: figurines => figurines.filter(isEvilFigurine).some(figurine => figurine.spells.length)
                            ? figurines.filter(figurine => ['frodo', 'merry', 'pippin', 'sam'].includes(figurine.army)) : [],
                    },
                ],
            },
            {
                action: 'ally',
                instructions: [
                    {
                        instruction: 'blindinglight',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('blindinglight')),
                    },
                    {
                        instruction: 'terrifyingaura',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('terrifyingaura')),
                    },
                    {
                        instruction: 'strengthenwill',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('strengthenwill')),
                    },
                ],
            },
            {
                action: 'ennemy',
                instructions: [
                    {
                        instruction: 'draincourage',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('draincourage')),
                    },
                    {
                        instruction: 'immobilse',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('immobilse')),
                    },
                    {
                        instruction: 'immobilsepalantir',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.spells.includes('immobilse') && figurine.equipments.includes('palantir'),
                        ),
                    },
                    {
                        instruction: 'command',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('command')),
                    },
                    {
                        instruction: 'commandpalantir',
                        figurines: figurines => figurines.filter(
                            figurine => figurine.spells.includes('command') && figurine.equipments.includes('palantir'),
                        ),
                    },
                    {
                        instruction: 'swapwill',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('swapwill')),
                    },
                    {
                        instruction: 'sorcerousblast',
                        components: [
                            {
                                component: 'rule-wound',
                                strength: 8,
                                figurines: figurines => figurines.filter(isGoodFigurine),
                            },
                            {
                                component: 'rule-wound',
                                strength: 8,
                                figurines: figurines => figurines.filter(isEvilFigurine),
                            },
                        ],
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('sorcerousblast')),
                    },
                ],
            },
            {
                action: 'ennemies',
                instructions: [
                    {
                        instruction: 'natureswrath',
                        figurines: figurines => figurines.filter(figurine => figurine.spells.includes('natureswrath')),
                    },
                ],
            },
        ],
    },
]
