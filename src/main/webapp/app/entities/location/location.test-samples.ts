import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 23806,
};

export const sampleWithPartialData: ILocation = {
  id: 5134,
  postalCode: 'whoa roust discrepancy',
  stateProvince: 'seemingly who final',
};

export const sampleWithFullData: ILocation = {
  id: 16119,
  streetAddress: 'irritably jade adjudicate',
  postalCode: 'phew than',
  city: 'Alvaro a mare',
  stateProvince: 'incidentally manoeuvre huzzah',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
