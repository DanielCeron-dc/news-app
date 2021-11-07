import { useEffect, useState } from "react";

interface IValue {
    city: string;
    info: string;
}

class localStorageList {
    private static values: IValue[] | undefined = undefined;
    static key: string = '';

    public static getValues(key: string): IValue[] {
        if (!localStorageList.values) {
            localStorageList.values = JSON.parse(localStorage.getItem(key) || '[]');
            localStorageList.key = key;
        }
        return localStorageList.values??[];
    }

    public static addValue(value: IValue) {
        localStorageList.values?.push(value);
        this.save();
    }

    public static clean() {
        localStorageList.values = [];
        localStorageList.save();
    }

    public static save() {
        localStorage.setItem(localStorageList.key, JSON.stringify(this.values));
    }

    public static setValues(values: IValue[]) {
        localStorageList.values = values;
        localStorageList.save();
    }
}


export const useLocalStorage = (key: string) => {
    const [values, setValues] = useState(localStorageList.getValues(key));
    
    useEffect(() => {
        localStorageList.key = key;
        localStorageList.setValues(values);
        localStorageList.save();
    }, [values]);
    
    return {
        values,
        setValues,
    };
}; 


export default localStorageList;