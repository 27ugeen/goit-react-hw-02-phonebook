import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PfoneBook extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
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
        <form onSubmit={this.handleSubmit}>
          <label className="TaskEditor-label">
            Name
            <input
              className="TaskEditor-input"
              type="text"
              placeholder="Enter user name*"
              value={name}
              onChange={this.handleInputChange}
              name="name"
              required
            />
          </label>
          <label className="TaskEditor-label">
            Number
            <input
              className="TaskEditor-input"
              type="text"
              placeholder="Enter user phone*"
              value={number}
              onChange={this.handleInputChange}
              name="number"
              required
            />
          </label>
          <button type="submit" className="TaskEditor-button">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
