import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormPage from './components/Form/Submit';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Info from './components/Info/Info';

function App() {
	return (
		<div className='app'>
			<Router>
				<Nav />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/form' component={FormPage} />
					<Route path='/info' component={Info} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
