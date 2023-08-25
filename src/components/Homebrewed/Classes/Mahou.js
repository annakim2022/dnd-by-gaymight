import React from 'react';
import './Classes.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Table from 'react-bootstrap/Table'

const Mahou = () => {

    return (
        <div className='page'> 
            <div className='outer-box'>
                <h2 className='page-title'>Mahou</h2>
                <div className='box'> 
                    <div className='content'>
                    <h3>The Mahou Table </h3>
                        <p>
                        <Table responsive bordered size="sm" className='md-table'>
                            <thead className='thead'>
                                <tr>
                                    <th>Level</th>
                                    <th>Proficiency Bonus</th>
                                    <th>Arsenal Points&nbsp;&nbsp;</th>
                                    <th>Features</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1st</td>
                                    <td className='right'>+2&nbsp;</td>
                                    <td className='right'>3</td>
                                    <td>Activated Arsenal</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>2nd</td>
                                    <td className='right'>+2&nbsp;</td>
                                    <td className='right'>3</td>
                                    <td>Fighting Style</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>3rd</td>
                                    <td className='right'>+2&nbsp;</td>
                                    <td className='right'>4</td>
                                    <td>Arsenal Tactics</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>4th</td>
                                    <td className='right'>+2&nbsp;</td>
                                    <td className='right'>4</td>
                                    <td>Ability Score Increase</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>5th</td>
                                    <td className='right'>+3&nbsp;</td>
                                    <td className='right'>4</td>
                                    <td>Bladesurge</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>6th</td>
                                    <td className='right'>+3&nbsp;</td>
                                    <td className='right'>5</td>
                                    <td>Streamlining</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>7th</td>
                                    <td className='right'>+3&nbsp;</td>
                                    <td className='right'>5</td>
                                    <td>Resilience, Arsenal Tactics Feature</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>8th</td>
                                    <td className='right'>+3&nbsp;</td>
                                    <td className='right'>5</td>
                                    <td>Ability Score Increase</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>9th</td>
                                    <td className='right'>+4&nbsp;</td>
                                    <td className='right'>6</td>
                                    <td>Streamlining Improvement</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>10th</td>
                                    <td className='right'>+4&nbsp;</td>
                                    <td className='right'>6</td>
                                    <td>Concentrated Endurance</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>11th</td>
                                    <td className='right'>+4&nbsp;</td>
                                    <td className='right'>6</td>
                                    <td>Bladesurge Improvement, Resilience Improvement</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>12th</td>
                                    <td className='right'>+4&nbsp;</td>
                                    <td className='right'>7</td>
                                    <td>Ability Score Increase</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>13th</td>
                                    <td className='right'>+5&nbsp;</td>
                                    <td className='right'>7</td>
                                    <td>Arsenal Tactics Feature</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>14th</td>
                                    <td className='right'>+5&nbsp;</td>
                                    <td className='right'>7</td>
                                    <td>Concentrated Endurance Improvement</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>15th</td>
                                    <td className='right'>+5&nbsp;</td>
                                    <td className='right'>8</td>
                                    <td>Fighting Style, Resilience Improvement</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>16th</td>
                                    <td className='right'>+5&nbsp;</td>
                                    <td className='right'>8</td>
                                    <td>Ability Score Increase</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>17th</td>
                                    <td className='right'>+6&nbsp;</td>
                                    <td className='right'>8</td>
                                    <td>Unrelenting Resolve</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>18th</td>
                                    <td className='right'>+6&nbsp;</td>
                                    <td className='right'>9</td>
                                    <td>Concentrated Endurance Improvement</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>19th</td>
                                    <td className='right'>+6&nbsp;</td>
                                    <td className='right'>9</td>
                                    <td>Ability Score Increase</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>20th</td>
                                    <td className='right'>+6&nbsp;</td>
                                    <td className='right'>10</td>
                                    <td>Arsenal Mastery</td>
                                </tr>
                            </tbody>
                        </Table>
                        </p>
                    <h4>Hit Points</h4>
                    <p>
                        <b>Hit Dice: </b> 1d10 per Mahou level <br></br>
                        <b>Hit Points at 1st Level: </b> 10 + Constitution Modifier <br></br>
                        <b>Hit Points at Higher Levels: </b> 1d10 (or 6) + your Constitution modifier per Mahou level after 1st.
                    </p>

                    <h4>Proficiencies</h4>
                    <p>
                        <b>Armor: </b> Shield <br></br>
                        <b>Weapons: </b> Simple Weapons, Wish Weapon <br></br>
                        <b>Tools: </b> None <br></br>
                        <b>Saving Throws: </b> Consititution, Charisma <br></br>
                        <b>Skills: </b> Choose two from Acrobatics, Athletics, Arcana, Deception, Insight, Investigation, Perception, Performance, and Persuasion
                    </p>
                    
                        <h4>Equipment</h4>
                        <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
                        <ul>
                            <li>a dagger and one simple weapon (this will serve as your Wish Weapon)</li>
                            <li>a trinket that will serve as your Wish Seed</li>
                            <li>a set of common clothing and a shield</li>
                            <li>(a) an explorer’s pack or (b) a dungeoneer’s pack</li>
                        </ul>

                    <h3>Wish Seed</h3>
                        <p>As a Mahou, your essence is held within an item known as your Wish Seed. This Tiny object serves as a manifestation of the wish you made that granted you your powers. Without the Wish Seed, you are not only powerless, but stray too far from it and your mortal body will begin to die. If you are ever more than 60 feet away from your Wish Seed, you will fall unconscious and take two levels of Exhaustion. Once the Wish Seed is back within 60 feet of you, you will regain consciousness, but the levels of Exhaustion will remain until your next long rest. The Wish Seed itself has an AC of 10 and Hit Points equal to 5 + 5 x your Mahou level. The Wish Seed can be hidden on your person with a Bonus Action, granting it total cover. In the event that your Wish Seed is destroyed, your soul is also destroyed. You instantly fall to 0 Hit Points and fail 3 Death Saves. No magic can restore the magic to your Wish Seed or your soul to your body but a Wish spell. If your body dies but your Wish Seed remains intact, your soul will be returned to the Wish Seed and lay dormant for 10d100 years. Revivify or a similar spell can still be used on your body and will pull your soul from the Wish Seed if it is willing.</p>
                        <p>Additionally, your Wish Seed contains an amount of magical energy represented as Wish Points. You have a number of Wish Points equal to your Mahou level + your Charisma Modifier. These Wish Points are expended through the use of the Mahou abilities detailed below and replenished through the consumption of Grief Seeds. After combat, you may take 10 minutes to search for Grief Seeds dropped by the creatures killed. This search requires a success on a DC 15 Investigation check. The DC of this Investigation check increases as you level up, becoming 16 at 5th level, 17 at 9th level, 18 at 13th level, and finally 19 at 17th level. On a success, you discover a number of Grief Seeds equal to 1d4 + your Proficiency Bonus, with the number retrievable being less than or equal to the number of creatures killed during combat. Each Grief Seed recovers 1d4 Wish Points and takes one Action to consume in combat. Once you succeed in a search for Grief Seeds, you must finish a long rest before you can do so again.</p>
                    
                    <h3>Transformation</h3>
                        <p>Starting at 1st level, you gain the ability to transform into a magical, more powerful form of yourself through the power of your Wish Seed. When you roll initiative or as a bonus action, you may spend 1 Wish Point and touch your Wish Seed to begin your Transformation. When you do so, your appearance changes into a second form. This form may have different color hair, additional features, etc., but will still be recognizably you. You also gain a set of magical armor and a weapon, known as your Wish Attire and Wish Weapon. This Transformation lasts 1 hour, or until you are knocked unconscious. </p>
                        <p><u>Wish Attire</u>: When you Transform, the armor that adorns you can have any appearance you wish. Regardless of the appearance, your Wish Attire grants you an Armor Class of 10 + your Charisma Modifier + your Dexterity Modifier. You can use a shield and still gain the benefit of this feature. </p>
                        <p><u>Wish Weapon</u>: When you Transform, you can also pull from your Wish Seed a weapon made of condensed light. In order to utilize this feature, you must bond a weapon to your Wish Seed, a process you can complete over the span of a short rest or at the end of a long rest. Once a weapon is bound to your Wish Seed, it cannot be unbound. You can only have 4 weapons bound to your Wish Seed, so choose wisely.</p>

                    <h3>Minor Corruption</h3>
                        <p>When a Mahou’s Wish Seed becomes corrupted, truly disastrous effects can take place. When the number of Wish Points you have available reaches 0, you lose your ability to fight this corruption. After your Wish Points reach 0 you have until the end of your next turn to recover at least 1 Wish Point to stave off the effects of your corrupting Wish Seed. Each subsequent turn, you must succeed a Charisma saving throw or you will lose control of your body and must spend 1d8 turns attacking your closest ally. While corrupted, you have unlimited Wish Points. At the end of these turns, you will continue to make Charisma saving throws. If you fall unconscious during this time, you take 1 point of Exhaustion and regain 1 Wish Point.</p>
                        <p>The saving throw is calculated as follows: 8 + your proficiency bonus + your Charisma modifier + 2 per turn spent at 0 Wish Points.</p>
                        <p>If you fall to 0 Hit Points, you automatically succumb to the corruption. You gain a number of temporary hit points equal to your Charisma Modifier and remain under the effects of the corruption until these temporary hit points run out, at which point you fall unconcious and make death saves as usual. </p>
                        <p>As your powers as a Mahou grow, the corruption festering in your Wish Seed does as well. This feature becomes Major Corruption at 9th level, Witch’s Birth at 13th level, and Witch’s Labyrinth at 17th level. </p>
                    
                    <h3>Wish Casting</h3>
                        <p>At 2nd level, you gain the ability to cast spells while you are Transformed. Choose to gain access to either the cleric or sorcerer spell list. This is where you will find your learnable spells. You can learn a number of spells from your selected list equal to your Mahou level. The spells you can learn at each level can be no higher than your spell slot level. To cast a spell, you must be Transformed. Each spell costs a number of Wish Points equal to the spell’s level + 1. At 2nd level, all spells are 1st level. As you gain Mahou levels, the level at which your spells will be cast increases, as represented in the Spell Slot Level column of the Mahou table.</p>

                    <h3>Wish Casting Ability</h3>
                        <p>Charisma is your Wish Casting ability for your spells. Your love for your companions and bonds with others are what power your abilities. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a Mahou spell you cast and when making an attack roll with one. </p>
                        <p><u>Spell save DC</u> = 8 + your proficiency bonus + your Charisma modifier.</p>
                        <p><u>Spell attack modifier</u> = your proficiency bonus + your Charisma modifier.</p>

                    <h3>Wish Casting Focus</h3>
                        <p>You can only use your Wish Weapon as a spellcasting focus for your Mahou spells. When you do so, you can use the weapon itself to complete the somatic components of the spell.</p>
                   
                    <h3>Magical Promise I</h3>
                        <p>Rather than having a focus or subclass, each Mahou must make a choice at 2nd, 6th, 10th, 14th, and 18th levels. At 2nd level, you are faced with the following choice:</p>
                        <p><u>Promise of Quintessence</u>: When you strike a creature with your Wish Weapon, you can expend up to 6 Wish Points to deal an additional 1d8 of the weapon’s damage type for every 2 Wish Points expended.</p>
                        <p><u>Promise of Renewal</u>: When you restore Hit Points to yourself or to an ally, you can expend up to 6 Wish Points to restore an additional 1d6 Hit Points for every 2 Wish Points expended. </p>

                    <h3>Mystic Saturation</h3>
                        <p>Starting at 3rd level, you gain the ability to enchant the Wish Weapons and Wish Attire in your arsenal. You have a total of 1 Weapon Saturation slot and 1 Attire Saturation slot. Over the course of a long rest, you may transfer the magic from a non-sentient weapon or piece of armor to your Wish Weapon or Attire, consuming the weapon or armor in the process. To remove a Saturation from a Wish Weapon or Attire, you must spend the same amount of time and 5 Wish Points. You gain additional Weapon and Attire Saturation slot at 8th and 14th levels. For every 2 Saturation slots occupied by an enchantment, your Transformation costs 1 additional Wish Point. </p>

                    <h3>Ability Score Increase</h3>
                        <p>When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.</p>

                    <h3>Extra Attack</h3>
                        <p>Beginning at 5th level, you can make a weapon attack twice, instead of once, whenever you take the Attack action on your turn.</p>

                    <h3>Magical Promise II</h3>
                        <p>At 6th level you are faced with the following choice:</p>
                        <p><u>Promise of Empathy</u>: Once per long rest, you can spend 2 Wish Points as a bonus action to link your soul to an ally within 30 feet that you can see. Whenever that creature takes damage for the next minute, you can use your reaction to reduce the damage it takes by half. The other half of the damage is transferred to you. Alternatively, you can link your soul to a hostile creature within 30 feet that you can see instead. When you hit that linked creature with a weapon attack, you can use your reaction to regain hit points equal to half the damage dealt. Once you have taken your reaction, this effect ends. </p>
                        <p><u>Promise of Grief</u>: Once per long rest, you may create 1d6 Grief Seeds, after which you suffer 2 points of exhaustion and your Maximum Hit Points are halved until the end of your next long rest.</p>
                    
                    <h3>Power of Friendship</h3>
                        <p>At 7th level you become empowered by your friends. When you are within 5 feet of an ally, you may spend 4 Wish Points as a bonus action to activate one of the following effects:</p>
                        <p><u>Together!</u>: You and one of your allies within 10 feet gain advantage on attack rolls against a single target within 30 feet of you for 1d4 turns. The effects of this feature are lost when you or your ally is more than 40 feet from the target enemy or you and your ally are more than 30 feet from each other.</p>
                        <p><u>Look Out!</u>Look Out!: You and one of your allies within 5 feet gain advantage on saving throws imposed by a single enemy you can see within 60 feet of you for 1d4 turns. The effects of this feature are lost when you and your ally are more than 30 feet from each other. You can use this feature a number of times equal to your proficiency bonus.</p>

                    <h3>Major Corruption</h3>
                        <p>At 9th level, your corrupted form grows ever stronger as you fight to keep away the darkness. While in your corrupted state you deal an additional die of damage and gain temporary hit points equal to your Mahou level + your Charisma modifier. The corruption now lasts 1d10 turns and the DC for the Charisma save made each turn is now calculated as follows: 8 + your proficiency bonus + your Charisma modifier + 3 per turn spent at 0 Wish Points.</p>

                    <h3>Magical Promise III</h3>
                        <p>At 10th level, you are faced with the following choice: </p>
                        <p><u>Promise of Convergence</u>: When you undergo your Transformation, you can expend an additional 3 Wish Points to summon an additional Wish Weapon, holding it in stasis in any space you can see within 30 feet of you. It is intangible and can be passed through without any effects. When you hit a creature with an attack, you can use your bonus action to move the stasised weapon up to 30 feet and make an attack on the same target. If this attack also hits, you deal the weapon’s base damage plus additional radiant damage equal to your Charisma modifier. The weapon stays in stasis until your Transformation ends. </p>
                        <p><u>Promise of Warding</u>: When an ally you can see within 30 feet of you is hit by an attack you can spend 2 Wish Points as a reaction to roll a d8 and add the result to your ally’s AC. If the attack still hits your ally, they gain resistance to the damage type of the attack for this attack only. </p>

                    <h3>Exploding Transformation</h3>
                        <p>When you reach 11th level, you gain the ability to, when you transform, you have the option to spend up to 10 additional Wish Points, manifesting your power not only within yourself, but also on the battlefield. When you do so, your magic explodes in a 10 foot radius sphere centered on a point of your choosing within 60 feet of you. All creatures within this sphere must make a Constitution saving throw or take force damage calculated by rolling a number of d10’s equal to the number of Wish Points you spent. You may use this feature twice per long rest.</p>

                    <h3>Witch's Birth</h3>
                        <p>When you reach 13th level, your magic corrupts you far more deeply than before. If the number of Wish Points in your Wish Seed reaches 0, you have 1d4 rounds to recover at least 1 Wish Point before you lose control of your magic completely and transform into a Witch, healing you to your maximum Hit Points and granting you 3d8 + your Mahou level in temporary hit points. You deal 2 additional die of damage in this form and can use your Wish Abilities without expending any Wish Points. This effect lasts 1d12 turns, after which you regain 1 Wish Point and take 2 points of exhaustion.</p>

                    <h3>Magical Promise IV</h3>
                        <p>At 14th level, you are faced with the following choice:</p>
                        <p><u>Promise of Fate</u>: When you kill a creature while Transformed, you may roll a d12 or a d20. If you roll a d12, a result of 12 will reward you with 2 temporary Wish Points, which fade after 1 minute. If you roll a d20, a result of 19 will reward you with 2 temporary Wish Points, a result of 20 will reward you with 3 Wish Points, and a result of 1 will drain one Wish Point from you. You can use this feature a number of times equal to your Charisma modifier.</p>
                        <p><u>Promise of Slaying</u>: When you kill a creature while Transformed, you may move up to half of your movement speed after the kill and attack another target. This attack will deal an additional 4d6 force damage to the target on a hit. You can use this feature a number of times equal to your Charisma modifier.</p>
                    
                    <h3>Strength of Spirit</h3>
                        <p>At 15th level, when there is an ally you can see within 30 feet of you, you gain advantage on saving throws against being blinded, charmed, deafened, and frightened and cannot be put to sleep through magic. </p>
                    
                    <h3>Witch's Labyrinth</h3>
                        <p>At 17th level, the corruption that grows inside of you is near impossible to stop. If the number of wish points in your Wish Seed reaches 0, you have 1 round to recover at least 1 Wish Point before you fall unconscious, transforming both you and all terrain within a 1 mile radius of you. This 1 mile radius area of land is transformed into a Labyrinth, a dungeon based upon the innermost fears and desires of your character. A Labyrinth is typically filled with malicious entities called Familiars, which guard the fallen character and steal away the lives of those who would venture further into the labyrinth, as well as traps and hazards which may make adventuring through the labyrinth challenging and potentially deadly.</p>
                        <p>Your character is transformed into a True Witch, a maniacal entity formed from the corruption of a Mahou's true wishes. When this Witch form is defeated, the labyrinth disappears, leaving your unconscious character in its place. If the character succeeds on its death saving throws, or is stabilized or healed by magical effects, they suffer 5 points of exhaustion and regain 1 Wish Point. A labyrinth stays in place until it is dispelled by vanquishing the Witch at its core. Discuss with your DM on the themes displayed in the labyrinth, as well as anything you would like them to include within the dungeon.</p>
                    
                        <h3>Magical Promise V</h3>
                        <p>At level 20, you are faced with the following choice:</p>
                        <p><u>Promise of Brilliance</u>: When you make a Promise of Brilliance, at the start of your turn you can choose to add your Charisma modifier to your attack and damage rolls. You can use this feature 3 times per long rest.</p>
                        <p><u>Promise of Sanctity</u>: When you make a Promise of Sanctity, at the start of your turn you can choose to make your Mahou spells cost 2 less Wish Points than usual to cast. You can use this feature 3 times per long rest.</p>

                    <h3></h3>
                        <p>When you reach level 20, you gain the ability to attempt to save your friends in a moment of need. Once Transformed, you may spend all of your remaining Wish Points as an action to lock every creature and object within a 1 mile radius of you in stasis. You are the only one in this area who is able to move, speak, or act. Once you have afflicted this stasis, you may then choose when to roll a d100. Any object caught in stasis is then transported that many minutes back in time, restoring Hit Points, Hit Die, Spell Slots, and any other consumed resources back to the state they were in that many minutes ago. After that same number of minutes has passed and you are at the same moment you used this feature before, you enter your Wish Seed for 3d4 days and are incapacitated for the duration. This feature can only be used once per year.</p>
                    
                    </div>
                </div>           
            </div>    
        </div>
    )
}

export default Mahou;