import React from 'react';
import Modal from '../../utils/Modal';
import { useSelector } from 'react-redux';
import AddCard from './AddCard';

export default function AddCardModal() {
  const visible: boolean = useSelector((state: any) => state.page.add_card);

  return <Modal content={<AddCard />} visible={visible} />;
}
