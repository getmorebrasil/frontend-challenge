import { IMAGES } from "../../../constants";
import { Container } from "./styles";
import { LogoProps } from "../../../libs/types/atoms";
import { useHistory } from "react-router-dom";
import { useTheme } from "../../../hooks";

const Logo: React.FC<LogoProps> = ({ size }) => {
  const history = useHistory();
  const { theme } = useTheme();

  return (
    <Container size={size} onClick={() => history.push("/")}>
      <img
        src={theme.name === "light" ? IMAGES.darkLogo : IMAGES.logo}
        alt="getmovies Logo"
      />
    </Container>
  );
};

export default Logo;
