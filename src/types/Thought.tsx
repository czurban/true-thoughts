export interface Thought {
  id: string;
  text: string;
  createdAt?: string;
  displayNumber: number;
  onDelete: (id: string) => void | Promise<void>;
}
