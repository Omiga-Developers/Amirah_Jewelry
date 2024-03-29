import { Fade } from 'react-awesome-reveal'
import SEO from '../../shared/components/SEO/SEO';
import OtherProducts from './other-products/OtherProducts';
import { ringData } from './ringData';
import './RingsPageMain.css'

const RingsPageMain = () => {
	return (
		<div>
			<SEO title="Amirah - Rings" />
			<div class="rings-page-main__banner">
				<img src="banners/RINGS.jpg" width="100%" alt="rings-banner" />
			</div>
			<div className="rings-page-main__rings">
				<Fade cascade>
					<div>
						{ringData.map((ring) => (
							<Fade cascade>
								<OtherProducts key={ring.id} img={ring.images[0]} name={ring.title} viewMoreUrl={`/rings/` + ring.id} />
							</Fade>
						))}
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default RingsPageMain
