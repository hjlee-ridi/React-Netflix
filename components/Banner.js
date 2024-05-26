import { Link } from "react-router-dom"
import './Banner.css';

function Banner(props) {
	return (
		<div className="BgImg">
			<Link to={`/Netflix/${props.id}`}>
				
			<div class="Bannercontainer">
        		<img src={props.image} alt={props.title} class="Bannerimage" />
				<h3 className="Bannertitle">{props.title}</h3>
				<p className="BannerExplanation">{props.overview}</p>
    		</div>

			</Link>
		</div>
	);
}

export default Banner;
