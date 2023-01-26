import React from "react";
import s from "./style.module.css";

const ListItem = ({ title }) => {
	return (
		<li className="nav-item py-3">
			<div className="d-flex gap-3 align-items-center">
				<div className={s.imgThumbnail}>
					<img
						src="./public/images-data/orval-beer.jpeg"
						alt="beer item"
						className={s.img}
					/>
				</div>
				<p className="h6 d-flex text-light align-items-center">{title}</p>
			</div>
		</li>
	);
};

export default ListItem;
