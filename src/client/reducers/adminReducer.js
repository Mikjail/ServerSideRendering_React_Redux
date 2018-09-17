import { FETCH_ADMINS } from '../actions';

export default (state = [], actions ) => {
    switch(actions.type){
        case FETCH_ADMINS:
            return actions.payload.data;
        default:
            return state;
    }
}