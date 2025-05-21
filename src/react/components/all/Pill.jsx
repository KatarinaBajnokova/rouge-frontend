import React from 'react';
import PropTypes from 'prop-types';
import '@/sass/components/all/_pill.scss';

const Pill = ({
  children,
  checked = false,
  onClick = () => {},
  style = {},
}) => (
  <button
    type='button'
    className={`pill${checked ? ' pill--checked' : ''}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

Pill.propTypes = {
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Pill;
