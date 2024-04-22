import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import About from './About/About';
import Career from './Career/Career';
import Abilities from './Abilities/Abilities';
import Projects from './Projects/Projects';
import Home from './Home/Home';
import Footer from './Footer/Footer';

function App() {
	return (
		<div className="App">
			<Header />
			<Sidebar />
			<main>
				<Home />
				<About />
				<Career />
				<Abilities />
				<Projects />
			</main>
			<Footer />
		</div>
	);
}

export default App;
