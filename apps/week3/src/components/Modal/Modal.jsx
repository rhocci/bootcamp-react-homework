import { createPortal } from 'react';
import styled from 'styled-components';

const StyledModal = styled.modal``;

export default function Modal({ children }) {
  return createPortal(
    <StyledModal>{children}</StyledModal>,
    document.getElementById('modal')
  );
}
