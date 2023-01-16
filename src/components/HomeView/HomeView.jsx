import {
  GreetingBtnBox,
  GreetingTag,
  GreetingTitle,
  GreetingWraper,
  TitleBox,
} from 'components/GreetingBox/GreetingBox.styled';
import { AddContactBtn, ContactsInfo } from './HomeView.styled';

export const HomeView = () => {
  return (
    <GreetingWraper>
      <TitleBox>
        <GreetingTitle>Phonebook</GreetingTitle>
        <GreetingTag>
          All your contacts in one app <br /> on any device!
        </GreetingTag>
      </TitleBox>

      <GreetingBtnBox>
        <ContactsInfo>Tou have ... contacts on your Phonebook</ContactsInfo>
        <AddContactBtn type="button">Add contact</AddContactBtn>
      </GreetingBtnBox>
    </GreetingWraper>
  );
};
