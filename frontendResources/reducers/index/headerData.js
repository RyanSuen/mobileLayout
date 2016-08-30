/**
 * Created by ryan on 16/8/25.
 */

import * as HEADER_ACTIONS_TYPE from '../../constants'

let init = {
    todo: 'todo'
};

export default function headerData( state = init, action ) {
    switch( action ) {
        case HEADER_ACTIONS_TYPE.EDIT:
            return Object.assign(
                {},
                state,
                action.editData
            );
        break;
        case HEADER_ACTIONS_TYPE.LAYOUT_EDIT:
            return Object.assign(
                {},
                state,
                action.layoutEditData
            );
        break;
        default:
            return state;
    }
}