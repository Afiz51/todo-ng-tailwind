export interface TodoModel {
  id: number;
  title: string;
  completed: boolean;
}

export let todos: TodoModel[] = [
  {
    id: 1,
    title: 'Title 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Title 2',
    completed: false,
  },
];
