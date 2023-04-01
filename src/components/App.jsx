import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import { Forms } from './Forms/Forms';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import {
  Container,
  ContainerContacts,
  TitlePhonebook,
  TitleContacts,
} from './Container.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Forms />
      <ContainerContacts>
        <TitleContacts>Contacts</TitleContacts>
        {isLoading && !error && <b>Request in progress...</b>}
        <Filter />
        <Contacts />
      </ContainerContacts>
    </Container>
  );
};
