import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectContacts, selectIsloading, selectError } from "Redux/contacts/selectors";
import { fetchContacts } from "Redux/contacts/operations";
import { Wrapper } from "components/wrapper.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";


export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

      const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
        <Wrapper>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>{contacts.length === 0 ? 'Here will be your contacts. Add contacts' : 'Contacts'}</h2>
            {contacts.length > 1 && <Filter />}
            {isLoading && !error && <b>Request in progress...</b>}
            {contacts.length !== 0 && <ContactList />}
        </Wrapper>

    );

};






