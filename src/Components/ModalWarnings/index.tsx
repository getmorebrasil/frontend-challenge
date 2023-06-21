import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

import { Modal, Box, Typography, IconButton } from '@material-ui/core';

import { Container } from './style';

export const ModalWarnings: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <Modal open={!isClosed}>
      <Container>
        <Box id="header-modal">
          <Typography variant="h4">Avisos</Typography>
          <IconButton type="button" onClick={() => setIsClosed(true)}>
            <AiFillCloseCircle size={25} />
          </IconButton>
        </Box>
        <Box id="text-content">
          <Typography variant="body1" gutterBottom>
            A API, por ser uma versão gratuita, limita a quantidade de
            requisições geradas a partir deste site, caso o site não carregue as
            informações, aguardar 1 minuto e recarregar novamente.
          </Typography>

          <Typography variant="body1" gutterBottom>
            Logos dos clubes, qualidade das logos, tempo de carregamento e
            veracidade das informações é tudo de inteira responsabilidade dos
            desenvolvedores da API:{' '}
            <a href="https://www.football-data.org" target="_blank">
              https://www.football-data.org
            </a>
            .
          </Typography>
        </Box>
      </Container>
    </Modal>
  );
};

export default ModalWarnings;
