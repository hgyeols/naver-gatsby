import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { MenuToggle } from './menuToggle';
import { NavMenu } from './navMenu';

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  user-select: none;
  overflow: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  margin-left: 42px;
`;

const menuVariants = {
  open: {
    transform: 'translateX(0%)',
  },
  closed: {
    transform: 'translateX(100%)',
  },
};

const menuTransition = {
  type: 'ease-in',
  duration: 0.1,
  stiffness: 80,
  delay: 0.05,
};

export function MobileNavBar({ location }) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        <ContentContainer>
          <NavMenu location={location} toggle={toggleMenu} isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}
