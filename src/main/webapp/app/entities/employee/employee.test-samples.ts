import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 4521,
};

export const sampleWithPartialData: IEmployee = {
  id: 1280,
  email: 'Sapiente_Mancini22@gmail.com',
  phoneNumber: 'concerning yummy unless',
  salary: 22381,
};

export const sampleWithFullData: IEmployee = {
  id: 23646,
  firstName: 'Aleardo',
  lastName: 'Antonucci',
  email: 'Agapito.Mascolo25@hotmail.com',
  phoneNumber: 'consist er majestically',
  hireDate: dayjs('2024-01-09T00:41'),
  salary: 13407,
  commissionPct: 22729,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
