import { CourseRepository } from '../repositories/course.repository';
import { Course } from '../entities/course.entity';

export class CreateCourseUseCase {
  constructor(private readonly repo: CourseRepository) {}

  async execute(input: {
    title: string;
    description: string;
    price: number;
  }): Promise<Course> {
    const course = Course.create(input.title, input.description, input.price);

    return this.repo.create(course);
  }
}
