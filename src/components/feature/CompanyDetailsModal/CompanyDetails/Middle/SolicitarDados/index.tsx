import React, { useRef, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../../../../helpers/formatDate';
import { Button } from '../../../../../utils/Button';
import { Row } from '../../../../../utils/Row';
import { FileArea } from '../style';
export default function SolicitarDados() {
  const company: any = useSelector((state: any) => state.page.selected_company);
  const fileField: any = useRef();

  const [disabled, setDisabled] = useState();

  const handleSubmit = () => {
    const fData = new FormData();
    if (fileField.current.files.length > 0) {
      for (let i = 0; i < fileField.current.files.length; i++) {
        fData.append('file', fileField.current.files[i]);
      }
    }
  };

  return (
    <div>
      <Row className="space-between">
        <Row>
          <img src={__dirname + './green-check.svg'} />
          <p>Início do contato</p>
        </Row>
        <p>{formatDate(company.created_at)}</p>
      </Row>
      <img src={__dirname + './line-1.svg'} />
      <Row className="space-between">
        <Row>
          <img src={__dirname + './mail.svg'} />
          <p style={{ color: '#496CEA' }}>10 e-mails ocultados</p>
        </Row>
        <img src={__dirname + './girl.svg'} />
      </Row>
      <img src={__dirname + './line-2.svg'} />

      <Row className="space-between">
        <Row>
          <img src={__dirname + './solicitar-dados.svg'} />
          <p style={{ color: '#496CEA' }}>Solicitar Dados</p>
        </Row>
      </Row>

      <Row className="align-top">
        <img src={__dirname + './Group 21.svg'} />
        <div
          style={{
            width: '100%',
            paddingBottom: 10,
          }}
        >
          <Row className="space-between">
            <Row>
              <img src={__dirname + './check-off.svg'} />
              <p>Cartão CNPJ</p>
            </Row>
            <img src={__dirname + './girl.svg'} />
          </Row>
          <div
            style={{
              borderBottom: '2px solid #D9DBDF',
              width: '100%',
              paddingBottom: 10,
            }}
          >
            {fileField && (
              <FileArea>
                <p style={{ fontSize: 18 }}>Envio de documento</p>
                {fileField.current && fileField.current.files.length > 0 ? (
                  <></>
                ) : (
                  <input
                    type="file"
                    className="file"
                    ref={fileField}
                    required
                    disabled={disabled}
                  />
                )}
                <br />
                <br />
                <Button className="soft">ENVIAR ARQUIVO</Button>
              </FileArea>
            )}
          </div>
          <div
            style={{
              borderBottom: '2px solid #D9DBDF',
              width: '100%',
              paddingBottom: 10,
            }}
          >
            <Row className="space-between">
              <Row>
                <img src={__dirname + './green-check.svg'} />
                <p>Governança</p>
              </Row>
              <img src={__dirname + './girl.svg'} />
            </Row>
          </div>
          <div
            style={{
              borderBottom: '2px solid #D9DBDF',
              width: '100%',
              paddingBottom: 10,
            }}
          >
            <Row className="space-between">
              <Row>
                <img src={__dirname + './check-off.svg'} />
                <p>Projeto de engenharia</p>
              </Row>
              <img src={__dirname + './girl.svg'} />
            </Row>
          </div>
          <div
            style={{
              borderBottom: '2px solid #D9DBDF',
              width: '100%',
              paddingBottom: 10,
            }}
          >
            <Row className="space-between">
              <Row>
                <img src={__dirname + './check-off.svg'} />
                <p>Demonstrações financeiras oficiais</p>
              </Row>
              <img src={__dirname + './girl.svg'} />
            </Row>
          </div>
        </div>
      </Row>
      <Row className="space-between">
        <Row>
          <img src={__dirname + './no-check-ellipse.svg'} />
          <p>Analisar dados</p>
        </Row>
      </Row>
      <img src={__dirname + './line-2.svg'} />
      <Row className="space-between">
        <Row>
          <img src={__dirname + './no-check-ellipse.svg'} />
          <p>Enviar cotações</p>
        </Row>
      </Row>
    </div>
  );
}
