import React, { useRef, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { postRequest, putRequest } from '../../../../../../config/apiRequest';
import { formatDate } from '../../../../../../helpers/formatDate';
import { Button } from '../../../../../utils/Button';
import { Row } from '../../../../../utils/Row';
import { FileArea } from '../style';
export default function SolicitarDados() {
  const company: any = useSelector((state: any) => state.page.selected_company);
  const [fileField, setFileField]: any = useState();
  console.log(company);
  const [disabled, setDisabled] = useState(false);

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setFileField(fileList[0]);
  };

  // line above ^ gives me the error below

  const handleSubmit = async () => {
    setDisabled(true);
    const formData = new FormData();
    if (fileField) {
      formData.append('file', fileField);
    }
    try {
      const req = await putRequest('/company/' + company.id, formData);
      console.log(req);
      alert('PDF Adicionado e lido com sucesso');
      setDisabled(false);
      window.location.reload();
    } catch (error: any) {
      alert('Erro ao analisar o PDF, tente novamente');
      setDisabled(false);
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
              <img
                src={
                  company.cartao_cnpj != null
                    ? __dirname + './green-check.svg'
                    : __dirname + './check-off.svg'
                }
              />
              <p>Cartão CNPJ</p>
            </Row>
            <img src={__dirname + './girl.svg'} />
          </Row>
          {company.cartao_cnpj == null && (
            <div
              style={{
                borderBottom: '2px solid #D9DBDF',
                width: '100%',
                paddingBottom: 10,
              }}
            >
              <FileArea>
                <p style={{ fontSize: 18 }}>Envio de documento</p>

                <input
                  type="file"
                  className="file"
                  onChange={handleImageChange}
                  required
                  disabled={disabled}
                />

                <br />
                <br />
                {disabled ? (
                  <p>Fazendo a leitura do PDF...</p>
                ) : (
                  <Button
                    className={disabled ? 'disabled' : 'soft'}
                    disabled={disabled}
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    ENVIAR ARQUIVO
                  </Button>
                )}
              </FileArea>
            </div>
          )}
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
