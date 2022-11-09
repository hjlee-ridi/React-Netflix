import React from "react";
import { IMAGE_BASE_URL } from "./config";
import "./Banner.css";




function Banner(props) {
	return (
		<div style={{padding: '30px'}}>
		<div className="slider_item"
				
			style={{
				background: `linear-gradient(to bottom,rgba(0,0,0,0)
			39%,rgba(0,0,0,0)
			41%,rgba(0,0,0,0.65)
			100%),
			url(${props.image}), #1c1c1c`,
				height: '60vh',
				backgroundSize: '100%,cover',
				width: '100%',
				position: 'relative',
				top: '0'
		
			}}
		>
			
			<div>
				<div
					style={{
						position: "absolute",
						maxWidth: "500px",
						margin: "50px",
						bottom: "2rem",
						marginLeft: "2rem",
					}}
				>

					<h2 className="Banner_title" style={{ color: "white" }}> {props.title}</h2>
					
				</div>
			</div>
		</div>
		</div>
	);
}

export default Banner;
