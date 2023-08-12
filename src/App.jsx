import React from "react";
import TopNav from "./Components/TopNav";
import Featured from "./Components/Featured";
import TopPicks from "./Components/TopPicks";
import Meal from "./Components/Meal";
import Categories from "./Components/Categories";
import NeawsLetter from "./Components/NeawsLetter";
import Footer from "./Components/Footer";
function App() {
	return (
		<>
			<TopNav />
			<Featured />
			<TopPicks />
			<Meal />
			<Categories />
			<NeawsLetter />
			<Footer />
		</>
	);
}

export default App;
