import React from 'react';
import LeftSideBar from '../../components/layouts/LeftSideBar/LeftSideBar';
import { Layout } from '../../components/layouts';
import { Col } from '../../components/utils/Col';
import ScoreHeader from '../../components/layouts/ScoreHeader/ScoreHeader';
import ScoreContent from '../../components/content/Score/ScoreContent';
export default function Score() {
  return (
    <Layout>
      <LeftSideBar />
      <Col style={{ width: '100%' }}>
        <ScoreHeader />
        <ScoreContent />
      </Col>
    </Layout>
  );
}
