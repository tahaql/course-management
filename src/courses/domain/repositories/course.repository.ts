import { Course } from '../entities/course.entity';

export abstract class CourseRepository {
  abstract create(course: Course): Promise<Course>;
  abstract findAll(): Promise<Course[]>;
}
