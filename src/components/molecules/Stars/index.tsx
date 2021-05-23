import { useCallback } from "react";
import { Container } from "./styles";
import { Star } from "../../atoms";
import { StarProps, StarsProps } from "../../../libs/types/atoms";

const Stars: React.FC<StarsProps> = ({ size, classification }) => {
  const getStarsByClassification = useCallback((): StarProps["type"][] => {
    const fiveAverageClassification = classification / 2;

    const result = [1, 2, 3, 4, 5].map((current) => {
      const currentVariableValue = fiveAverageClassification - current;
      console.log(currentVariableValue);

      if (currentVariableValue >= 0) return "full";
      if (currentVariableValue > -1) return "half";

      return "nothing";
    });

    return result;
  }, [classification]);

  return (
    <Container size={size}>
      {getStarsByClassification().map((type: string, index) => (
        <Star key={type + index} type={type as StarProps["type"]} />
      ))}
    </Container>
  );
};

export default Stars;
