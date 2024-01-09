import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 24893,
};

export const sampleWithPartialData: IRegion = {
  id: 16644,
  regionName: 'embellished',
};

export const sampleWithFullData: IRegion = {
  id: 4531,
  regionName: 'gigantic never mellow',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
