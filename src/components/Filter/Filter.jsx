import PropTypes from 'prop-types';
import { Text, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Search contact"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
