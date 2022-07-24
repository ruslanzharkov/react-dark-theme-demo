import { 
    StyledCardContainer, 
    StyledImage, 
    StyledInfoContainer,
    StyledTitle,
    StyledDescription
} from './Card.styled';

export const Card = ({imgSrc, title, description}) => {
    return (
        <StyledCardContainer>
            <StyledImage src={imgSrc} alt="background image of the card" />
            <StyledInfoContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{description}</StyledDescription>
            </StyledInfoContainer>
        </StyledCardContainer>
    )
}
