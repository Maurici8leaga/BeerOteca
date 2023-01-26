import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import s from "./style.module.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className={s.app}>
			<div className="container">
				<Navbar />
				<div className="row justify-content-center">
					<div className={s.header}>
						<h1 className={s.title}>Welcome to BeerOteca</h1>
						<p className="h5">
							Where you can learn all about you favorite beer
						</p>
						<button
							type="button"
							class="btn btn-outline-light btn-sm"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasNavbar"
							aria-controls="offcanvasNavbar"
						>
							Search for a beer
						</button>
					</div>
					<div>
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
