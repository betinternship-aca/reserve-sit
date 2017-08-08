export interface ISit {
  sitID: string;
  orgID: string;
  sitName: string;
  numOfSeats: number;
  reserved: boolean;
  cost: number;
  paid: boolean;
  image: string;
  parentOrgID?: string;
}