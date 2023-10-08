export class BaseEntry<T> {

    constructor(fields?: Partial<T>) {
        if (fields) {
            Object.assign(this, fields);
        }
    }

}
