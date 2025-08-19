'use client';

import Grid from '@mui/material/Grid';
import { CourseSections } from '../course-sction';
import dynamic from 'next/dynamic';
import { CourseItem } from 'src/types/courses';
const CourseOverview = dynamic(() => import('../../../components/analytics/course'), {
  loading: () => <p>Loading course overview...</p>,
});

const StudentsSection = dynamic(() => import('../students-section'), {
  ssr: false,
});

// ----------------------------------------------------------------------

const course: CourseItem = {
  title: 'React Fundamentals',
  instructor: 'Jane Doe',
  schedule: 'Mon & Wed, 10:00 AM - 12:00 PM',
  enrolled: 120,
  modules: 8,
};
export function AnalyticsView() {
  return (
    <Grid container spacing={4} padding={5}>
      <Grid size={{ md: 12, lg: 6 }}>
        <CourseOverview course={course} />

        <CourseSections />
      </Grid>
      <Grid size={{ md: 12, lg: 6 }}>
        <StudentsSection />
      </Grid>
    </Grid>
  );
}
