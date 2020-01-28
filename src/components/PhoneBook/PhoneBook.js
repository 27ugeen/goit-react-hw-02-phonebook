import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PhoneBook.module.css';

const { form, inputLabel, input, formButton } = styles;

export default class PhoneBook extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: this.props.name,
    number: this.props.number,
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onAddContact(name, number);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form className={form} onSubmit={this.handleSubmit}>
          <label className={inputLabel} htmlFor="name">
            Name
          </label>
          <input
            className={input}
            type="text"
            placeholder="Enter user name*"
            value={name}
            onChange={this.handleInputChange}
            name="name"
            id="name"
            required
          />
          <label className={inputLabel} htmlFor="number">
            Number
          </label>
          <input
            className={input}
            type="text"
            placeholder="Enter user phone number*"
            value={number}
            onChange={this.handleInputChange}
            name="number"
            id="number"
            required
          />
          <button type="submit" className={formButton}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
