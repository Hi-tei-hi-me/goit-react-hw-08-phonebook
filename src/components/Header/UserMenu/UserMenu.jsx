import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
  MdOutlineDoneAll,
  MdOutlineRemoveDone,
  MdPersonOutline,
  MdOutlineLogout,
} from 'react-icons/md';
import { logOut } from 'redux/authorization/operations';
import { useAuth } from 'utils/hooks';
import { LogoutMenu, User, LogoutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () =>
    dispatch(logOut())
      .then(unwrapResult)
      .then(response => {
        toast(`You successfully leaved your profile!`, {
          icon: <MdOutlineDoneAll size={25} color="#327047" />,
        });
      })
      .catch(() =>
        toast(`Something's wrong. Please try again later.`, {
          icon: <MdOutlineRemoveDone size={25} color="#5d3d79" />,
        })
      );

  return (
    <LogoutMenu>
      <User>
        <MdPersonOutline size={25} color="#aa8c3f" />
        User:<b>{user.name}</b>
      </User>
      <LogoutBtn type="button" onClick={handleLogOut}>
        Logout
        <MdOutlineLogout size={20} color="#976363" />
      </LogoutBtn>
    </LogoutMenu>
  );
};
