import styled from "styled-components";
import { centerFlexContainer } from "../../../styles/global";

export const Container = styled.main`
  ${centerFlexContainer};
  min-height: calc(100vh - 60px);

  color: ${({ theme }) => theme.colors.secondary };
`;
