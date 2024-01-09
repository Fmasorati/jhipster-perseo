import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 19035,
};

export const sampleWithPartialData: ICountry = {
  id: 24670,
  countryName: 'perfect',
};

export const sampleWithFullData: ICountry = {
  id: 2668,
  countryName: 'provided',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
