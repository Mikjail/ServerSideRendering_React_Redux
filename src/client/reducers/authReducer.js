import { FETCH_CURRENT_USER } from '../actions';


export default function(state = null, actions ){

    switch(actions.type){
        case FETCH_CURRENT_USER:
            return actions.payload.data || false;
        default: 
            return state;
    }
}