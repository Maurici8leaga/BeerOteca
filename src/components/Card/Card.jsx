import React from "react";
import s from "./style.module.css";

const Card = () => {
	return (
		<div className="card bg-transparent">
			<div className={s.cardGlass}>
				<div className="row g-0">
					<div className="col-md-6">
						<div className={s.imgContainer}>
							<img
								src="./public/images-data/orval-beer.jpeg"
								className={s.cardImg}
								alt="beer image"
							/>
						</div>
					</div>
					<div className="col-md-6">
						<div className="card-body py-5">
							<h5 className="card-title text-center">Beer title</h5>
							<p className="card-text">Country :</p>
							<p className="card-text">Brewery : </p>
							<p className="card-text">Type : </p>
							<p className="card-text">Abv : </p>
							<p className="card-text">
								Tasting Notes : This is a wider card with supporting text below
								as a natural lead-in to additional content. This content is a
								little bit longer.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
