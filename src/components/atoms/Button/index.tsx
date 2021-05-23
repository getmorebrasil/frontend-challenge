import ClipLoader from "react-spinners/ClipLoader";
import { useTheme } from "../../../hooks";
import { IButtonProps } from "../../../libs/interfaces/atoms";
import { Container } from "./styles";

const Button: React.FC<IButtonProps> = ({ handleAction, isLoading, text }) => {
  const { theme } = useTheme();

  return (
    <Container onClick={handleAction}>
      <h3>{text}</h3>
      {isLoading && <ClipLoader size={20} color={theme.colors.neutralColor} />}
    </Container>
  );
};

export default Button;
