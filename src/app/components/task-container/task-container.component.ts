import { Component } from '@angular/core';
import { Task } from '../task/models/Task';
import { StatusEnum } from '../task/config/StatusEnum';

@Component({
  selector: 'app-task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent {
  MOCK_TASKS: Task[] = [
    {
      task: 'Write documentation',
      group: 'Development',
      status: StatusEnum.Active,
    },
    {
      task: 'Design homepage',
      group: 'Design',
      status: StatusEnum.Active,
    },
    {
      task: 'Meet with client',
      group: 'Meetings',
      status: StatusEnum.Active,
    },
    {
      task: 'Implement login',
      group: 'Development',
      status: StatusEnum.Active,
    },
    // ... you can add as many tasks as you want
  ];
}
