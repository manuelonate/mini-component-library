import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = size === 'small' ? '16' : '24';
  const height = size === 'small' ? '24px' : '36px';
  const border = size === 'small' ? '1px' : '2px';
  const padding = size === 'small' ? '28px' : '36px';
  return (
    <Wrapper height={height} border={border} width={width}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <Input placeholder={placeholder} padding={padding} />
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.div`
  position: relative;
  height: ${(p) => p.height};
  width: ${(p) => p.width + 'px'};
  border-bottom: ${(p) => p.border} solid black;

  &:hover input,
  &:hover svg,
  &:hover input::placeholder,
  & input:focus {
    color: black;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 2px;
  color: ${COLORS.gray700};
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding-left: ${(p) => p.padding};
  color: ${COLORS.gray700};
  font-weight: 700;
  &::placeholder {
    font-weight: 400;
  }
  &:focus {
    outline-offset: 3px;
    color: black;
  }
`;
