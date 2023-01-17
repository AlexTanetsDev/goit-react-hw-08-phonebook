import { FormLabel, SubmitButton } from 'components/ContactForm/ContactForm.styled';
import { StyledInput } from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../Redux/auth/operations';
import { StyledLoginForm } from './LoginForm.styled';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit} autoComplete="off">
      <FormLabel >
        Email
        <StyledInput type="email" name="email" placeholder='example@mail.com'/>
      </FormLabel>
      <FormLabel >
        Password
        <StyledInput type="password" name="password" placeholder='example123'/>
      </FormLabel>
      <SubmitButton type="submit">Log In</SubmitButton>
    </StyledLoginForm>
  );
};
