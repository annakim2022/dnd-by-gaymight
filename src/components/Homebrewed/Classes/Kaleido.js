import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'
import Accordion from 'react-bootstrap/Accordion';
import './Classes.css'

const Kaleido = () => {

    const onClickHandler = (e) => {
        const hiddenElement = e.currentTarget.nextSibling;
        hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
    };

    return (
        <div className='Kaleido'> 
            <div className='outer-box'>
                <h2 className='class-name'>Kaleido</h2>
                <div className='box'> 
                    <Tabs defaultActiveKey='spell-list'>
                        <Tab eventKey="features" title="Class Features">
                            <div className='content'>
                                <h4>Hit Points</h4>
                                <p>
                                    <b>Hit Dice: </b> 1d6 per Kaleido level <br></br>
                                    <b>Hit Points at 1st Level: </b> 6 + Constitution Modifier <br></br>
                                    <b>Hit Points at Higher Levels: </b> 1d6 (or 4) + your Constitution modifier per Kaleido level after 1st.
                                </p>

                                <h4>Proficiencies</h4>
                                <p>
                                    <b>Armor: </b> Light <br></br>
                                    <b>Weapons: </b> Simple weapons, rapiers, scimitars, tridents, whips <br></br>
                                    <b>Tools: </b> Pick one from disguise kit, navigator’s tools, or cartographer’s tools <br></br>
                                    <b>Saving Throws: </b> Strength, Intelligence <br></br>
                                    <b>Skills: </b> Pick three from Acrobatics, Animal Handling, Arcana, Athletics, History, Insight, Investigation, Perception, 
                                    Performance
                                </p>
                                
                                    <h4>Equipment</h4>
                                    <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
                                    <ul>
                                        <li>any simple weapon</li>
                                        <li>(a) a component pouch or (b) an arcane focus</li>
                                        <li>(a) a diplomat’s pack, (b) dungeoneer's pack, or (c) an explorer's pack</li>
                                        <li> Leather armor, two daggers, and a set of tools you are proficient in</li>
                                    </ul>

                                <h3>Spellcasting</h3>
                                <p>The Kaleido utilizes a unique spellcasting resource, expending Miasma Points (MP) for spells rather than spell slots. The 
                                    amount of MP you have per level is determined by the MP column of the Kaleido table. To cast one of these spells, you must 
                                    expend MP to create a spell slot of a given level, as shown in the table below. You cannot create a spell slot that exceeds 
                                    your maximum spell level, as shown in the Kaleido table. You cannot reduce your MP total to less than 0, and you regain all 
                                    spent MP when you finish a long rest.</p>
                                <p>In addition, your ability to cast spells depends on your ability to summon the essence of the creature you Learned the spell 
                                    from. Because of this, you require one free space adjacent to yourself in order to cast any spell, as the appropriate aspect 
                                    of the creature must be summoned to perform any spell. The area required may change depending on the spell.</p>
                                <p>
                                    <Table responsive bordered size="sm" className='sm-table'>
                                    <thead className='thead'>
                                        <tr>
                                            <th>Spell Level</th>
                                            <th>MP Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1st</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>2nd</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td>3rd</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>4th</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td>5th</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td>6th</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>7th</td>
                                            <td>12</td>
                                        </tr>
                                    </tbody>
                                    </Table>
                                </p>

                                <h4>Spellcasting Ability</h4>
                                <p>Intelligence is your spellcasting ability for your spells. The power of your magic relies on your ability to analyze the 
                                    essence of creatures you absorb and then resummon that essence in any situation. You use your Intelligence whenever a spell 
                                    refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a 
                                    Kaleido spell you cast and when making an attack roll with one.</p>
                                <p>Any Kaleido spell that you cast that has a melee or ranged weapon attack component utilizes your Strength stat rather than 
                                    your Intelligence to calculate the attack modifier. Your saving throw DC is always calculated with your Intelligence.</p>
                                <p><b>Spell save DC </b> = 8 + your proficiency modifier + your Intelligence modifier.</p>
                                <p><b>Spell attack modifier </b> = your proficiency modifier + your Intelligence modifier.</p>
                                <p><b>Physical spell attack modifier </b> = your proficiency modifier + your Strength modifier.</p>

                                <h4>Spellcasting Focus</h4>
                                <p>You can use a one-handed weapon as a spellcasting focus for your Kaleido spells. When you do so, you can use your free hand 
                                    to complete the somatic components of the spell.</p>

                                <h3>Learning</h3>
                                <p>In addition to a unique casting system, Kaleidos also learn their spells in an unconventional way. Starting at 1st level, 
                                    during your turn you may use a bonus action to attempt to absorb the essence of a creature above 0 Hit Points that you 
                                    strike with a weapon attack. The target must make a Constitution saving throw against your spell save DC. The target 
                                    automatically fails the saving throw if it is incapacitated. If you had advantage on your attack roll, the creature has 
                                    disadvantage on the saving throw. On a failed save, you gain a spell that both you and the target meet the requirements 
                                    detailed under the Kaleido Spell List tab above. When you have seen the creature using an ability, you can choose to learn 
                                    that ability as long as all requirements are met. If you have not seen it use an ability you do not already have or that you 
                                    meet the requirements for, the DM may choose which spell you gain from the creature. You can use this ability a number of 
                                    times equal to your Intelligence modifier, and you regain all expended uses when you finish a long rest. You can only learn 
                                    one spell from any one creature. When creating a 1st level character, you will typically start without spells, but it is up 
                                    to your DM’s discretion.</p>
                                <p>Starting at 5th level, instead of learning a Kaleido spell, you can instead choose to copy a monster’s trait, such as a 
                                    goblin’s Nimble Escape or a kobold’s Pack Tactics. This then replaces one of your current Traits.</p>

                                <h3>Kaleido Traits</h3>
                                <p>Due to your ability to learn from monsters and other creatures, you are able to incorporate other fighting styles into your 
                                    own arsenal, granting you bonuses. At 1st level, you can learn 4 Traits from the list below. You can learn more as your 
                                    Kaleido level increases, per the number indicated in the Traits Known column of the Kaleido table. You can only gain the 
                                    benefit of a number of Traits equal to half of the number Traits you know rounded down. You can change which of your traits 
                                    is active after a long rest. You can swap one learned trait with another when you gain a level. </p>
                                <p>
                                    <Table responsive bordered size="sm" className='md-table'>
                                    <thead className='thead'>
                                        <tr>
                                            <th>Level 1</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b><i>Attack Boost.&nbsp;</i></b> Increase weapon attack damage by +1. This number increases to +2 at 11th level 
                                            and +3 at 18th level. </td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Speed Up.&nbsp;</i></b> Increase your base movement speed by 10 feet.</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Magic Strength.&nbsp;</i></b> Increase the damage magic does by +1. This number increases to +2 at 11th 
                                            level and +3 at 18th level. </td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Accuracy.&nbsp;</i></b> Increase all attack bonuses by +1. This number increases to +2 at 11th level and 
                                            +3 at 18th level. </td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Dancing Blade.&nbsp;</i></b> Any magical weapons manifested through Kaleido spells gain the Finesse 
                                            property. </td>
                                        </tr>
                                    </tbody>
                                    <thead className='thead'>
                                        <tr>
                                            <th>Level 3</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b><i>Analytical Defense.&nbsp;</i></b> Whenever you are not wearing armor, add your Intelligence modifier to 
                                            your AC. This does not stack with other similar traits, such as Unarmored Defense.</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Studious Learning.&nbsp;</i></b> You gain 2 additional uses of the Learning ability per long rest. </td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Potent Magic.&nbsp;</i></b> You can add your Intelligence modifier to the damage of any spell. </td>
                                        </tr>
                                    </tbody>
                                    <thead className='thead'>
                                        <tr>
                                            <th>Level 6</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b><i>Targeted Creature.&nbsp;</i></b> Every long rest, choose one creature type from aberration, beast, 
                                            celestial, dragon, fey, fiend, giant, monstrosity, ooze, plant, or undead. You now deal an additional 4 damage to 
                                            enemies of that type. You may not choose humanoid.</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Forceful Studying.&nbsp;</i></b> You may add 2 to the save DC for your Learning ability.</td>
                                        </tr>
                                    </tbody>
                                    <thead className='thead'>
                                        <tr>
                                            <th>Level 10</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b><i>Enhanced Critical.&nbsp;</i></b> You score a critical hit on a 19 or 20 with weapon attacks.</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Magical Discount.&nbsp;</i></b> Pay 1 less MP for spells that cost 6 or more MP.</td>
                                        </tr>
                                    </tbody>
                                    <thead className='thead'>
                                        <tr>
                                            <th>Level 14</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b><i>Endurance.&nbsp;</i></b> Gain 10 temporary hit points every 3 rounds.</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Spell Critical.&nbsp;</i></b> When you roll to hit with a spell attack, you expand your critical range on 
                                            the d20 by 1. This applies also to attack rolls made with weapons manifested through Kaleido spells. </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </p>
                            <h3>Magic Refractions</h3>
                            <p>Starting at 2nd level, you can use your knowledge of your own magic to manipulate it. Starting when you acquire this trait, you 
                                gain two Magic Refractions. You must use MP to activate these abilities. You gain one additional Refraction at 6th level, one 
                                at 10th level, and one more at 17th level. All Magic Refractions take a bonus action to activate unless specified otherwise. 
                                When you gain a level you may swap out one Magic Refraction you know with another. There are several rules for the use of 
                                Refractions that are as follows:</p>
                                <ul>
                                    <li>Your Refractions can only augment attacks that cost MP, meaning that they do not apply to cantrips unless you use 1 MP 
                                    to cast the cantrip. </li>
                                    <li>You can only apply one Refraction to a single spell. Two spells cannot benefit from the same Refraction and two 
                                        Refractions cannot augment the same spell. </li>
                                    <li>If a Refraction allows you to increase or add numbers for damage, this can apply to healing spells as well.</li>
                                </ul>
                                <p>
                                <Table responsive bordered size="sm" className='md-lg-table'>
                                    <thead className='thead'>
                                        <tr>
                                            <th>Magic Refractions</th>
                                            <th>MP&nbsp;Cost&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><b><i>Chromantic Enhancement.&nbsp;</i></b> You can use your bonus action to increase the accuracy of your next 
                                            Kaleido spell. You apply a +4 bonus to the next spell attack roll, including physical spells.</td>
                                            <td className='right'>1&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Blinding Light Cast.&nbsp;</i></b><i><small>(Prerequisite: 10th level)&nbsp;&nbsp;</small></i> When you 
                                            cast a Kaleido spell with a saving throw, you can increase the Spell Save DC by 4. This works for class abilities as 
                                            well, such as Learning.</td>
                                            <td className='right'>5&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Powered Scrutiny.&nbsp;</i></b> The next time you cast a Kaleido spell you can roll one additional damage 
                                            dice and add the result to the damage of the spell.</td>
                                            <td className='right'>2&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Primal Elements.&nbsp;</i></b> When you cast a Kaleido spell that deals fire, lightning, thunder, cold, or 
                                            acid damage, you can change the spell’s damage type to another listed here.</td>
                                            <td className='right'>1&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Burst Affinity.&nbsp;</i></b> When you see a friendly creature within 30 feet of you cast a spell that 
                                            targets a hostile creature, you can use your reaction to cast a Kaleido spell against the same target. The results of 
                                            your spell are determined after the initial spell is cast. The spell you cast must share a damage type with the 
                                            initial spell. </td>
                                            <td className='right'>3&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Chain Affinity.&nbsp;</i></b> When you see a friendly creature within 10 feet of you make a weapon 
                                            attack that targets a hostile creature, you can use your reaction to make an augmented weapon attack against the same 
                                            target. You must spend at least one MP to augment the weapon attack, such as with Drain Vitality. This reaction costs 
                                            2 MP on top of the MP spent to augment the weapon attack. </td>
                                            <td className='right'><i>n</i> + 2&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Focused Convergence.&nbsp;</i></b> The next time you cast a Kaleido spell with an area of effect that 
                                            encompasses more than one creature, you may have the spell converge on one target within the area of effect instead. 
                                            If you do so, increase any damage die dealt by one step (for example, any d6 of damage becomes a d8 of damage instead). 
                                            If the un-augmented spell required the targets to make any spell saving throw, you instead make a ranged spell attack. </td>
                                            <td className='right'>3&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Diffusion.&nbsp;</i></b> The next time you cast a Kaleido spell that targets only one creature and 
                                            doesn't have a range of self, you can spend an amount of MP equal to the spell's level to target a second creature in 
                                            range with the same spell (Costs 1 MP if the spell is a cantrip). To be eligible, a spell must be incapable of 
                                            targeting more than one creature at the spell's current level. For example, Magic Missile and Scorching Ray aren't 
                                            eligible, but Ray of Frost and Chromatic Orb are.</td>
                                            <td className='right'> <i>n</i> &ge; 1 &nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Flux Strike.&nbsp;</i></b> On the next Kaleido spell you cast that deals bludgeoning, piercing, or slashing 
                                            damage, you can reroll any number of the damage dice one time, accepting the new rolls. </td>
                                            <td className='right'> 1 &nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Destruction.&nbsp;</i></b> When you cast a Kaleido spell that deals damage, any non-magical objects 
                                            that are not being worn or carried that are targeted by the spell are completely destroyed.</td>
                                            <td className='right'> 1 &nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Prismatic Blade.&nbsp;</i></b> The next Kaleido spell you cast that deals damage is stored in your weapon. 
                                            The next time you hit with that weapon, it deals the usual weapon damage and activates the spell’s effect. If it 
                                            misses, the spell is not expended and lingers in the weapon until it hits. You can only have one spell stored in a 
                                            weapon this way and it will dissipate after one hour.</td>
                                            <td className='right'> 2 &nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Hidden Spell.&nbsp;</i></b> You can cause the next Kaleido spell to become invisible.</td>
                                            <td className='right'> 2 &nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td><b><i>Distant Casting.&nbsp;</i></b> You can double the range of the next Kaleido spell you cast. If the 
                                            spell has a duration, such as Mage Hand, the range is extended for the duration. This does not increase a spell’s 
                                            area size, such as fireball’s 20ft sphere, but it can extend the range of where the sphere could be centered. Touch 
                                            spells gain a range of 15 feet.</td>
                                            <td className='right'> 2 &nbsp;</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                </p>

                            <h3>Drain Vitality</h3>
                            <p>Your understanding of a creature’s essence allows you to drain an enemy physically rather than magically. Starting at 2nd level, 
                                you can augment a melee weapon attack by spending 1 MP to change the damage type of the weapon to necrotic damage. After hitting 
                                with the weapon, you heal a number of Hit Points equal to half the damage dealt. You can use this feature a number of times equal 
                                to your Intelligence modifier per long rest. The number of damage dice you roll when using Drain Vitality increases as your 
                                Kaleido level increases, increasing to 2 at 5th level, 3 at 11th level, and 4 at 17th level.</p>

                            <h3>Kaleido Origin</h3>
                            <p>Every Kaleido has gained their understanding of creatures and their essences from a different source. As you begin to better 
                                understand your abilities, you gain insight into the origin of the magic that allows you to see, absorb, and control creature 
                                essence. Choose one of the Origins listed below. Your choice grants you a feature at 3rd level and additional features at 5th, 
                                9th, and 15th levels. </p>

                            <h3>Check</h3>
                            <p>Starting at 3rd level, you gain proficiency in the Investigation skill. If you already have this proficiency, you gain expertise. 
                                Also, as an action on your turn, you can choose a creature and identify its special abilities. You must succeed on a DC 15 + the 
                                creature’s CR Intelligence (Investigation) check. On a success, this tells you any abilities the creature has that you may be 
                                able to learn. You can use this feature a number of times equal to your Intelligence modifier.</p>

                            <h3>Ability Score Increase</h3>
                            <p>When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or 
                                you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this 
                                feature.</p>

                            <h3>Focused Pressure</h3>
                            <p>Starting at 10th level, you can focus your attention entirely on your next attack or spell. This will cause your next successful 
                                weapon attack or spell attack to deal double damage. This takes an action to put into effect and imposes disadvantage on your next 
                                attack roll. You can use this a number of times equal to your Intelligence modifier. </p>

                            <h3>Signature Lore</h3>
                            <p>At 11th level, you have formed a connection with the essence of a particular monster you have absorbed. You can pick a spell of 3rd 
                                level or lower, causing it to consume half of its usual MP cost and lose any limitation on number of uses, unless stated otherwise 
                                by the spell. You gain a second Signature Lore at 15th level and a third at 19th level. You can change any of your Signature Lore 
                                on a level up. </p>

                            <h3>Detecting Check</h3>
                            <p>At 13th level, your abilities of investigation increase. Whenever you use the Check action you can also detect the vulnerabilities 
                                and resistances of the target creature. </p>

                            <h3>Miasmasight</h3>
                            <p>You are now able to tap into the magical currents around you. Starting at 18th level you gain the permanent effects of the Detect 
                                Magic spell as well as 30 feet of blindsight. </p>

                            <h3>Swirling Learning</h3>
                            <p>Your ability to learn the abilities of creatures increases. Starting at 20th level, when a creature succeeds on a save against your 
                                Learning ability, you can use your reaction to force the creature to reroll, possibly turning the success into a failure. You can 
                                use this ability a number of times equal to your proficiency bonus.</p>

                            </div>
                        </Tab>
                        <Tab eventKey="smoke-origin" title="Smoke Origin">
                        </Tab>
                        <Tab eventKey="spell-list" title="Kaleido Spell List">
                            <div className='content'>
                            <h4>Kaleido Spells</h4>
                            <p>Each Kaleido spell listed below can be learned through the Learning class feature. Spells may have prerequisites that both you 
                                and the target creature must meet in order for it to be available to you. Some spells have a prerequisite that the Learning 
                                target has a particular trait or action. When multiple traits or actions are listed, you may choose one. This is known as the 
                                Learning Trait or Learning Action. All spells that are gained cost no material components unless the components cost 50 gold pieces 
                                or more.</p>
                            <p>Each spell can be cast a number of times equal to your proficiency bonus per long rest. Cantrips can be cast as many times as 
                                you’d like.</p>

                            <h4>Weapon Attacks with Spells</h4>
                            <p>Some Kaleido spells allow you to make a melee weapon attack. In these cases, you are always considered proficient with the weapon 
                                that is manifested, but any weapon manifested this way will lose the Finesse property, unless you take the Kaleido Trait Dancing 
                                Blade. Any weapon attacks made with one of these weapons counts as magical for the purpose of damage resistances. </p>
                            
                            <h3>Cantrips</h3>
                            <p>
                                <Table hover responsive bordered size="sm">
                                    <thead className='thead'>
                                        <tr>
                                            <th>Spell Name</th>
                                            <th>School</th>
                                            <th>Casting Time</th>
                                            <th>Range</th>
                                            <th>Duration</th>
                                            <th>Components</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr onClick={onClickHandler}>
                                        <td>Cantrip</td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td>--</td>
                                    </tr>
                                    <tr className="collapse">
                                        <td colSpan="6">
                                        <p className='top'>You gain a cantrip. You can choose 1 cantrip that the target has cast no longer than 1 minute ago, or one of the cantrips 
                                            from the following table. The cantrips available to you depend on the damage types that the target could inflict.</p>
                                        
                                        <Table responsive bordered size="sm" className='sm-md-table'>
                                            <thead className='thead'>
                                                <tr>
                                                    <th>Damage Type</th>
                                                    <th>Available Cantrip</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Acid</td>
                                                    <td>Acid Splash</td>
                                                </tr>
                                                <tr>
                                                    <td>Cold</td>
                                                    <td>Ray of Frost</td>
                                                </tr>
                                                <tr>
                                                    <td>Fire</td>
                                                    <td>Fire Bolt</td>
                                                </tr>
                                                <tr>
                                                    <td>Poison</td>
                                                    <td>Poison Spray</td>
                                                </tr>
                                                <tr>
                                                    <td>Lightning</td>
                                                    <td>Shocking Grasp</td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                        <i><small>Prerequisite: Learning target has used a cantrip in the last minute, or has an attack or feature that deals acid, 
                                            cold, fire, poison, or lightning damage.</small></i>
                                        </td>
                                    </tr>
                                    </tbody>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Natural Weapon</td>
                                            <td>Transmutation</td>
                                            <td>1 action</td>
                                            <td>5 Feet</td>
                                            <td>Instantaneous</td>
                                            <td>V, S</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                            <p className='top'>You briefly manifest a natural weapon. Make a melee weapon attack against a creature within 5 feet, dealing 1d8 damage on 
                                                a hit. The damage type depends on the Learning Action, and each attack has an additional effect, as indicated below:</p>
                                            <ul>
                                                <li><b>Bite (piercing) or Claw (slashing):</b> The attack scores a critical hit on a roll of 19 or 20. </li>
                                                <li><b>Gore (piercing) or Ram (bludgeoning).</b> If you moved 20 feet straight towards the target before casting the 
                                                spell, then on a hit the target must make a Strength saving throw or be knocked prone.</li>
                                                <li><b>Tentacle (bludgeoning).</b> If the attack hits, you grapple the target.</li>
                                            </ul>
                                            <p>You can learn this spell multiple times, each time choosing a different kind of attack as the Learning Action.</p>
                                            <p><b><i>At Higher Levels.&nbsp;</i></b> This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level 
                                            (3d8), and 17th level (4d8).</p>     
                                            <i><small>Prerequisite: Learning Target has a bite, claw, gore, ram, or tentacle attack.</small></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Enhance Senses</td>
                                            <td>Transmutation</td>
                                            <td>1 Bonus Action</td>
                                            <td>10 minutes</td>
                                            <td>N/A</td>
                                            <td>S</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                                <p className='top'>You enhance your senses for 10 minutes. The effect depends on the Learning Action:</p>
                                                <ul>
                                                    <li><b>Darkvision:</b> You gain a Darkvision range of 60 feet. </li>
                                                    <li><b>Keen Smell:</b> You gain advantage on Perception checks that rely on smell. You also gain advantage on survival 
                                                    checks to track a creature if you have smelled it.</li>
                                                    <li><b>Keen Hearing:</b> You gain advantage on Perception checks that rely on hearing. You can also hear from much 
                                                    farther away.</li>
                                                    <li><b>Keen Sight:</b>You gain advantage on Perception checks that rely on sight. You can also double the effective 
                                                    range of your sight as well. </li>
                                                    <li><b>Iron Scent:</b>You can sense metals within 30 feet of you. </li>
                                                </ul>
                                                <p>You can learn this spell multiple times, each time choosing a different kind of attack as the Learning Action.</p>
                                                <i><small>Prerequisite: Learning target has Darkvision, Keen Smell, Keen Hearing, Keen Sight, or Iron Scent.</small></i> 
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </p>
                            <h3>1st Level Spells</h3>
                            <p>
                                <Table hover responsive bordered size="sm">
                                    <thead className='thead'>
                                        <tr>
                                            <th>Spell Name</th>
                                            <th>School</th>
                                            <th>Casting Time</th>
                                            <th>Range</th>
                                            <th>Duration</th>
                                            <th>Components</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Elemental Breath</td>
                                            <td>Transmuation</td>
                                            <td>1 Action</td>
                                            <td>15 Feet</td>
                                            <td>Instantaneous</td>
                                            <td>S, V</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                                <p className='top'>You breathe an elemental breath in a 15 foot cone. Each creature in that area must make a Dexterity or 
                                                    Constitution saving throw, determined by the Learning Action. The target takes 3d6 damage on a failed save, or 
                                                    half as much on a successful one. The type of damage is the same that was dealt by the Learning Action.</p>
                                                <p><small><b><i>At Higher Levels.&nbsp;</i></b> When you cast this spell using a spell slot of 2nd level or higher, the 
                                                    damage increases by 1d6 for each slot level above 1st. </small></p>  
                                                <i><small>Prerequisite: 1st level; Learning target has an action that has a cone area of effect and deals damage.</small></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Charm Person</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                            <td>--</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                                <p className='top'>You gain the Charm Person spell.</p>
                                                <i><small>Prerequisite: 1st level; learning target has an action that can charm creatures.</small></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Constrictor</td>
                                            <td>Transmutation</td>
                                            <td>1 Action</td>
                                            <td>10 Feet</td>
                                            <td>Instantaneous</td>
                                            <td>S, V</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                                <p className='top'>You briefly manifest a long tail or tentacle-like appendage. Make a weapon attack against a creature within 10 
                                                    feet. On a hit, you deal 2d8 bludgeoning damage and the target is grappled. Until the grapple ends, the target 
                                                    is restrained. When the grapple ends, the manifested appendage disappears.</p>
                                                <p><small><b><i>At Higher Levels.&nbsp;</i></b> When you cast this spell using a spell slot of 2nd level or higher, the 
                                                    damage increases by 1d8 for each slot above 1st.</small></p>  
                                                <i><small>Prerequisite: 1st level; Learning target has a constrict or tentacle attack that can grapple.</small></i>             
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Natural Armor</td>
                                            <td>Transmutation</td>
                                            <td>1 Action</td>
                                            <td>Self</td>
                                            <td>Instantaneous</td>
                                            <td>S, V</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                                <p className='top'>For 1 hour, your AC increases by 1 if you are wearing light armor or no armor.</p>
                                                <p><small><b><i>At Higher Levels.&nbsp;</i></b> When you cast this spell using a spell slot of 3rd level, your AC increases 
                                                    by 2. When you cast this spell using a spell slot of 5th level, your AC increases by 3.</small></p>  
                                                <i><small>Prerequisite: 1st level; Learning target has natural armor.</small></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Spell</td>
                                            <td>?</td>
                                            <td>?</td>
                                            <td>?</td>
                                            <td>Instantaneous</td>
                                            <td>?</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                                <p className='top'>You gain the 1st level spell that the target cast. </p>
                                                <i><small>Prerequisite: 1st level; Learning target cast a spell of 1st level no longer than 1 minute ago.</small></i>                         
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Elemental Spray</td>
                                            <td>Transmutation</td>
                                            <td>1 Action</td>
                                            <td>30 Feet</td>
                                            <td>Instantaneous</td>
                                            <td>S, V</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                                <p className='top'>You spray an elemental spray in a line that is 30 feet long and 5 feet wide. Each creature in that line 
                                                    must make a Dexterity saving throw, taking 3d6 damage on a failed save, or half as much on a successful one. The type of 
                                                    damage is the same that was dealt by the Learning Action. </p>
                                                <p><b><i>At Higher Levels.&nbsp;</i></b> When you cast this spell using a spell slot of 2nd level or higher, the damage 
                                                    increases by 1d6 for each slot level above 1st. The length of the line increases to 60 feet if a spell slot above 3rd level is 
                                                    used. </p>  
                                                <i><small>Prerequisite: 1st level; Learning target has an action that has a line area of effect and deals damage.</small></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Animalistic Attacks</td>
                                            <td>Transmutation</td>
                                            <td>1 Bonus Action</td>
                                            <td>Self</td>
                                            <td>Instantaneous</td>
                                            <td>S, V</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                            <p className='top'>You gain the attacking style of the Learning target. The result depends on the Learning Action. </p>
                                            <ul>
                                                <li><b>Charge:</b> If you move at least 20 feet straight toward a target and then hit it with a melee attack during the same turn, 
                                                the target takes an extra 1d8 damage. If the target is a creature, it must succeed on a Strength saving throw against your spell 
                                                save DC or be knocked prone.</li>
                                                <li><b>Pounce:</b> If you move at least 20 feet straight toward a target and then hit it with a melee attack during the same turn, 
                                                that target must succeed on a Strength saving throw against your spell save DC or be knocked prone. If the target is prone, you can 
                                                make one additional melee attack against the same target. </li>
                                            </ul>
                                            <i><small>Prerequisite: 1st level; Learning target has an attacking style such as Pounce or Charge.</small></i> 
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Healing Touch</td>
                                            <td>Evocation</td>
                                            <td>1 Action</td>
                                            <td>5 Feet</td>
                                            <td>Instantaneous</td>
                                            <td>S, V</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                            <p className='top'>You release a blast of positive energy at a target within 5 feet of yourself. This heals the target a number of Hit 
                                            Points equal to 2d8 + your Intelligence modifier. The caster must wait 1d6 minutes before casting this spell again. </p>
                                            <p><b><i>At Higher Levels.&nbsp;</i></b> When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 
                                                per spell level.</p>  
                                            <i><small>Prerequisite: 1st level; Learning target has the Healing Touch ability.</small></i>
                                            
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </p>

                            <h3>2nd Level Spells</h3>
                            <p>
                                <Table responsive bordered size="sm">
                                    <thead className='thead'>
                                        <tr>
                                            <th>Spell Name</th>
                                            <th>School</th>
                                            <th>Casting Time</th>
                                            <th>Range</th>
                                            <th>Duration</th>
                                            <th>Components</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Spell Name</td>
                                            <td>School</td>
                                            <td>Casting Time</td>
                                            <td>Range</td>
                                            <td>Duration</td>
                                            <td>Components</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                            <p className='top'>Description</p>
                                            <p><b><i>At Higher Levels.&nbsp;</i></b> </p>  
                                            <i><small>Prerequisite:</small></i>
                                            
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </p>

                            <h3>3rd Level Spells</h3>
                            <p>
                                <Table responsive bordered size="sm">
                                    <thead className='thead'>
                                        <tr>
                                            <th>Spell Name</th>
                                            <th>School</th>
                                            <th>Casting Time</th>
                                            <th>Range</th>
                                            <th>Duration</th>
                                            <th>Components</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Spell Name</td>
                                            <td>School</td>
                                            <td>Casting Time</td>
                                            <td>Range</td>
                                            <td>Duration</td>
                                            <td>Components</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                            <p className='top'>Description</p>
                                            <i><small>Prerequisite:</small></i>
                                            
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </p>

                            <h3>4th Level Spells</h3>
                            <p>
                                <Table responsive bordered size="sm">
                                    <thead className='thead'>
                                        <tr>
                                            <th>Spell Name</th>
                                            <th>School</th>
                                            <th>Casting Time</th>
                                            <th>Range</th>
                                            <th>Duration</th>
                                            <th>Components</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Spell Name</td>
                                            <td>School</td>
                                            <td>Casting Time</td>
                                            <td>Range</td>
                                            <td>Duration</td>
                                            <td>Components</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                            <p className='top'>Description</p>
                                            <i><small>Prerequisite:</small></i>
                                            
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </p>

                            <h3>5th Level Spells</h3>
                            <p>
                                <Table responsive bordered size="sm">
                                    <thead className='thead'>
                                        <tr>
                                            <th>Spell Name</th>
                                            <th>School</th>
                                            <th>Casting Time</th>
                                            <th>Range</th>
                                            <th>Duration</th>
                                            <th>Components</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Spell Name</td>
                                            <td>School</td>
                                            <td>Casting Time</td>
                                            <td>Range</td>
                                            <td>Duration</td>
                                            <td>Components</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                            <p className='top'>Description</p>
                                            <i><small>Prerequisite:</small></i>
                                            
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </p>

                            <h3>6th Level Spells</h3>
                            <p>
                                <Table responsive bordered size="sm">
                                    <thead className='thead'>
                                        <tr>
                                            <th>Spell Name</th>
                                            <th>School</th>
                                            <th>Casting Time</th>
                                            <th>Range</th>
                                            <th>Duration</th>
                                            <th>Components</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Spell Name</td>
                                            <td>School</td>
                                            <td>Casting Time</td>
                                            <td>Range</td>
                                            <td>Duration</td>
                                            <td>Components</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                            <p className='top'>Description</p>
                                            <i><small>Prerequisite:</small></i>
                                            
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </p>

                            <h3>7th Level Spells</h3>
                            <p>
                                <Table responsive bordered size="sm">
                                    <thead className='thead'>
                                        <tr>
                                            <th>Spell Name</th>
                                            <th>School</th>
                                            <th>Casting Time</th>
                                            <th>Range</th>
                                            <th>Duration</th>
                                            <th>Components</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={onClickHandler}>
                                            <td>Spell Name</td>
                                            <td>School</td>
                                            <td>Casting Time</td>
                                            <td>Range</td>
                                            <td>Duration</td>
                                            <td>Components</td>
                                        </tr>
                                        <tr className="collapse">
                                            <td colSpan="6">
                                            <p className='top'>Description</p>
                                            <i><small>Prerequisite:</small></i>
                                            
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </p>
                                   
                            </div>
                        </Tab>

                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Kaleido;