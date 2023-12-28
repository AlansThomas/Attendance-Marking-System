// utils.js

import { startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

export const getDatesForCurrentMonth = currentDate => {
  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);

  return eachDayOfInterval({ start: startOfMonthDate, end: endOfMonthDate });
};
