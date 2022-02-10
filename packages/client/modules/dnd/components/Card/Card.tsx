import { useState } from 'react';
import styled from 'styled-components';

import { Plant } from 'modules/plants/utils/PlantData';
import { CardOverview } from './CardOverview';
import { CardInfo } from 'modules/dnd/components/Card/CardInfo';
import { CardSnap } from 'modules/dnd/components/Card/CardSnap';
import { CardGallery } from 'modules/dnd/components/Card/CardGallery';
import { CardMenu } from 'modules/dnd/components/Card/CardMenu';


export const Card = ({ value }: { value: Plant }) => {
  const { id, info, events } = value;
  
  const [view, setView] = useState(0);

  return (
    <StyledWrap >
      {view === 0 && <CardOverview value={value} setView={setView} />}
      {view === 1 && <CardInfo value={value} setView={setView} />}
      {view === 2 && <CardSnap value={value} setView={setView} />}
      {view === 3 && <CardGallery value={value} setView={setView} />}
      {view === 4 && <CardMenu value={value} setView={setView} />}
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  background-color: ${(props) => props.theme.palette.backdrop.item};
  outline: 1px solid ${(props) => props.theme.palette.outline.light};

  width: 110px;
  height: 110px;

  display: grid;
  position: relative;
  font-size: 0.5rem;
  border-radius: 0.25rem;
`;
