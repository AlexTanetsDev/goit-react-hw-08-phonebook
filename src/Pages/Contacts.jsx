import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  selectContacts,
  selectIsloading,
  selectError,
} from 'Redux/contacts/selectors';
import { fetchContacts } from 'Redux/contacts/operations';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { GreetingWraper } from 'components/GreetingBox/GreetingBox.styled';
import { AddContactBtn } from 'components/HomeView/HomeView.styled';
import { Modal } from 'components/Modal/Modal';

export default function Contacts() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <GreetingWraper>
      <h1>Phonebook</h1>
      <AddContactBtn type="button" onClick={toggleModal}>
        Add contact
      </AddContactBtn>
      {isModalOpen && <Modal modalClose={toggleModal} />}
      <h2>
        {contacts.length === 0
          ? 'Here will be your contacts. Add contacts'
          : 'Contacts'}
      </h2>
      {contacts.length > 1 && <Filter />}
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length !== 0 && <ContactList />}
    </GreetingWraper>
  );
}
