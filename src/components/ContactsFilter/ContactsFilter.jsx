import { useDispatch, useSelector } from 'react-redux';
import { MdPersonSearch } from 'react-icons/md';
import { SearchForm, Label, Input } from './ContactsFilter.styled';
import { setFilter } from 'redux/searchForm/filterSlice';
import { selectFilter } from 'redux/searchForm/selectors';
import { selectAllContacts } from 'redux/contacts/selectors';

export const Filter = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = evt => dispatch(setFilter(evt.target.value));

  return (
    <SearchForm>
      <Label htmlFor="filter">
        <MdPersonSearch size={25} color="#4e4e4e" />
        Find by name:
      </Label>
      <Input
        autoFocus
        disabled={!filter && contacts.length < 3}
        name="filter"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </SearchForm>
  );
};
