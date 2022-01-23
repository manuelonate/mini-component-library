/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const prop = {
    small: { padding: '0', height: '8px', radius: '4px', inner_radius: '4px' },
    medium: {
      padding: '0',
      height: '12px',
      radius: '4px',
      inner_radius: '4px',
    },
    large: {
      padding: '4px',
      height: '24px',
      radius: '8px',
      inner_radius: '5px',
    },
  };

  return (
    <Wrapper prop={prop[size]}>
      <Clipper prop={prop[size]}>
        <Bar value={value} />
      </Clipper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(128, 128, 128, 0.15);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  height: ${(p) => p.prop.height};
  border-radius: ${(p) => p.prop.radius};
  padding: ${(p) => p.prop.padding};
`;

const Clipper = styled.div`
  border-radius: ${(p) => p.prop.inner_radius};
  width: 100%;
  height: 100%;
  background: transparent;
  overflow: hidden;
`;

const Bar = styled.div`
  height: 100%;
  width: ${(p) => p.value + '%'};
  background: #4747eb;
`;

export default ProgressBar;
