import { Link } from 'react-router-dom';
import Gem from '../Gem/Gem';
import './GemStonesMain.css';

function GemStonesMain() {
	return (
		<div className="gemStonesMain">
			<div className="gemStonesMain__details">
				<div className="gemStonesMain__detailsFirst">
					<h1>HIGH QUALITY SAPPHIRE STONES</h1>
					<p>
						We are the best known for the provision of the Highest Quality Sri Lankan gemstones and for sourcing
						specific high quality stones upon customers request.
					</p>
					<p>
						We are the leading suppliers of the highest quality rough and cut-and-polished gem stones for both locally
						and internationally
					</p>
					<div className="gemStonesMain__detailsFirstButtons">
						<Link to="/blue+sapphires">
							<button>VIEW PRODUCTS</button>
						</Link>
						<button>CALL US</button>
					</div>
				</div>
				<div className="gemStonesMain__detailsSecond">
					<img src="https://images-aka.kay.com/kay/gemstone/blue-gems/blue-stone-names.jpg" alt="" />
				</div>
			</div>

			<div className="gemStonesMain__otherGems">
				<div className="gemStonesMain__otherGemsRow">
					<Gem img="gems/teal-sapphire.png" name="Teal Sapphires" viewMoreUrl="/teal+sapphires" />
					<Gem img="gems/purple-sapphire.png" name="Purple Sapphires" viewMoreUrl="/purple-sapphire" />
					<Gem img="gems/Padparadscha-sapphire.png" name="Padparadscha Sapphires" viewMoreUrl="/padparadscha-sapphire" />
					<Gem img="gems/orange-sapphire.png" name="Orange Sapphires" viewMoreUrl="/orange-sapphire" />
				</div>
				{/* <div className="gemStonesMain__otherGemsRow">
					<Gem img="gems/Padparadscha-sapphire.png" name="Padparadscha Sapphires" viewMoreUrl="/padparadscha-sapphire" />
					<Gem img="gems/orange-sapphire.png" name="Orange Sapphires" viewMoreUrl="/orange-sapphire" />
				</div> */}
				<div className="gemStonesMain__otherGemsRow">
					<Gem img="gems/ClaudiaHamann_PinkSapphire_Ceylon_Cushion_Unheated.png" name="Pink Sapphires" viewMoreUrl="/pink-sapphire" />
					<Gem img="gems/white-sapphire.png" name="White Sapphires" viewMoreUrl="/white+sapphires" />
				</div>
			</div>
		</div>
	);
}

export default GemStonesMain;
