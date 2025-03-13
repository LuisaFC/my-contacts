import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container, Header, ListHeader, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
/* import Modal from '../../components/Modal'; */
/* import Loader from '../../components/Loader'; */

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts', {
      method: 'GET',
    })
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
        setContacts([{
          id: 1,
          name: 'Luisa',
          email: 'teste@teste.com',
          phone: '6198765445',
          category_name: 'Instagram',
        },
        {
          id: 2,
          name: 'Jhon',
          email: 'teste@123.com',
          phone: '777777',
          category_name: '',
        }]);
      })
      .catch((error) => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>
          {contacts.length}
          {contacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListHeader>
        <button type="button">
          <span>Nome</span>
          <img src={arrow} alt="Arrow icon" />
        </button>

      </ListHeader>

      {contacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>
          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
      ))}

    </Container>
  );
}
