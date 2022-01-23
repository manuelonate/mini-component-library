import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Selector value={value} onChange={onChange}>
        {children}
      </Selector>
      <Input>
        {displayedValue}
        <Icon id="chevron-down" />
      </Input>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const Selector = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const Input = styled.div`
  display: flex;
  align-items: center;

  border: 0;
  padding: 12px 16px;
  border-radius: 8px;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  ${Selector}:focus + & {
    outline: 1px solid #4374cb;
  }

  ${Selector}:hover + & {
    color: black;
  }
`;

export default Select;
