import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
`;

export const Main = () => {
    return (
        <Container>
            <StyledText>Main</StyledText>
        </Container>
    )
};

export const Search = () => {
    return (
        <Container>
            <StyledText>Search</StyledText>
        </Container>
    )
};

export const Closet = () => {
    return(
        <Container>
            <StyledText>Closet</StyledText>
        </Container>
    )
};
