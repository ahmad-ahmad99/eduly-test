export interface Student {
  id: number;
  name: string;
  status: 'Present' | 'Late' | 'Absent';
  lastActive: string;
  sessionsAttended: number;
  participating: boolean;
}
