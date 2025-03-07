import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
/* import Modal from '../../components/Modal'; */
/* import Loader from '../../components/Loader'; */

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 Contatos</strong>
        <Link to="/new">Novo Contato</Link>
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
          <Link to="/edit/123">
            <img src={edit} alt="edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="delete" />
          </button>
        </div>
      </Card>

    </Container>
  );
}
