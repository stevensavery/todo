import { Status } from "./status.enum";

export interface Task {
  id: number;
  description: string;
  status: Status;
}
