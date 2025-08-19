// app/api/attendance/route.ts
import { NextResponse } from 'next/server';
import { Student } from 'src/types/students';

const names = [
  'Alice Johnson',
  'Bob Smith',
  'Charlie Lee',
  'Dana White',
  'Eli Brown',
  'Fiona Green',
  'George Black',
  'Hannah Blue',
];

function randomStatus(): Student['status'] {
  const statuses: Student['status'][] = ['Present', 'Late', 'Absent'];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const students: Student[] = names.map((name, index) => ({
    id: index + 1,
    name,
    status: randomStatus(),
    lastActive: now,
    sessionsAttended: Math.floor(Math.random() * 15) + 5,
    participating: Math.random() > 0.5,
  }));

  return NextResponse.json(students);
}
