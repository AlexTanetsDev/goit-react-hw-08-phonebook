import {
  GreetingTag,
  GreetingTitle,
  GreetingWraper,
} from 'components/GreetingBox/GreetingBox.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'Redux/contacts/selectors';
import { AddContactBox, AddContactBtn, ContactInfoWrapper, ContactsInfo, HomeViewTitleBox } from './HomeView.styled';
import { FaUserAlt } from "react-icons/fa";
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const HomeView = () => {
  const contacts = useSelector(selectContacts);
  const contactsCount = contacts.length;
const [isModalOpen, setIsModalOpen] = useState(false);

const toggleModal=()=>{
  setIsModalOpen(!isModalOpen);
}

  return (
    <GreetingWraper>
      <HomeViewTitleBox>
        <GreetingTitle>Phonebook</GreetingTitle>
        <GreetingTag>
          All your contacts in one app <br /> on any device!
        </GreetingTag>
      </HomeViewTitleBox>

      <AddContactBox>
        <ContactInfoWrapper>
          <FaUserAlt color="#000000b9" size={50} />
          <ContactsInfo>Tou have {contactsCount} contacts <br/>in your Phonebook</ContactsInfo>
        </ContactInfoWrapper>
        
        <AddContactBtn type="button" onClick={toggleModal}>Add contact</AddContactBtn>
      </AddContactBox>
      {isModalOpen && <Modal modalClose={toggleModal}/>}
    </GreetingWraper>
  );
};
