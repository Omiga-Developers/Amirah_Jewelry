import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import SEO from '../../../shared/components/SEO/SEO';
import { AboutGem } from './components/AboutGem';
import { BirthStonesAnniversary } from './components/BirthStonesAnniversary';
import { GemStatistics } from './components/GemStatistics';
import { GemTitle } from './components/GemTitle';
import { Imitations } from './components/Imitations';
import { Synthetics } from './components/Synthetics';
import { Treatments } from './components/Treatments';
import { WhyWeLoveGemStone } from './components/WhyWeLoveGemStone';

const GemDetailPage = ({ data }) => {
  const gemTitle = data.title[0].toUpperCase() + data.title.substring(1).toLowerCase();

  return (
    <Container>
      <SEO title={`Amirah - ${gemTitle} Details`} />
      <section>
        <GemTitle
          id={data.id}
          title={data.title}
          titleText={data.titleText}
          titleImage={data.titleImage}
        />
      </section>
      <section>
        <main>
          <Fade direction="left" cascade triggerOnce>
            <AboutGem
              aboutName={data.aboutName}
              aboutDescriptionArray={data.aboutDescriptionArray}
              aboutImage={data.aboutImage}
            />
            <BirthStonesAnniversary birthStoneDetails={data.birthStoneDetails} />
            <Treatments treatmentsDetails={data.treatmentsDetails} />
            <Synthetics syntheticDetails={data.syntheticDetails} />
            <Imitations imitationsDetails={data.imitationsDetails} />
          </Fade>
        </main>
        <main>
          <Fade direction="right" triggerOnce>
            <GemStatistics
              moreDetails={data.moreDetails}
              factsInformation={data.factsInformation}
            />
          </Fade>
        </main>
      </section>
      <section>
        <WhyWeLoveGemStone whyWeLoveGemStone={data.whyWeLoveGemStone} />
      </section>
    </Container>
  );
}

export default GemDetailPage;

const Container = styled.div`
  font-family: santral;
  background-color: #f4ebe2;

  > section {
    :nth-child(2) {
      display: flex;

      > main {
        margin: 30px 20px;

        :first-child {
          flex: 0.65;
        }

        :last-child {
          flex: 0.35;
        }
      }
    }

    :last-child {
      padding: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    > section {
      :nth-child(2) {
        flex-direction: column;
      }
    }
  }
`;
