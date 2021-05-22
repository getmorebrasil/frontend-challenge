import styled from "styled-components";
import { centerFlexContainer } from "../../../styles/global";

export const Container = styled.main`
  ${centerFlexContainer};

  color: ${({ theme }) => theme.colors.secondary };
`;
