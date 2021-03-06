import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';

const initialState: Tutorial = {
    name: 'Go to Google!',
    url: 'http://www.google.ro'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch(action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}