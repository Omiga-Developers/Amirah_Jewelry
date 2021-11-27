import styled from 'styled-components';

const EarringsPage = () => {
  const EARRINGS_BANNER = 'banners/EARRINGS.jpg';

  return (
    <Container>
      <img src={EARRINGS_BANNER} alt="earring-banner" />
    </Container>
  );
}

export default EarringsPage;

const Container = styled.div `
  > img {
    width: 100%;
  }
`;