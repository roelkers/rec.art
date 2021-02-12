import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.theme.colors.primaryLight};
  width: 15rem;
  height: 3rem;
  border-radius: 3rem;
  border: none;
  color: #eeeeff;
  box-shadow: 0 0.25rem 0.5rem ${props => props.theme.colors.primaryLight};
  margin-top: auto;
  margin-left: 1rem;
`