import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 161,
  departmentName: 'who duh',
};

export const sampleWithPartialData: IDepartment = {
  id: 28723,
  departmentName: 'painfully which pish',
};

export const sampleWithFullData: IDepartment = {
  id: 26081,
  departmentName: 'mmm but boo',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'urgently whether ugh',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
