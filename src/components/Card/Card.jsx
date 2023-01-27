import React from "react";
import s from "./style.module.css";

const Card = ({ beerInfo }) => {
	const { name, country, brewery, type, abv, notes, img } = beerInfo;
	return (
		<div className="card bg-transparent">
			<div className={s.cardGlass}>
				<div className="row g-0">
					<div className="col-md-6">
						<div className={s.imgContainer}>
							<img
								src={`./public/images-data/${img}`}
								className={s.cardImg}
								alt="beer image"
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="card-body py-5">
							<h5 className="card-title text-center">{name}</h5>
							<p className="card-text">Country : {country}</p>
							<p className="card-text">Brewery : {brewery}</p>
							<p className="card-text">Type : {type}</p>
							<p className="card-text">Abv : {abv} %</p>
							<p className="card-text">Tasting Notes : {notes}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
