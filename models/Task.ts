type Statuses = "OPEN" | "IN_PROGRESS" | "DONE";

export type TaskCreateDto = {
  title: string;
  description: string;
  status: Statuses;
};

export class Task {
  id: string;
  title: string;
  description: string;
  status: Statuses;

  constructor({ title, description, status }: TaskCreateDto) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
