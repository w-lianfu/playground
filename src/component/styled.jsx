import {
	Link
} from 'react-router-dom';
import styled from 'styled-components';

let white = '#fff';
let orangered = 'orangered';
let btnBg = 'rgb(0, 188, 212)';
let mainBlack = '#3d464d';

const BackButton = styled.button`
  background: ${orangered};
  width: 14rem;
  height: 3rem;
  color: ${white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyButton = styled.button`
	background: ${btnBg};
	color: ${mainBlack};
	width: 10rem;
	height: 3rem;
`;

export {
	BackButton,
	MyButton
}
