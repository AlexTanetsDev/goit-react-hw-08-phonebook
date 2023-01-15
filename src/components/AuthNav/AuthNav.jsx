import { StyledLink, StyledNav } from 'components/Navigation/Navigation.styled';


export const AuthNav = () => {
  return (
    <StyledNav>
      <StyledLink to="/register">
        Register
      </StyledLink>
      <StyledLink to="/login">
        Log In
      </StyledLink>
    </StyledNav>
  );
};
