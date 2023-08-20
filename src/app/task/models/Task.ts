import { StatusEnum } from '../config/StatusEnum';

export interface Task {
  task: String;
  status: StatusEnum;
  group: String;
}
