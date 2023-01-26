import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import s from "./style.module.css";
import { BEER_DATA } from "./api/data";

function App() {
	const [beerData, setBeerData] = useState("");

	const findElementById = (id, array) => {
		return array.find((element) => element.id === id);
	};

	const prueba = (item) => {
		// console.log(item, "esta escogiste");
		const beerSelected = findElementById(item, BEER_DATA);
		setBeerData(beerSelected);
		console.log(beerSelected, "esta");
	};

	return (
		<div className={s.app}>
			<div className="container">
				<Navbar data={BEER_DATA} funcion={prueba} />
				<div className="row justify-content-center">
					<div className={s.header}>
						<h1 className={s.title}>Welcome to BeerOteca</h1>
						<p className="h5">
							Where you can learn all about you favorite beer
						</p>
						<button
							type="button"
							className="btn btn-outline-light btn-sm"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
						>
							Search for a beer
						</button>
					</div>
					<div>
						{beerData && <Card beerInfo={beerData} />}
						{/* <Card beerInfo={beerData} /> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
