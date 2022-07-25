/**
 * Simple Monad to reduce duplicate code and check if certain values contain
 * certain properties
 */
class Requirement {
    constructor(
        private _value: any,
    ) { }

    public getValue() {
        return this._value;
    }

    public bind(func: any): Requirement {
        if (this._value === null)
            return this;

        this._value = func(this._value);
        return this;
    }

    public check(...variables: string[]): Requirement {
        if (this._value !== null)
            for (const variable of variables)
                if (!this._value[variable])
                    this._value = null;

        return this;
    }
}

export default Requirement;