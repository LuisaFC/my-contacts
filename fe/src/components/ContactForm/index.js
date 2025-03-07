import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name, email, phone, category,
    });
  }

  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Telefone"
          onChange={(event) => setPhone(event.target.value)}
          value={phone}
        />
      </FormGroup>

      <FormGroup>
        <Select
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          <option value="Category">Category</option>
          <option value="Instagram">Instagram</option>
          <option value="Discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
