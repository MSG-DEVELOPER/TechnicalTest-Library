import {
  CardWrapper,
  Cover,
  GenreText,
  Title,
  Author,
} from "./Card.style";

function Card ({ title, genre, cover, author }) {




  return (
    <CardWrapper>
    
      <Cover src={cover} alt={title} />
      <GenreText>{genre}</GenreText>
      <Title>{title}</Title>
      <Author>{author}</Author>
    </CardWrapper>
  );
}

export default Card
