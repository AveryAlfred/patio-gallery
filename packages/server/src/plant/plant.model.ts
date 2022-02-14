export interface PlantInfo {
  name: string;
  taxa: string;
  moniker: string;
  group: string;
}

export interface PlantEvent {
  date: string;
  notes: string;
  photos: string[];
}

export interface Plant {
  id: string;
  info: PlantInfo;
  events?: PlantEvent[];
}