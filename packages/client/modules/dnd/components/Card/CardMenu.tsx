import { Plant } from 'modules/plants/utils/PlantData';
import styled from 'styled-components';
import * as s from './CardMenu.styled';

export const CardMenu = ({
  value,
  setView,
}: {
  value: Plant;
  setView: Function;
}) => {
  const { id, info, events } = value;

  return (
    <s.StyledWrap data-no-dnd="true" onContextMenu={() => setView(() => 0)}>
      <s.StyledButton onClick={() => setView(() => 2)}> Snap </s.StyledButton>
      <s.StyledButton onClick={() => setView(() => 3)}>Gallery</s.StyledButton>
      <s.StyledButton onClick={() => setView(() => 1)}> Info </s.StyledButton>
      <s.StyledButton> Delete </s.StyledButton>
      {/* <Design >{info.name} </Design> */}
    </s.StyledWrap>
  );
};
