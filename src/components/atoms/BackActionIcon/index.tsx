import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { IMAGES } from "../../../constants";
import { Container } from "./styles";

const BackActionIcon: React.FC = () => {
  const history = useHistory();

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container
      src={IMAGES.backIcon}
      alt="Voltar para página anterior"
      onClick={handleBack}
    />
  );
};

export default BackActionIcon;
