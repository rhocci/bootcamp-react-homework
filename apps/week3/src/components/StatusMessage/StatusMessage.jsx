import { createPortal } from 'react-dom';
import styled from 'styled-components';
import igglybuff from '../../assets/images/igglybuff.webp';
import lickitung from '../../assets/images/lickitung.webp';

export const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.3rem;
  text-align: center;
`;

const STATUS = {
  loading: {
    img: igglybuff,
    message: '로딩 중 . . .',
  },
  empty: {
    img: lickitung,
    message: '이런! 검색 결과가 없습니다.',
  },
};

export default function StatusMessage({ status }) {
  const { img, message } = STATUS[status];

  return createPortal(
    <StyledMessage>
      <img src={img} alt="" />
      <strong>{message}</strong>
    </StyledMessage>,
    document.getElementById('message')
  );
}

export function DefaultStatusMessage({ status }) {
  const { img, message } = STATUS[status];

  return (
    <StyledMessage>
      <img src={img} alt="" />
      <strong>{message}</strong>
    </StyledMessage>
  );
}
