import styled from 'styled-components';

export const Synthetics = ({ syntheticDetails }) => {
	return (
		<Container>
			<h2>SYNTHETICS</h2>
			<p>{syntheticDetails}</p>
			<hr />
		</Container>
	);
}

const Container = styled.div `
	> h2 {
		font-size: 18px;
		margin: 30px 0 8px 0;
	}

	> p {
		font-size: 14px;
		margin: 0 0 30px 0;
	}

	> hr {
		width: 60%;
		border-width: 5px;
		border-bottom: none;
		border-right: none;
		border-left: none;
		border-color: #db8932;
	}

	@media screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		> h2 {
			font-size: 1.2rem;
			text-align: center;
		}

		> p {
			text-align: center;
		}
	}
`;
