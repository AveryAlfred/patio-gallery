import { Plant } from 'modules/plants/utils/PlantData';
import styled from 'styled-components';
import * as s from './CardOverview.styled';

export const CardOverview = ({
  value,
  setView,
}: {
  value: Plant;
  setView: Function;
}) => {
  const { id, info, events } = value;

  return (
    <s.StyledWrap onContextMenu={() => setView(4)}>
      <s.StyledPhoto />
      <s.StyledLinkInfo>
        <s.StyledTitle> {info.name}</s.StyledTitle>
        <s.StyledText> {info.moniker}</s.StyledText>
        <s.StyledText> {info.taxa}</s.StyledText>
      </s.StyledLinkInfo>
    </s.StyledWrap>
  );
};
