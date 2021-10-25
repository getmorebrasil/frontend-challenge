import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

import { Modal, Box, Typography } from '@material-ui/core';

import { Container } from './style';

interface ModalErrorRequisitionProps {
  isValidId: boolean;
}

export const ModalErrorRequisition: React.FC<ModalErrorRequisitionProps> = ({
  isValidId,
}) => {
  return (
    <Modal open>
      <Container>
        <Box id="header-modal">
          <Typography variant="h4">Ooops!</Typography>
        </Box>

        <Box id="requisition-error-inside-container">
          <img
            src={!isValidId ? '/assets/redCard.jpg' : '/assets/yellowCard.jpg'}
            alt={!isValidId ? 'Cartão Vermelho' : 'Cartão Amarelo'}
          />
          <Box id="requisition-error-content">
            <Typography variant="h4">
              {!isValidId
                ? 'ID Inválido!'
                : 'Limite de requisições atingido, tente em instantes.'}
            </Typography>

            <Link href="/">
              <Typography variant="h5">
                <AiFillHome />
                Voltar a tela inicial
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
};

export default ModalErrorRequisition;
