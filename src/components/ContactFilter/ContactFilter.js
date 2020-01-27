import React from 'react';
import PropTypes from 'prop-types';

const ContactFilter = ({ value, onChangeFilter }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search contacts by name*"
        value={value}
        onChange={({ target }) => onChangeFilter(target.value)}
      ></input>
    </>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default ContactFilter;
