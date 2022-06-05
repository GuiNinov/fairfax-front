import React from 'react';
import LeftSideBar from '../../components/layouts/LeftSideBar/LeftSideBar';
import { Layout } from '../../components/layouts';
import { Col } from '../../components/utils/Col';
export default function Dash() {
  return (
    <Layout>
      <LeftSideBar />
      <Col></Col>
    </Layout>
  );
}
