import React from 'react';
import './Classes.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Arsenalist = () => {

    return (
        <div className='Arsenalist'> 
            <div className='outer-box'>
                <h2 className='page-title'>Arsenalist</h2>
                <div className='box'> 
                    <Tabs defaultActiveKey='features'>
                        <Tab eventKey="features" title="Class Features">
                            <div className='content'>
                            <h4>Hit Points</h4>
                            <p>
                                <b>Hit Dice: </b> 1d8 per Arsenalist level <br></br>
                                <b>Hit Points at 1st Level: </b> 8 + Constitution Modifier <br></br>
                                <b>Hit Points at Higher Levels: </b> 1d8 (or 5) + your Constitution modifier per Arsenalist level after 1st.
                            </p>

                            <h4>Proficiencies</h4>
                            <p>
                                <b>Armor: </b> Light, Medium <br></br>
                                <b>Weapons: </b> Simple Weapons, Martial Weapons <br></br>
                                <b>Tools: </b> Smith’s Tools <br></br>
                                <b>Saving Throws: </b>Dexterity, Intelligence <br></br>
                                <b>Skills: </b> Choose two from Athletics, Acrobatics, Stealth, Arcana, History, Religion, Insight, Perception
                            </p>
                            
                                <h4>Equipment</h4>
                                <p>You start with the following equipment, in addition to the equipment granted by your background:</p>
                                <ul>
                                    <li>(a) 2 daggers or (b) a simple weapon and a shield or (c) a martial weapon</li>
                                    <li>(a) studded leather armor or (b) a chain shirt</li>
                                    <li>smith’s tools</li>
                                    <li>(a) an explorer’s pack or (b) a dungeoneer’s pack</li>
                                </ul>

                            <h3>Activated Arsenal</h3>
                            <p>Beginning at 1st Level, you have harnessed the ability to manipulate blades to levitate around and fight alongside you. You 
                                are still limited in this ability by your experience, as shown by the Arsenal Points column in the Arsenalist Table.</p>
                            <p>The weapons in your Arsenal differ from standard weapons in several ways; due to their levitation you do not need to hold 
                                them, they receive bonuses to hit based on your Intelligence rather than your Strength or Dexterity ability modifiers, 
                                they are always treated as melee weapons and do not have the ranged property, they can not be used as an arcane focus, and 
                                their damage is not dependent on the weapons themselves. Instead, their damage is determined by their characteristics and 
                                your Proficiency Bonus rather than your Intelligence modifier.</p>
                            <p>Using Smith’s tools, or through a suitable substitute such as a weapon smith, you may spend a long rest attuning to weapons 
                                with which you have proficiency. Different weapons have different characteristics and cost different numbers of Arsenal 
                                Points, detailed below:</p>
                            <ul>
                                <li>Weapons with the Light property cost 1 Arsenal Point and invariably deal 1d4 of their respective damage type. If at 
                                    least half of your Arsenal Weapons are of this category, you do not add your Proficiency Bonus to the damage you deal. </li>
                                <li>Weapons with no properties other than Finesse cost 2 Arsenal Points and invariably deal 1d6+1 of their respective 
                                    damage type.</li>
                                <li>Weapons with the Two-Handed or Versatile properties cost 3 Arsenal Points and invariably deal 2d6+2 of their respective 
                                    damage type. Any attack roll you make with a weapon of this category suffers from a -1 penalty.</li>
                                <li>Shields cost 1 Arsenal Point and grant you the normal +2 to AC. They cannot be used to attack, and you can only gain the 
                                    AC bonus from one shield at a time.</li>
                                <li>Weapons with the Reach property cost 1 additional Arsenal Point to attune to.</li>
                                <li>Improvised Weapons cost 1 Arsenal Point and invariably deal 1 point of their respective damage type. </li>
                            </ul>
                            <p>Your Arsenal Weapons float within a 5 foot cube around you in the space you occupy. It takes an action to stow or unstow all 
                                of your Arsenal Weapons at once. When you take the Attack action on your turn, each of your Arsenal Weapons rolls to hit.</p>
                            <p>If you obtain a magical weapon that you are proficient in, you may attune to it; that weapon obeys the table set above. If 
                                it has more than one damage die, the physical damage it deals is determined by its category and the other damage is dealt 
                                normally. All other magical effects upon the weapon still apply. </p>
                            <p>You may not use this feature while wielding a weapon, arcane focus, or while wearing a shield. The attack made with this 
                                feature can not be used with Sneak Attack, and you can not perform unarmed strikes on the same turn an Animated weapon hits.</p>

                            <h3>Fighting Style</h3>
                            <p>Beginning at 2nd level, and again at 15th level you adopt a particular style of fighting as your specialty. You can't take a 
                                Fighting Style option more than once, even if you later get to choose again.</p>
                            <ul>
                                <li>Blind Fighting: You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that 
                                    isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that 
                                    range, unless the creature successfully hides from you.</li>
                                <li>Defense: While you are wearing armor, you gain a +1 bonus to AC</li>
                                <li>Dueling: While you have up to two Arsenal Weapons, you gain a +2 bonus to damage rolls with those weapons.</li>
                                <li>Great Weapon Fighting: When you roll a 1 or 2 on damage die for an attack you make with an Arsenal Weapon that has the 
                                    Two-Handed or Versatile properties, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2</li>
                                <li>Interception: When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can 
                                    use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You 
                                    must have a shield as an Arsenal Weapon to use this reaction.</li>
                                <li>Multiple-Weapon Fighting: You may add your Intelligence modifier to the damage dealt by one of your Arsenal Weapons when 
                                    taking the Attack action.</li>
                                <li>Protection: When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your 
                                    reaction to impose disadvantage on the attack roll. You must have a shield as an Arsenal Weapon to use this reaction</li>
                            </ul>

                            <h3>Arsenal Tactics</h3>
                            <p>At 3rd level, you choose a discipline that shapes the nature of your Arsenal Weapons. Choose between the Overseer, the Dancer, 
                                or the Bastion, each detailed in the other tabs. Your choice grants you features at 3rd level and again at 
                                7th and 13th levels.</p>

                            <h3>Ability Score Improvement</h3>
                            <p>When you reach 4th level, and again at 8th, 12th, 16th and 19th level, you can increase one ability score of your choice by 2, 
                                or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using 
                                this feature.</p>

                            <h3>Bladesurge</h3>
                            <p>At 5th level you have learned to strike with deadly aggression. As a Bonus Action, you may move up to half of your movement 
                                speed rounded up directly towards a creature before striking it with an amount of Arsenal Weapons up to your Intelligence 
                                modifier. If a creature is not reachable within half of your movement speed, or is already within 5ft of you, you may not use 
                                this feature. If this attack kills or incapacitates a creature, you may repeat the attack on another target up to the same 
                                distance away at the cost of 1 point of exhaustion. </p>
                            <p>When you reach 11th level, you may instead move up to your full movement speed directly towards a creature, instead of half. 
                                Additionally, you may repeat the attack on another target up to the same distance away without the exhaustion penalty.</p>
                            <p>You may use this feature a number of times equal to your proficiency bonus per long rest, and you can only ever use Bladesurge 
                                on two or fewer targets.</p>
                            
                            <h3>Streamlining</h3>
                            <p>At 6th level, you have learned how to make yourself more aerodynamic with the shapes of your blades. When your Arsenal is 
                                not stowed, your movement speed increases by 5 feet. This bonus increases by an additional 5 feet at 9th level. Additionally, 
                                you may add your Dexterity modifier to Athletics checks. </p>

                            <h3>Resilience</h3>
                            <p>Beginning at 7th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't 
                                use this feature again until you finish a long rest. You can use this feature twice between long rests starting at 11th 
                                level and three times between long rests starting at 15th level.</p>

                            <h3>Concentrated Endurance</h3>
                            <p>When you reach 10th level, you may expend one hit die as a bonus action and heal for the number rolled, as well as gaining 
                                temporary hitpoints equal to the combination of your Constitution and Intelligence modifiers. The amount of dice you can 
                                expend increases by one at 14th level and again at 18th level.</p>

                            <h3>Unrelenting Resolve</h3>
                            <p>Beginning at 17th level, if you use your Bladesurge feature without incapacitating the targeted creature, you may use your 
                                Action to attack. This attack can be done with advantage, and incorporates all of your Animated weapons. If this attack 
                                incapacitates the creature, you may proceed with Bladesurge as normal. If you performed the attack with advantage, you can 
                                not do so again until you complete a long rest. Additionally, you cannot be surprised.</p>

                            <h3>Arsenal Mastery</h3>
                            <p>At 20th level your blades move and swing in time with your very thoughts. Your Animated weapons now add your Intelligence 
                                modifier to their damage rolls, with some restrictions:</p>
                            <ul>
                                <li>Weapons with the Light property can not add more than 1 to their damage rolls.</li>
                                <li>Weapons without a property other than Finesse can not add more than 2 to their damage rolls.</li>
                            </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="overseer" title="Overseer">
                            <div className='content'>
                                <h3>Distant Strikes</h3>
                                <p>Beginning at 3rd level, when making the Attack action, you may expend your Bonus Action to strike with an amount of 
                                    Animated weapons equal to your Dexterity modifier with a range of 30/60. At 7th level, this no longer requires the 
                                    forfeiting of your Bonus Action.</p>
                                
                                <h3>Duck and Weave</h3>
                                <p>At 7th level, moving away from an enemy does not trigger an Attack of Opportunity, unless you have already moved at least
                                    5ft towards it on your turn. Additionally, you gain proficiency in Acrobatics if you do not have it already.</p>

                                <h3>Fell Stinger</h3>
                                <p>At 13th level, as a Bonus Action, you can target a creature you can see within 60 feet. Your next attack on that creature
                                    on this turn has advantage, and deals 1d8 extra piercing, slashing, or pludgeoning damage. This feature may be used once
                                    per long rest.</p>
                            </div>
                        </Tab>
                        <Tab eventKey="dancer" title="Dancer">
                            <div className='content'>
                                <h3>Bladedance</h3>
                                <p>Beginning at 3rd level, if you move at least 15 feet on your turn, your AC increases by 1 until the beginning of your 
                                    next turn.</p>
                                
                                <h3>Counter Rythm</h3>
                                <p>At 7th level,when you are hit while under the effect of Bladedance you may use your reaction to counter the enemy with an 
                                    Attack. This feature may be used once per long rest.</p>
                                
                                <h3>5, 6, 7, 8!</h3>
                                <p>At 13th level, if your Arsenal weapons deal exclusively 1d4 or 1d6+1 damage, then you may attune to an additional weapon 
                                    that doesn't contain a property other than Finesse.</p>
                            </div>
                        </Tab>
                        <Tab eventKey="bastion" title="Bastion">
                            <div className='content'>
                                <h3>Impeccable Defenses</h3>
                                <p>Beginning at 3rd level, you are able to spend each of your Arsenal Points on small, purely defensive Animated armaments. 
                                    They give a +1 bonus to your AC each and count both as improvised weapons and as shields for the purposes of other 
                                    features, and you are able to attune to other weapons as normal. You are also able to equip and attack with a one-handed 
                                    weapon that lacks the Finesse quality. You must keep one hand free to direct the shields as necessary.</p>
                                
                                <h3>A Brick... House!</h3>
                                <p>At 7th level, after an attack roll targeted at you misses your AC, you may use your Reaction to send each of your Animated 
                                weapons that do not have a damage die down on the creature. These hit automatically and each deal 1 point of bludegoning 
                                damage.</p> 

                                <h3>Fortress</h3>
                                <p>At 13th level, if you have not moved more than 5 feet, you may use an action on your turn to enter a Guard form, dropping 
                                    your walking speed to 5 feet. Each of your Arsenal Weapons that are shields automatically intercept attacks against 
                                    creatures you consider allies within 60 feet, with the attacks being rolled against your shields instead. Your shields 
                                    have an AC of 8 and Hit Points equal to your Intelligence and Constitution modifiers combined. Your shields can be 
                                    destroyed, and you can end the Guard form as a Reaction to any damage dealt to a creature you consider an ally. This 
                                    feature may be used once per long rest.</p>
                            </div>
                        </Tab>
                    </Tabs>
                </div>           
            </div>    
        </div>
    )
}

export default Arsenalist;