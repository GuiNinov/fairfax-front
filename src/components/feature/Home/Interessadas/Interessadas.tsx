import React, { useEffect, useState } from 'react';
import Card from '../../../utils/ClientCard';
import { Col } from '../../../utils/Col';
import { Row } from '../../../utils/Row';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../state';
import { getRequest } from '../../../../config/apiRequest';
import iCompany from '../../../../interfaces/Company';
import { formatDate } from '../../../../helpers/formatDate';
export default function Interessadas() {
  const dispatch: any = useDispatch();
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    const req = await getRequest('/phase/0');
    setCards(req.content);
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <Col>
      <Row className="space-between">
        <p>INTERESSADAS {cards && `(${cards.length})`}</p>
        <img
          src={__dirname + './add-icon.svg'}
          onClick={() => {
            dispatch(actions.page.openAddCard());
          }}
        />
      </Row>
      {cards &&
        cards.map((company: any, key: number) => {
          return <Card key={key} company={company} />;
        })}
    </Col>
  );
}
