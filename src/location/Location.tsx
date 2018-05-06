export interface ILatLng {
  lat: string;
  lng: string;
}

export interface ILocation {
  address: string;
  latLng: ILatLng;
}
