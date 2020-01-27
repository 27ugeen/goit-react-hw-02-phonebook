import React, { Component } from 'react';
import Phonebook from './PhoneBook';
import Contactlist from './ContactList';
import ContactFilter from './ContactFilter';
import Section from './Section';
import Notification from './Notification';
import { uuid } from 'uuidv4';
import PropTypes from 'prop-types';

export default class App extends Component {
  static defaultProps = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
    addContact: PropTypes.func,
    deleteContact: PropTypes.func,
    changeFilter: PropTypes.func,
    getFilteredContacts: PropTypes.func,
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  addContact = (contactName, number) => {
    this.setState(prevState => {
      const { contacts } = prevState;

      if (contacts.some(({ name }) => name === contactName)) {
        alert(`${contactName} is already in contacts`);
      } else {
        const newContact = {
          id: uuid(),
          name: contactName,
          number,
        };
        return {
          contacts: [...prevState.contacts, newContact],
        };
      }
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      const { contacts } = prevState;

      return {
        contacts: contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <>
        <Section title="Phonebook">
          <Phonebook onAddContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && (
            <ContactFilter value={filter} onChangeFilter={this.changeFilter} />
          )}
          {contacts.length < 1 ? (
            <Notification message="There is no contact yet..." />
          ) : (
            <Contactlist
              contacts={filteredContacts}
              onDeleteContact={this.deleteContact}
            />
          )}
        </Section>
      </>
    );
  }
}
