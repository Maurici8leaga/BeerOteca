import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import s from "./style.module.css";
import { BEER_DATA } from "./api/data";

const App = () => {
	// set state for beer selected
	const [beerData, setBeerData] = useState("");

	const findElementById = (id, array) => {
		return array.find((element) => element.id === id);
	};

	// function to take the id of choice beer
	const takeIdBeer = (id) => {
		const beerSelected = findElementById(id, BEER_DATA);
		setBeerData(beerSelected);
	};

	return (
		<div className={s.app}>
			<div className="container">
				<Navbar
					data={BEER_DATA}
					takeIdBeer={takeIdBeer}
					setBeerData={setBeerData}
				/>
				<main className="row justify-content-center">
					<header
						className={s.header}
						style={{
							padding: beerData ? `100px 0 50px 0` : `350px 0 50px 0`,
						}}
					>
						<h1 className={s.title}>Welcome to BeerOteca</h1>

						<p className="h5 pb-4">
							Where you can learn all about you favorite beer
						</p>

						<button
							type="button"
							className="btn btn-outline-light"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
						>
							Search for a beer
						</button>
					</header>

					<section>{beerData && <Card beerInfo={beerData} />}</section>
				</main>
			</div>
		</div>
	);
};

export default App;
