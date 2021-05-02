import styled from 'styled-components';
import { device } from '../../theme/breakpoints';

interface ModalProps {
  show: boolean;
}

export const Backdrop = styled.div<ModalProps>`
	z-index: auto;
	display: ${({ show }) => (show ? 'flex' : 'none')};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width:100vw;
	background: rgba(0,0,0,0.5);
	overflow: auto;
	z-index: 20;
`;

export const ModalContainer = styled.div`
	max-height: 90%;
	margin: auto;
	width: 95%;
	@media ${device.sm} {
		width: 70%;
	}
	@media ${device.md} {
		width: 50%;
		max-width: 500px;
	}
`;

export const ModalContent = styled.div`
	background: #e2e2e2;
	width: 100%;
	height: auto;
	color: rgba(0,0,139, 0.7);
  left: 50%;
  top: 50%;
	display: flex;
	/* min-height: 100vh; */
	margin: auto;
	border-radius: 10px;
`;

export const CardContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  background-color: #ffffff;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
	width: 100%;
`;

interface ImageProps {
  src: string;
}

export const Image = styled.div<ImageProps>`
  border-radius: 6px 0 0 6px;
  background-image: ${({ src }) => `url(${src})`};
  height: 200px;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media ${device.sm} {
    border-radius: 6px 6px 0 0;
  }
  @media ${device.md} {
    min-height: 200px;
    width: 100%;
    max-width: unset;
  }
`;
