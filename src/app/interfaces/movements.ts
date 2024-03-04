export interface Movements {
  id_movement: number;
  type_movement: string;
  amount: number;
  dateTime: Date;
  user_id: number; // Assuming this is a foreign key referencing the user
}
