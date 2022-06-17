import React from 'react'

import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './dragon-logo.svg';

import Home from './components/Home/Home'
import PlayerBios from './components/PlayerBios/PlayerBios';
import CharacterSheetsYiuLai from './components/CharacterSheets/CharacterSheetsYiuLai'
import CharacterSheetsAelith from './components/CharacterSheets/CharacterSheetsAelith'
import SessionSummariesYiuLai from './components/SessionSummaries/SessionSummariesYiuLai'
import SessionSummariesAelith from './components/SessionSummaries/SessionSummariesAelith'
import HomebrewedRaces from './components/Homebrewed/HomebrewedRaces'
import HomebrewedClasses from './components/Homebrewed/HomebrewedClasses'

function App() {
  return (
    <Router>
      <div className='nav-area'>  
        <Navbar collapseOnSelect expand="md" bg="maroon" variant="dark" fixed="top">
          
          <Container fluid>
          <Navbar.Brand className="brand"> 
              <img className="logo" src={logo}/>
              D&D by Gaymnight
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>      
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>  
              <Nav.Link as={Link} to={"/player-bios"}>
                Player Bios
              </Nav.Link>      
              <NavDropdown title="Yiu Lai">
                <NavDropdown.Item href="/yiu-lai/character-sheets">Character Sheets</NavDropdown.Item>
                <NavDropdown.Item href="/yiu-lai/session-summaries">Session Summaries</NavDropdown.Item>
                <NavDropdown.Item href="/yiu-lai/NPCs">NPCs</NavDropdown.Item>
                <NavDropdown.Item href="/yiu-lai/random-lore">Random Lore</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Aelith">
                <NavDropdown.Item href="/yiu-lai/character-sheets">Character Sheets</NavDropdown.Item>
                <NavDropdown.Item href="/aelith/session-summaries">Session Summaries</NavDropdown.Item>
                <NavDropdown.Item href="/aelith/NPCs">NPCs</NavDropdown.Item>
                <NavDropdown.Item href="/aelith/random-lore">Random Lore</NavDropdown.Item>      
              </NavDropdown>
              <NavDropdown title="Homebrewed">
                <NavDropdown.Item href="/homebrewed/races">Races</NavDropdown.Item>
                <NavDropdown.Item href="/homebrewed/classes">Classes</NavDropdown.Item>    
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}> </Route>
          <Route exact path='/player-bios' element={<PlayerBios/>}> </Route>
          <Route exact path='/yiu-lai/character-sheets' element={<CharacterSheetsYiuLai/>}> </Route>
          <Route exact path='/aelith/character-sheets' element={<CharacterSheetsAelith/>}> </Route>
          <Route exact path='/yiu-lai/session-summaries' element={<SessionSummariesYiuLai/>}> </Route>
          <Route exact path='/aelith/session-summaries' element={<SessionSummariesAelith/>}> </Route>
          <Route exact path='/homebrewed/races' element={<HomebrewedRaces/>}> </Route>
          <Route exact path='/homebrewed/classes' element={<HomebrewedClasses/>}> </Route>
        </Routes>
      </div>
    </Router>

    

  );
}

export default App;
