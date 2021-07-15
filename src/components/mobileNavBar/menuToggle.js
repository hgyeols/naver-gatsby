import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Path = (props) => (
  <motion.path
    fill="transparent"
    stroke="#E2E2E2"
    strokeLinecap="round"
    strokeWidth="1.5"
    {...props}
  />
);

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
  width: 48px;
  height: 48px;

  &:hover {
    background-color: ${(props) => (props.isOpen ? '#f1f1f1' : '#1f1f1f')};
    border-radius: 24px;
  }
`;

const transition = { duration: 0.3 };

export function MenuToggle({ toggle, isOpen }) {
  return (
    <Button isOpen={isOpen} onClick={toggle}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 14.75 16.25 L 33.25 16.25', stroke: '#e2e2e2' },
            open: { d: 'M 17 30.5 L 31.5 16.25', stroke: '#666' },
          }}
          d="Mx1 y1, Lx2 y2"
          transition={transition}
        />
        <Path
          d="M 14.75 23.25 L 33.25 23.25"
          stroke="#e2e2e2"
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 14.75 30.25 L 33.25 30.25', stroke: '#e2e2e2' },
            open: { d: 'M 17 16.404 L 31.5 30.25', stroke: '#666' },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}
