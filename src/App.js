import React from 'react';
import { PagesAccueil } from './pages/PagesAccueil';
import{PagesDrapeauLangue}  from './pages/PagesDrapeauLangue';
// import {Navbar,Form,FormControl,Button} from 'react-bootstrap';
import {NavBar} from './components/NavBar';
import './App.css';
// import {Card,Button} from 'react-bootstrap';
// import Caros from './components/Caros';
// import Buttons from './components/Buttons';
function App() {
  return (
    <div className="App">
     <NavBar />
     <PagesDrapeauLangue />
     {/* <Caros /> */}
     {/* <Buttons Vari="urgence" /> */}
     {/* <Buttons /> */}
     {/* <Card style={{ width: '18rem' }}> */}
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  {/* <Card.Body> */}
    {/* <Card.Title>Card Title</Card.Title> */}
    {/* <Card.Text> */}
      {/* Some quick example text to build on the card title and make up the bulk of */}
      {/* the card's content. */}
    {/* </Card.Text> */}
    {/* <Button variant="primary">Go somewhere</Button> */}
  {/* </Card.Body> */}
{/* </Card> */}
<PagesAccueil />
</div>







    
   
    

  );
  } 




export default App;