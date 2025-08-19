import * as React from 'react';
import AppBoxBadge from './app-box-badge';
import { AttendanceStatus } from 'src/types/enum';
interface IAttendanceBadgeProps {
  label: string;
}

const AttendanceBadge: React.FC<IAttendanceBadgeProps> = (props) => {
  const { label } = props;
  const getCurrentColorBadge = (type: string) => {
    switch (type) {
      case AttendanceStatus.Present:
        return {
          color: '#422099',
        };
      case AttendanceStatus.Absent:
        return {
          color: '#53b3c1',
        };

      default:
        return {
          color: 'gray',
        };
    }
  };

  return (
    <AppBoxBadge
      label={`attendanceStatus.${label}`}
      backgroundColor={getCurrentColorBadge(label).color}
    />
  );
};

export default AttendanceBadge;
