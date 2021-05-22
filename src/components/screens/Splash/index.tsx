import ClipLoader from "react-spinners/ClipLoader";

import { useTheme } from "../../../hooks";
import { Container } from "./styles";

const Splash: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Container>
      <ClipLoader size={80} color={theme.colors.neutralColor} />
    </Container>
  );
};

export default Splash;
