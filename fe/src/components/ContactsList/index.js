import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 Contatos</strong>
        <a href="/">Novo Contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow icon" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Luisa</strong>
            <small>Instagram</small>
          </div>
          <span>luisa@teste.com</span>
          <span>(61) 987765445</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={edit} alt="edit" />
          </a>
          <button type="button">
            <img src={trash} alt="delete" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Luisa</strong>
            <small>Instagram</small>
          </div>
          <span>luisa@teste.com</span>
          <span>(61) 987765445</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={edit} alt="edit" />
          </a>
          <button type="button">
            <img src={trash} alt="delete" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Luisa</strong>
            <small>Instagram</small>
          </div>
          <span>luisa@teste.com</span>
          <span>(61) 987765445</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={edit} alt="edit" />
          </a>
          <button type="button">
            <img src={trash} alt="delete" />
          </button>
        </div>
      </Card>

    </Container>
  );
}
