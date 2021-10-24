import { Button, CardActions, Box, CardProps } from '@material-ui/core';

import { Container } from './style';

interface CompetitionCardProps extends CardProps {
  image: string;
  alt: string;
  textButton: string;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  image,
  alt,
  textButton,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Button id="external-button">
        <img src={image} alt={alt} />
        <CardActions>
          <Box id="internal-button">{textButton}</Box>
        </CardActions>
      </Button>
    </Container>
  );
};

export default CompetitionCard;
