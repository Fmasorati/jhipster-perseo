import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 20446,
};

export const sampleWithPartialData: IJob = {
  id: 1341,
  maxSalary: 3167,
};

export const sampleWithFullData: IJob = {
  id: 1695,
  jobTitle: 'National Web Director',
  minSalary: 16038,
  maxSalary: 12163,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
