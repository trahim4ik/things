export type TypeConstructor<T> = (value: any) => T;

export function mapType<T>(res: Response, ctor: TypeConstructor<T>): T | T[] {
    const val: any = res.status === 204 || !res.json ? res : res.json();

    if (val === null) {
        return val;
    }

    if (Array.isArray(val)) {
        return val.map(x => ctor(x));
    }

    return ctor(val);
}