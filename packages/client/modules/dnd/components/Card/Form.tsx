import { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledForm } from 'modules/dnd/components/Card/Form.styled';

export const Form = ({children}: {children: ReactNode}) => {
  return (
    <StyledForm data-no-dnd="true">
      {children}
    </StyledForm>
  )
}

