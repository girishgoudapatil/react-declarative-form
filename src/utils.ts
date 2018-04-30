import { ValueMap } from './types';

export const isDefined = (key: string, values: ValueMap) => {
    return (
        key in values &&
        values[key] !== undefined &&
        values[key] !== null &&
        values[key] !== ''
    );
};
