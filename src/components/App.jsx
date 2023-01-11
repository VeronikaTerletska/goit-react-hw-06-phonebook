import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';
import { addContact, deleteContact } from 'redux/ContactSlice';
import { setFilter } from 'redux/FilterSlice';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';

export function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(() => {
  //   const saveContacts = localStorage.getItem('contacts');
  //   if (saveContacts !== null) {
  //     const parseContacts = JSON.parse(saveContacts);
  //     return parseContacts;
  //   }
  //   return [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const newContact = ({ name, number }) => {
    console.log({ name, number });

    const hasName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (hasName) {
      return alert(`${name} is alredy in contacts`);
    }

    // const newContact = { id: nanoid(), name: name, number: number };

    dispatch(addContact({ name, number }));
  };

  const handleChangeFilter = evt => {
    const filter = evt.target.value;

    dispatch(setFilter(filter));
  };

  const getVisibelContats = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = idContact => {
    dispatch(deleteContact(idContact.target.value));
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
      <ContactForm onSubmit={newContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleChangeFilter} />
      <ContactList contacts={visibleContacts} deleteContact={onDeleteContact} />
      <GlobalStyle />
    </div>
  );
}
