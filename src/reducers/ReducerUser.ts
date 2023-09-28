import { State, Action } from "../types";

export const initialState: State = {
    data: [],
    originalData: [],
    search: "",
};

export const reducerUsers = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                data: action.payload,
            };
        case "SET_ORIGINAL_DATA":
            return {
                ...state,
                originalData: action.payload,
            };
        case "SET_SEARCH":
            if (action.payload === "") {
                return {
                    ...state,
                    search: action.payload,
                    data: state.originalData,
                };
            } else {
                return {
                    ...state,
                    search: action.payload,
                };
            }
        default:
            return state;
    }
};