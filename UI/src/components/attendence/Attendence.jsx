
import { useState } from 'react';
import Header from './Header';
import AttendanceTable from './AttendanceTable';
import { addMonths, subMonths } from 'date-fns';
import { getDatesForCurrentMonth } from '../../utils/Dates';

const Attendence = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const students = [
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
  ];
  const dates = getDatesForCurrentMonth(currentDate);

  const handlePrevMonth = () => {
    setCurrentDate(prevDate => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => addMonths(prevDate, 1));
  };

  const markAttendance = (studentId, date) => {
  };

  return (
    <div>
      <Header currentDate={currentDate} onPrevMonth={handlePrevMonth} onNextMonth={handleNextMonth} />
      <div style={{display:'flex'}}>
    
      </div>
      <AttendanceTable dates={dates} students={students} markAttendance={markAttendance} />
    </div>
  );
};

export default Attendence;