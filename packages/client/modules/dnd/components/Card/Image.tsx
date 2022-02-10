import { useState } from 'react';
import styled from 'styled-components';

export const Image = ({ image }: { image: string }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle && <StyledLargeImg src={image}></StyledLargeImg>}

      <StyledWrap onClick={() => setToggle(() => (toggle ? false : true))}>
        <img src={image} />
      </StyledWrap>
    </>
  );
};

const StyledWrap = styled.div`
  cursor: pointer;
  border-radius: 2rem;
`;

const StyledLargeImg = styled.img``;

const StyledSmallImg = styled.img`
  border-radius: 2rem;
`;
