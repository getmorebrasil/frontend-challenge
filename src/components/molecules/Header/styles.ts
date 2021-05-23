import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 5rem;

  background: ${({ theme }) =>
    theme.name === 'light' ? theme.colors.contrastColor : theme.colors.darkNeutralColor};
`;

export const GroupActions = styled.section`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & > svg {
    filter: brightness(0.7);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      filter: brightness(1);
    }
  }
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-right: 0.8rem;

  & > label {
    display: block;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.9rem;
    margin-right: 0.8rem;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 50px;
    height: 20px;
    padding: 3.6px;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in;

    background: ${({ theme }) =>
      theme.name === 'light' ? theme.colors.primary : theme.colors.secondary};

    & > div {
      width: 26px;
      height: 12px;
      border-radius: 1rem;
      transition: all 0.3s ease-in;

      background: ${({ theme }) =>
        theme.name === 'light' ? theme.colors.contrastColor : theme.colors.neutralColor};
    }
  }
`;
