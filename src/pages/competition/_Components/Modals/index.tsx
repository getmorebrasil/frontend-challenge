import { useContext } from 'react';
import CompetitionContext from '../../../../Context/CompetitionContext';
import { useRouter } from 'next/router';

import ModalWarnings from '../../../../Components/ModalWarnings';
import ModalErrorRequisition from '../../../../Components/ModalErrorRequisition';
import Loader from '../Loader';

import isValidId from '../../../../utils/isValidId';

import { Container } from './style';

const Modals: React.FC = () => {
  const { query } = useRouter();
  const { isLoadingEnd, isErrorRequest } = useContext(CompetitionContext);

  return (
    <Container>
      {isLoadingEnd && !isErrorRequest && <ModalWarnings />}

      {!isLoadingEnd && <Loader />}

      {isErrorRequest && (
        <ModalErrorRequisition isValidId={isValidId(String(query.id))} />
      )}
    </Container>
  );
};

export default Modals;
