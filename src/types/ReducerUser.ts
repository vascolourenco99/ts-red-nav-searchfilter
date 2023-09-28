import { User } from "./User";

export interface State {
    data: User[];
    originalData: User[];
    search: string;
}

export type Action =
    | { type: "SET_DATA"; payload: User[] }
    | { type: "SET_ORIGINAL_DATA"; payload: User[] }
    | { type: "SET_SEARCH"; payload: string };
