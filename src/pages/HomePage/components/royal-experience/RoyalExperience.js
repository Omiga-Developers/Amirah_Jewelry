import React from 'react';
import './RoyalExperience.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Fade } from 'react-awesome-reveal';

function RoyalExperience() {
	return (
		<div className="homePage__middleSection">
			<Fade triggerOnce style={{ display: 'flex', width: '100%' }}>
				<div className="homePage__middleSectionTitle">
					THE ROYAL EXPERIENCE
				</div>
			</Fade>
			<Fade direction="down" delay={100} triggerOnce>
				<div className="homePage__middleSectionMiddleContainer">
					<div>
						<RoomServiceIcon />
						<p>AMIRAH AT YOUR SERVICE</p>
						<p className="homePage__middleSectionMiddleContainerDesc">
							Our customer service
							experts are always here to
							help you
						</p>
					</div>
					<div>
						<CalendarTodayIcon />
						<p>BOOK AN APPOINTMENT</p>
						<p className="homePage__middleSectionMiddleContainerDesc">
							We are happy to help you
							in-store or virtual
							appointments
						</p>
					</div>
					<div>
						<MonetizationOnIcon />
						<p>EASY PAYMENT</p>
						<p className="homePage__middleSectionMiddleContainerDesc">
							We provide easy payment
							facilities at your convience
						</p>
					</div>
				</div>
			</Fade>
		</div>
	);
}

export default RoyalExperience;
