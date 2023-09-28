import { User } from "./User";

export type RootStackParamList = {
    Home: undefined;
    Profile: { user: User };
};