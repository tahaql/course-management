import { randomUUID } from 'crypto';

export class Course {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public price: number,
    public readonly createdAt: Date,
  ) {}

  static create(title: string, description: string, price: number): Course {
    return new Course(randomUUID(), title, description, price, new Date());
  }

  updateTitle(newTitle: string) {
    if (!newTitle || newTitle.trim().length === 0) {
      throw new Error('Title cannot be empty');
    }
    this.title = newTitle;
  }

  updateDescription(newDescription: string) {
    this.description = newDescription;
  }

  updatePrice(newPrice: number) {
    if (newPrice < 0) {
      throw new Error('Price cannot be negative');
    }
    this.price = newPrice;
  }
}
