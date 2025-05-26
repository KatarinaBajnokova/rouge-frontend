import PropTypes from 'prop-types';
import styles from './Pill.module.scss';

const Pill = ({
  children,
  checked = false,
  onClick = () => {},
  style = {},
}) => (
  <button
    type='button'
    className={`${styles.pill}${checked ? ' ' + styles.pillChecked : ''}`}
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
