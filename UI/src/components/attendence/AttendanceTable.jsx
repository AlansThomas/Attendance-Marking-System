

import PropTypes from "prop-types"
const AttendanceTable = ({ dates, students, markAttendance }) => {
  return (
    <table>
      <thead>
        <tr style={{backgroundColor:'pink',border:'1px solid #ddd',padding:'15px'}}>
          <th  style={{padding:'15px'}}>Student Name</th>
          {dates.map(date => (
            <th style={{padding:'5px'}} key={date}>{date.getDate()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            {dates.map(date => (
              <td key={date} onClick={() => markAttendance(student.id, date)}>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

AttendanceTable.propTypes = {
  dates: PropTypes.shape({
    map: PropTypes.func
  }),
  markAttendance: PropTypes.func,
  students: PropTypes.shape({
    map: PropTypes.func
  })
}

export default AttendanceTable;
