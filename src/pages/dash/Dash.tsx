import React from 'react';
import LeftSideBar from '../../components/layouts/LeftSideBar/LeftSideBar';
import { Layout } from '../../components/layouts';
import { Col } from '../../components/utils/Col';
import DashHeader from '../../components/layouts/DashHeader/DashHeader';
import DashContent from '../../components/content/Dash/DashContent';
export default function Dash() {
  return (
    <Layout>
      <LeftSideBar />
      <Col style={{ width: '100%' }}>
        <DashHeader />
        <DashContent />
      </Col>
    </Layout>
  );
}
