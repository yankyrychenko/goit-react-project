import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const FallBackContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FallBack = () => {
  return (
    <FallBackContainer>
      <Loader type="Oval" color="#ff751d" />;
    </FallBackContainer>
  );
};

export default FallBack;
