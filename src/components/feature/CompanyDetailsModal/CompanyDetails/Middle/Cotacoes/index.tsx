import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../../../../helpers/formatDate';
import { Button } from '../../../../../utils/Button';
import { Row } from '../../../../../utils/Row';
import { FileArea } from '../style';
import { MailArea } from './styled';

export default function Cotacoes() {
  const company: any = useSelector((state: any) => state.page.selected_company);
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
          <img src={__dirname + './green-check.svg'} />
          <p>Solicitar Dados</p>
        </Row>
        <p>{'06/06/2022'}</p>
      </Row>
      <img src={__dirname + './line-1.svg'} />
      <Row className="space-between">
        <Row>
          <img src={__dirname + './mail.svg'} />
          <p style={{ color: '#496CEA' }}>4 arquivos anexados</p>
        </Row>
        <img src={__dirname + './girl.svg'} />
      </Row>
      <img src={__dirname + './line-2.svg'} />

      <Row className="space-between">
        <Row>
          <img src={__dirname + './green-check.svg'} />
          <p>Analisar Dados</p>
        </Row>
        <p>{'06/06/2022'}</p>
      </Row>
      <img src={__dirname + './line-1.svg'} />
      <Row className="space-between">
        <Row>
          <img src={__dirname + './mail.svg'} />
          <p style={{ color: '#496CEA' }}>Score: 80/100</p>
        </Row>
        <img src={__dirname + './girl.svg'} />
      </Row>
      <img src={__dirname + './line-2.svg'} />

      <Row className="space-between">
        <Row>
          <img src={__dirname + './solicitar-dados.svg'} />
          <p>Enviar cotações</p>
        </Row>
        <p>{'07/06/2022'}</p>
      </Row>
      <Row>
        <img src={__dirname + './lastline.svg'} />
        <div>
          <MailArea>
            <Row>
              <label>De:</label>
              <p>akira@fairfax.com</p>
            </Row>
          </MailArea>

          <MailArea>
            <Row>
              <label>Para:</label>
              <p>pedro@empresa.com.br</p>
            </Row>
          </MailArea>

          <MailArea>
            <Row>
              <p>
                Olá Pedro, tudo certo por ai? Segue aqui as cotações do seu
                seguro.
              </p>
            </Row>
          </MailArea>
          <FileArea>
            <p style={{ fontSize: 18 }}>Envio de documento</p>
            <Row className="space-between">
              <input
                type="file"
                className="mail-file"
                // ref={fileField}
                required
                // disabled={disabled}
              />
              <Button className="soft">Enviar cotações</Button>
            </Row>
          </FileArea>
        </div>
      </Row>
    </div>
  );
}
