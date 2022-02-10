import { Dnd } from 'modules/dnd/components/Dnd';
import * as s from './HomeView.styled';

export const HomeView = () => {
  return (
    <s.StyledWrap onContextMenu={(e) => e.preventDefault()}>
      
      <s.StyledHeader>
        <s.StyledTextLinks>
          <s.StyledAbout>Patio Gallery</s.StyledAbout>
          <s.StyledLogin>Login</s.StyledLogin>
        </s.StyledTextLinks>
      </s.StyledHeader>
      <s.StyledMain>
        <Dnd />
      </s.StyledMain>
    </s.StyledWrap>
  );
};
