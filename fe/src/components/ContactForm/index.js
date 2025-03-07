import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const emailInput = useRef(null);

  return (
    <Form>
      <FormGroup>
        <Input
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Email" ref={emailInput} defaultValue="Valor inicial" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
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
