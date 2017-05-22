import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Hamburger({ active, type, ...props }) {

  const cNames = classnames(
    'hamburger',
    `hamburger--${type}`,
    { 'is-active': active }
  );

  return (
    <button type="button" className={cNames} {...props}>
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
