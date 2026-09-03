import { get } from "./client";
import type { Car } from "../types/bookingTypes";

export const getCars = () => get<Car[]>("/cars");
export const getCarById = (id: string) => get<Car>(`/cars/${id}`);