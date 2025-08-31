import styled from "styled-components";

const StyledModal = styled.modal``;

export default function Modal({children}){
  return <StyledModal>{children}</StyledModal>
}