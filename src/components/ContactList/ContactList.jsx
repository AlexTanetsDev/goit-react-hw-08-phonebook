import { useDispatch, useSelector } from 'react-redux';
import {
  Contact,
  ContactItem,
  DeleteContactBtn,
  List,
} from './ContactList.styled';
import { selectContacts } from 'Redux/contacts/selectors';
import { selectFilter } from 'Redux/filterSlice';
import { deleteContact } from 'Redux/contacts/operations';
import { FaUsersSlash } from 'react-icons/fa';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <List>
      {getVisibleContacts().map(visibleContact => {
        const { id, name, number } = visibleContact;
        return (
          <ContactItem key={id}>
            <Contact>
              {name.toUpperCase()} : {number}
            </Contact>
            <DeleteContactBtn type="button" onClick={() => handleClick(id)}>
              <FaUsersSlash />
            </DeleteContactBtn>
          </ContactItem>
        );
      })}
    </List>
  );
};
