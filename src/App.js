

import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
// import Signup from './components/Signup';
import './App.css';
import Rules from './components/Rules';
import Mentorship from './components/Mentorship';
import Sector from './components/Sector';
import Incentive from './components/Incentive';
import Sponsor from './components/Sponsor';
import Mentorreg from './components/Mentorreg';
import Structure from './components/Structure';
import Contact from './components/Contact';
import Submitted from './components/Submitted';
import Test from './components/Test';
import Session from './components/Session';

class App extends Component {
render() {
	return (
	<Router basename={'/aptest'}>
		<div className="App">
		<Routes>
				<Route exact path='/' element={ <Home/> }></Route>
				<Route exact path='/login' element={ <Login/> }></Route>
				<Route exact path='/rules' element={ <Rules/> }></Route>
				<Route exact path='/mentorship' element={ <Mentorship/> }></Route>
				<Route exact path='/sector' element={ <Sector/> }></Route>
				<Route exact path='/incentive' element={ <Incentive/> }></Route>
				<Route exact path='/sponsor' element={ <Sponsor/> }></Route>
				<Route exact path='/structure' element={ <Structure/> }></Route>
				<Route exact path='/mentor/register' element={ <Mentorreg/> }></Route>
				<Route exact path='/contact' element={ <Contact/> }></Route>
				<Route exact path='/submitted' element={ <Submitted/> }></Route>
				<Route exact path='/signup' element={ <Test/> }></Route>
				<Route exact path='/session' element={ <Session/> }></Route>
				
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
