import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const NotFoundHeading = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const NotFoundText = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
`;

const NotFoundLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
`;

export const NoFOundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundHeading>404 - Page not found</NotFoundHeading>
      <NotFoundText>
        Sorry, the page you are looking for might be in another castle.
      </NotFoundText>
      <NotFoundLink to="/">Go back to Home</NotFoundLink>
    </NotFoundContainer>
  );
};
