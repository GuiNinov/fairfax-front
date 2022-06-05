import React from 'react';
import NavArea from './NavArea/NavArea';
import { Container } from './styles';

export default function LeftSideBar() {
  return (
    <Container>
      <div className="img-header">
        <img src={__dirname + './ff-main-logo.svg'} />
      </div>

      <NavArea />
    </Container>
  );
}
