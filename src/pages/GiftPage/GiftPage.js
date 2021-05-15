import Product from '../NecklacePendantPage/Product/Product';
import './GiftPage.css';
import { Fade } from 'react-awesome-reveal';
import SEO from '../../shared/components/SEO/SEO';

function GiftPage() {
	return (
		<div className="giftPage">
			<SEO title="Explore All Categories" />
			<div className="giftPage__details">
				<Fade triggerOnce direction="left">
					<div className="giftPage__detailsSecond">
						<img src="https://i.frg.im/69VcjDzz/32-17701c22_600.jpg?v=1516374670.427" alt="" />
					</div>
				</Fade>	
				<div className="giftPage__detailsFirst">
					<Fade triggerOnce direction="right">
						<h1>THE PERFECT GIFT</h1>
						<p>
							There is no perfect time to celebrate your loved ones with your finest jewelry build on a legacy of over
							many years of craftsmanship. Our products range from necklaces & pendants, bracelets, rings and more.
						</p>
						<p>
							We are the leading suppliers of the highest quality rough and cut-and-polished gem stones for both locally
							and internationally
						</p>
						<div className="giftPage__detailsFirstButtons">
							<a href="#otherProducts">
								<button>VIEW PRODUCTS</button>
							</a>
							<a href="/contactus">
								<button>CALL US</button>
							</a>
						</div>
					</Fade>	
				</div>
			</div>

			<div id="otherProducts" className="giftPage__otherGems">
				<Fade cascade>
					<div className="giftPage__otherGemsRow">
						<Product img="homepage category/necklace.png" name="Necklaces & Pendants" viewMoreUrl="/necklace+pendants" />
						<Product img="homepage category/earrings.png" name="Earrings" viewMoreUrl="/" />
						<Product img="homepage category/rings.png" name="Rings" viewMoreUrl="/" />
						<Product img="homepage category/bracelets.png" name="Bracelets" viewMoreUrl="/" />
					</div>
					{/* Place New products in each div, keeping a max of 4 per row */}
					<div className="giftPage__otherGemsRow">
						<Product img="homepage category/forever-knot.png" name="Forever Knot" viewMoreUrl="/" />
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default GiftPage;
