import React from 'react';
import Modal from '../../utils/Modal';
import { useSelector } from 'react-redux';
import CompanyDetails from './CompanyDetails';

export default function CompanyDetailsModal() {
  const { company_details: visible, selected_company }: any = useSelector(
    (state: any) => state.page
  );

  return <Modal content={<CompanyDetails />} visible={visible} />;
}
