import { useState } from 'react';
import { Form, Input, Text, BtnSubmit, Label } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  let NameInputId = nanoid();
  let NumberInputId = nanoid();

  const formChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const formSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <Form onSubmit={formSubmit}>
      <Label htmlFor={NameInputId}>
        <Text>Name</Text>
        <Input
          placeholder=" Taras Hryhorovych Shevchenko"
          type="text"
          name="name"
          id={NameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={formChange}
        />
      </Label>
      <Label htmlFor={NumberInputId}>
        <Text>Number</Text>
        <Input
          placeholder=" ***-**-**"
          type="tel"
          name="number"
          id={NumberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={formChange}
        />
      </Label>
      <BtnSubmit type="submit">Add contact</BtnSubmit>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
