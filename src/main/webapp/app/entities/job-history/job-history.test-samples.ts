import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 8256,
};

export const sampleWithPartialData: IJobHistory = {
  id: 21406,
  startDate: dayjs('2024-01-09T01:27'),
  endDate: dayjs('2024-01-08T15:25'),
  language: 'SPANISH',
};

export const sampleWithFullData: IJobHistory = {
  id: 2530,
  startDate: dayjs('2024-01-09T03:22'),
  endDate: dayjs('2024-01-09T03:12'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
