import { FormLabel, SubmitButton } from 'components/ContactForm/ContactForm.styled';
import { StyledInput } from 'components/Filter/Filter.styled';
import { StyledLoginForm } from 'components/LoginForm/LoginForm.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/auth/operations';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledLoginForm  onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <StyledInput type="text" name="name" placeholder='userName'/>
      </FormLabel>
      <FormLabel>
        Email
        <StyledInput type="email" name="email" placeholder='example@mail.com'/>
      </FormLabel>
      <FormLabel >
        Password
        <StyledInput type="password" name="password" placeholder='example123'/>
      </FormLabel>
      <SubmitButton type="submit">Register</SubmitButton>
    </StyledLoginForm>
  );
};
