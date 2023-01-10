import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/ContactSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete contact
      </Button>
    </Item>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
