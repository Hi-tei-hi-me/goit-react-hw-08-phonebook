import { SectionWrap } from './AuthNav.styled';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <SectionWrap>
      <Link to="/register">Registration</Link>
      <Link to="/login">Log In</Link>
    </SectionWrap>
  );
};
