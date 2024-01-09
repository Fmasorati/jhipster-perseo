import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 160,
};

export const sampleWithPartialData: ITask = {
  id: 25394,
  title: 'washbasin sight',
};

export const sampleWithFullData: ITask = {
  id: 13008,
  title: 'pish squat prestigious',
  description: 'than qua sheepishly',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
