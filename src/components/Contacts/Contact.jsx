import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { MdPersonRemove, MdDeleteForever } from 'react-icons/md';
import { BsPatchExclamation } from 'react-icons/bs';
import { Item, ContactInfo, DeleteBtn } from './Contacts.styled';
import { deleteContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';

export const Contact = ({ id, name, number }) => {
  const [idToDelete, setIdToDelete] = useState('');
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAllContacts);

  const handleDelete = async () => {
    setIdToDelete(id);
    try {
      await dispatch(deleteContact(id));
      toast(`${name} was removed from your Book`, {
        icon: <MdPersonRemove size={25} color="#b24a4a" />,
      });
    } catch (error) {
      toast(`Oops!`, error.message, { icon: <BsPatchExclamation size={40} color="#5d3d79" /> });
    }
  };

  const DeleteInProgress = isLoading && id === idToDelete;

  return (
    <Item>
      <ContactInfo>
        <span>{name}:</span>
        <span>{number}</span>
      </ContactInfo>
      <DeleteBtn type="button" onClick={handleDelete} disabled={DeleteInProgress}>
        <MdDeleteForever size={22} color="#976363" />
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
