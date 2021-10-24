import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const bottomFromTopAnimation = keyframes`
  0% {
    bottom: -200px;
    opacity: 0.5;
  }

  100% {
    bottom: 30px;
    opacity: 1;
  }
`;

export const Container = styled.div`
  height: 100vh;

  position: absolute;
  left: 0;
  top: 0;
`;

export const HomeButton = styled.button`
  position: fixed;
  left: 10px;
  bottom: 30px;

  border: 0;

  border-radius: 50%;

  width: 60px;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  font-size: 40px;

  animation-name: ${bottomFromTopAnimation};
  animation-duration: 2s;

  transition: all 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    background: ${({ theme }) => shade(0.2, theme.colors.primary)};
  }
`;
