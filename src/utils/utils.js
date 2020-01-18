import { getToken } from "../services/auth";

export const token = () => ({ Authorization: `Bearer ${getToken()}` });
