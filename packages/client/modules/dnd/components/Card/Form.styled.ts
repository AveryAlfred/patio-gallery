import styled from 'styled-components';

export const StyledForm = styled.form`
  display: grid;
  justify-content: center;
  height: 90%;

  label {
    color: ${(props) => props.theme.palette.outline.dark};
    background-color: ${(props) => props.theme.palette.backdrop.item};
    font-size: 0.45rem;
    letter-spacing: 0.5px;
    /* outline: 1px solid black; */

    display: flex;
    width: min-content;
    position: relative;

    top: 0.25rem;
    /* left: 0.25rem; */
    margin-left: 0.25rem;
    padding: 0 0.1rem;
    /* border-radius: 1rem; */
  }
`;

export const StyledInput = styled.input`
  width: 100px;
  padding: 0.25rem 0.25rem;

  border-radius: 0.25rem;
  border-width: 1px;

  font-size: 0.5rem;
  border: 1px solid #e9e6e6;

  font-family: inherit;

  ::selection {
    background: #e9e0e0 !important;
    /* background: none !important; */
    /* text-decoration: underline #dacecd 2px !important; */
  }

  /* input ~ span {
    transition: top 0.7s ease;
    position: absolute;
    top: 20px;
  } */

  &:hover {
    border: 1px solid #cac7c7;
  }
  &:focus {
    border: 1px solid #9e9e9e;
    outline: none;
  }
`;
