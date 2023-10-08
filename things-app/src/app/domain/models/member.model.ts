import { BaseEntry } from "@domain/base";

export class Member extends BaseEntry<Member> {
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public password!: string;
}
