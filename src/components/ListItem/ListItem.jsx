import React from "react";
import s from "./style.module.css";

const ListItem = (props) => {
	const { title, img, id, takeIdBeer } = props;

	// function to get the beer id
	const selectIdBeer = () => {
		takeIdBeer(id);
	};

	return (
		<li className="nav-item py-3">
			<div className="d-flex gap-3 align-items-center">
				<figure className={s.imgThumbnail} onClick={selectIdBeer}>
					<img src={`./images-data/${img}`} alt="beer item" className={s.img} />
				</figure>

				<span className="h6 d-flex text-light align-items-center">{title}</span>
			</div>
			<hr />
		</li>
	);
};

export default ListItem;
