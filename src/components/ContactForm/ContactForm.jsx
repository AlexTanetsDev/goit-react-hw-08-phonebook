import { Formik, ErrorMessage } from "formik"
import { ContactsForm, FormLabel, StyledField, SubmitButton } from "./ContactForm.styled";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { addContact } from "Redux/contacts/operations";

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required().positive().integer(),
});

const initialValues = {
    name: "",
    number: ""
};



export const ContactForm = () => {

    const dispatch = useDispatch();


    const hendleSubmit = (values, { resetForm }) => {
        dispatch(addContact(values))
        resetForm();
    }
    return (
      
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={hendleSubmit}>
            <ContactsForm autoComplete="off">
                <FormLabel htmlFor="name">Name
                    <StyledField type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </FormLabel>
                
                <FormLabel htmlFor="number">Number
                    <StyledField type="tel" name="number"/>
                    <ErrorMessage name="number" component="div" />
                </FormLabel>
                <SubmitButton type="submit">Add contact</SubmitButton>
            </ContactsForm>
        </Formik>
    )

};


