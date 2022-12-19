import { Link } from "react-router-dom"

function Banner(props) {
	return (
		<div>
		<Link to={`/Netflix/${props.id}`}>
		<div 	
			style={{
				background: `linear-gradient(to bottom,rgba(0,0,0,0)
			39%,rgba(0,0,0,0)
			41%,rgba(0,0,0,0.65)
			100%),
			url(${props.image}), #1c1c1c`,
				height: '100vh',
				backgroundSize: '100%,cover',
				width: '100%',
				position: 'relative'
			}}
		>
			
			<div>
				<div
					style={{
						position: "absolute",
						maxWidth: "1000px",
						margin: "200px",
						bottom: "20px",
						marginLeft: '150px',
						fontSize: '32px'
					}}
				>

					<h2  style={{ color: "white" }}> {props.title}</h2>

					
				</div>
			</div>
		</div>
		</Link>
		</div>
	);
}

export default Banner;
