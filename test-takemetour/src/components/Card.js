import React from 'react';
import styled from 'styled-components';

const Card = () => {
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 250px;
    height: 250px;
    background-color: #c4b2a9;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  `;
  return <div />;
};

export default Card;
