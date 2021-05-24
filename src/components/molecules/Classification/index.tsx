import { Container } from "./styles";
import { Stars } from "../../molecules";
import { ClassificationProps } from "../../../libs/types/molecules";

const Classification: React.FC<ClassificationProps> = ({
  classification,
  starsSize,
}) => {
  return (
    <Container>
      <p>Classification</p>
      <Stars classification={classification} size={starsSize} />
    </Container>
  );
};

export default Classification;
