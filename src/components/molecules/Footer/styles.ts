import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-top: 34rem;
  padding: 0 5rem;

  & > p {
    font-size: 1.2rem;
  
    color: ${({ theme }) =>
      theme.name === 'light' ? theme.colors.darkNeutralColor : theme.colors.secondary};
  }

  background: ${({ theme }) =>
    theme.name === 'light' ? theme.colors.contrastColor : theme.colors.darkNeutralColor};
`;
