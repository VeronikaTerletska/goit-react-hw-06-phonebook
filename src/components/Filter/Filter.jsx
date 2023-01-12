import PropTypes from 'prop-types';
import { Text, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/FilterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const handleChangeFilter = evt => {
    const filter = evt.target.value;

    dispatch(setFilter(filter));
  };

  return (
    <div>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Search contact"
        value={filter}
        onChange={handleChangeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};
