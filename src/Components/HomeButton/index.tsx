import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

import { Container, HomeButton as StyledButton } from './style';

export const HomeButton: React.FC = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <StyledButton>
            <AiFillHome />
          </StyledButton>
        </a>
      </Link>
    </Container>
  );
};

export default HomeButton;
