import {
	Link
} from 'react-router-dom';
import styled from 'styled-components';

let white = '#fff';
let orangered = 'orangered';

const BackButton = styled.button`
  background: ${orangered};
  width: 14rem;
  height: 3rem;
  color: ${white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
	BackButton
}
