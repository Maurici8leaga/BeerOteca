import React from "react";
import ListItem from "../ListItem/ListItem";
import s from "./style.module.css";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-dark bg-transparent fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						BeerOteca
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="offcanvas"
						data-bs-target="#offcanvasNavbar"
						aria-controls="offcanvasNavbar"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="offcanvas offcanvas-end bg-transparent"
						tabIndex="-1"
						id="offcanvasNavbar"
						aria-labelledby="offcanvasNavbarLabel"
					>
						<div className={s.glass}>
							<div className="offcanvas-header">
								<h5
									className="offcanvas-title text-light"
									id="offcanvasNavbarLabel"
								>
									BEER LIST
								</h5>
								<button
									type="button"
									className="btn-close btn-close-white"
									data-bs-dismiss="offcanvas"
									aria-label="Close"
								></button>
							</div>
							<div className="offcanvas-body">
								<ul className="navbar-nav flex-grow-1 pe-3">
									<ListItem title="Orval" />
									<ListItem title="La Chouffe (Blonde)" />
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
