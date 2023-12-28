// Header.js

import PropTypes from "prop-types"
import { format } from 'date-fns';

const Header = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <div>
      <button onClick={onPrevMonth}>&lt;</button>
      <span>{format(currentDate, 'MMMM yyyy')}</span>
      <button onClick={onNextMonth}>&gt;</button>
    </div>
  );
};

Header.propTypes = {
  currentDate: PropTypes.any,
  onNextMonth: PropTypes.any,
  onPrevMonth: PropTypes.any
}

export default Header;
