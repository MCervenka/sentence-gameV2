import {POST_VALUE, DESTROY_VALUES} from './types';

export const postValue = (formValues) => {
    return {type: POST_VALUE, payload: formValues};
};

export const destroyValues = () => {
    return {type: DESTROY_VALUES}
}