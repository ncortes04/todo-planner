import { Component, Input } from '@angular/core';
import { Task } from './models/Task';
import { StatusEnum } from './config/StatusEnum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input()
  task!: Task; // This property can now receive data from parent component

  private statusEnum: StatusEnum = StatusEnum.Active;
}
