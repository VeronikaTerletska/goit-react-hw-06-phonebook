import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

export function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem('contacts');
    if (saveContacts !== null) {
      const parseContacts = JSON.parse(saveContacts);
      return parseContacts;
    }
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    console.log({ name, number });

    const hasName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (hasName) {
      return alert(`${name} is alredy in contacts`);
    }

    const newContact = { id: nanoid(), name: name, number: number };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const handleChangeFilter = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const getVisibelContats = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = idContact => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== idContact)
    );
  };

  const visibleContacts = getVisibelContats();

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        // gap: 20,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      <GlobalStyle />
    </div>
  );
}
