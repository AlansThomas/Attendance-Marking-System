// Header.js

import PropTypes from "prop-types"
import { format } from 'date-fns';

const Header = ({ currentDate, onPrevMonth, onNextMonth }) => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <button onClick={onPrevMonth} style={{backgroundColor:"blueviolet",borderRadius:'2px'}}>&lt;</button>
      <span>{format(currentDate, 'MMMM yyyy')}</span>
      <button onClick={onNextMonth}  style={{backgroundColor:"blueviolet",borderRadius:'2px'}}>&gt;</button>
    </div>
  );
};

Header.propTypes = {
  currentDate: PropTypes.any,
  onNextMonth: PropTypes.any,
  onPrevMonth: PropTypes.any
}

export default Header;
