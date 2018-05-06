export interface ILatLng {
  lat?: number;
  lng?: number;
}

export interface ILocation {
  address?: string;
  latLng?: ILatLng;
}
