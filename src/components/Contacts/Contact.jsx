import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { MdPersonRemove } from 'react-icons/md';
import { BsPatchExclamation } from 'react-icons/bs';
import { Item, DeleteBtn } from './Contacts.styled';
import { deleteContact } from 'redux/operations';
import { setIsLoading } from 'redux/contacts/selectors';

export const Contact = ({ id, name, number }) => {
  const [IdToDelete, setIdToDelete] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(setIsLoading);
  const handleDelete = () => {
    setIdToDelete(id);
    dispatch(deleteContact(id))
      .then(response => {
        toast(`${name} was removed from your Book`, {
          icon: <MdPersonRemove size={25} color="#b24a4a" />,
        });
      })
      .catch(error => toast(`Oops!`, error.message), {
        icon: <BsPatchExclamation size={40} color="#5d3d79" />,
      });
  };
  const DeleteInProgress = isLoading && id === IdToDelete;
  return (
    <Item>
      <p>
        {name}: <span>{number}</span>
      </p>
      <DeleteBtn type="button" onClick={handleDelete} disabled={DeleteInProgress}>
        Delete contact
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
