import { Card, CardContent, Typography, List, ListItem } from '@mui/material';
import { useTranslate } from 'src/locales';
import { CourseItem } from 'src/types/courses';

interface Props {
  course: CourseItem;
}

export default function Course({ course }: Props) {
  const { t } = useTranslate();
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{t('course.overview')}</Typography>
        <List>
          <ListItem>
            📘 {t('course.title')}: {course.title}
          </ListItem>
          <ListItem>
            👩‍🏫 {t('course.instructor')}: {course.instructor}
          </ListItem>
          <ListItem>
            🗓️ {t('course.schedule')}: {course.schedule}
          </ListItem>
          <ListItem>
            👥 {t('course.enrolledStudents')}: {course.enrolled}
          </ListItem>
          <ListItem>
            📂 {t('course.modules')}: {course.modules}
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
