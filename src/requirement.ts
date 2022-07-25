/**
 * Simple Monad to reduce duplicate code and check if certain values contain
 * certain properties
 */
class Requirement {
    constructor(
        /**
         * Currently bound value
         */
        private _value: any,
    ) {
    }

    /**
     * Returns the currently bound value.
     */
    public getValue() {
        return this._value;
    }

    /**
     * Binds a new value, and checks whether it should run the function provided
     * @param func the function that will provide the new value
     */
    public bind(func: any): Requirement {
        if (this._value === null)
            return this;

        this._value = func(this._value);
        return this;
    }

    /**
     * Checks if the current bound value has certain variables
     * @param variables The values to check for
     */
    public check(...variables: string[]): Requirement {
        if (this._value !== null)
            for (const variable of variables)
                if (!this._value[variable])
                    this._value = null;

        return this;
    }
}

export default Requirement;
