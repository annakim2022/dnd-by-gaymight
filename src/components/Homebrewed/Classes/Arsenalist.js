import React from 'react';
import './HomebrewedClasses';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Arsenalist = () => {

    return (
        <div className='Arsenalist'> 
            <div className='outer-box'>
                <h2 className='class-name'>Arsenalist</h2>
                <div className='box'> 
                    <Tabs defaultActiveKey='features'>
                        <Tab eventKey="features" title="Class Features">
                            <div className='content'>
                            <h4>Hit Points</h4>
                            <p>
                            Hit Dice: 1d8 per Arsenalist level <br></br>
                            Hit Points at 1st Level: 8 + Constitution Modifier <br></br>
                            Hit Points at Higher Levels: 1d8 (or 5) + your Constitution modifier per Arsenalist level after 1st.
                            </p>


                            </div>
                        </Tab>
                        <Tab eventKey="overseer" title="Overseer">
                            <div className='content'>
                                some stuff
                            </div>
                        </Tab>
                        <Tab eventKey="dancer" title="Dancer">
                            <div className='content'>
                                some stuff
                            </div>
                        </Tab>
                        <Tab eventKey="bastion" title="Bastion">
                            <div className='content'>
                                some stuff
                            </div>
                        </Tab>
                    </Tabs>
                </div>           
            </div>    
        </div>
    )
}

export default Arsenalist;