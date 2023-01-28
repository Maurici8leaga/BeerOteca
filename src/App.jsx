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
						// para darle un css condicional usamos el state para poder crear la condicionn, los valores se deben colocar
						// en backticks `` si no toma los valores
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
					{/* si el state de beer tiene algo mostrara el card si no, sera vacio */}
					<section>{beerData && <Card beerInfo={beerData} />}</section>
				</main>
			</div>
		</div>
	);
}

export default App;
