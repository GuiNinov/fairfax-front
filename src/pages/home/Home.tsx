import React from 'react';
import LeftSideBar from '../../components/layouts/LeftSideBar/LeftSideBar';
import { Layout } from '../../components/layouts';
import HomeHeader from '../../components/layouts/HomeHeader/HomeHeader';
import { Col } from '../../components/utils/Col';
import HomeContent from '../../components/content/Home/HomeContent';
import CompanyDetailsModal from '../../components/feature/CompanyDetailsModal';
import AddCardModal from '../../components/feature/AddCardModal';
export default function Home() {
  return (
    <Layout>
      <CompanyDetailsModal />
      <AddCardModal />
      <LeftSideBar />
      <Col style={{ width: '100%' }}>
        <HomeHeader />
        <HomeContent />
      </Col>
    </Layout>
  );
}
