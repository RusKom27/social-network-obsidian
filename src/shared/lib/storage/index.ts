

type StorageVariable = "token" | "user_id"

export default class Storage {
    static getLocalVariable(key: StorageVariable) {
        return localStorage.getItem(key);
    }

    static setLocalVariable(key: StorageVariable, value: string) {
        localStorage.setItem(key, value);
    }

    static removeLocalVariable(key: StorageVariable) {
        localStorage.removeItem(key);
    }
}