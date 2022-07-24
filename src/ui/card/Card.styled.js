import styled from 'styled-components';

export const StyledCardContainer = styled.div`
    width: 350px;
    height: fit-content;
    background: ${({ theme }) => theme.card.background};
    box-shadow: 0px 0px 14px 0px rgba(34, 60, 80, 0.2);
    border-radius: 20px;
`;

export const StyledImage = styled.img`
    width: inherit;
    object-position: top;
    object-fit: cover;
    height: 200px;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
`;

export const StyledInfoContainer = styled.div`
    height: fit-content;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    padding: 0 30px 10px;
    color: ${({ theme }) => theme.card.text};
`;

export const StyledTitle = styled.h3`
    text-align: left;
`;

export const StyledDescription = styled.p`
    text-align: left;
    line-height: 20px;
`;

