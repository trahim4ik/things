import { Member } from "@domain/models";

export interface AuthStateModel {
    token: string | null;
    username: string | null;
    members: Member[];
}
