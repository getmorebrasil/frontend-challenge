import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../../Components/Header';
import Main from '../../Components/_ComponentsId/Main';
import Modals from '../../Components/_ComponentsId/Modals';

import getCompetitionName from '../../utils/getCompetitionName';

import { Container } from '../../styles/pages/CompetitionPage';

const CompetitionPage: React.FC = () => {
  const { query } = useRouter();

  return (
    <>
      <Head>
        <title>getmoreSports - {getCompetitionName(String(query.id))}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />

        <Main />

        <Modals />
      </Container>
    </>
  );
};

export default CompetitionPage;
