import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Hamburger({ active, type }) {

  const cNames = classnames(
    'hamburger',
    `hamburger--${type}`,
    { 'is-active': active }
  );

  return (
    <button className={cNames} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  );
}

/* PropTypes */
Hamburger.propTypes = {
  active: PropTypes.bool,
  type: PropTypes.string
};

/* Default props */
Hamburger.defaultProps = {
  active: false,
  type: 'boring'
};
