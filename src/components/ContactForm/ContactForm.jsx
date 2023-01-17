import { Formik, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import {
  ContactsForm,
  FormLabel,
  StyledField,
  SubmitButton,
} from './ContactForm.styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from 'Redux/contacts/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive().integer(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ modalClose } ) => {
  const dispatch = useDispatch();

  const hendleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
    modalClose();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={hendleSubmit}
    >
      <ContactsForm autoComplete="off">
        <FormLabel htmlFor="name">
          Name
          <StyledField type="text" name="name" placeholder="Contact Name" />
          <ErrorMessage name="name" component="div" />
        </FormLabel>

        <FormLabel htmlFor="number">
          Number
          <StyledField type="tel" name="number" placeholder="011 22 33 44" />
          <ErrorMessage name="number" component="div" />
        </FormLabel>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContactsForm>
    </Formik>
  );
};


ContactForm.propTypes = {
  modalClose: PropTypes.func.isRequired
}