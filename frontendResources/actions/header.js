/**
 * Created by ryan on 16/8/23.
 */

import * as HEADER_ACTIONS_TYPE from '../constants/index'


export function edit( editData ) {
    return {
        type: HEADER_ACTIONS_TYPE.EDIT,
        editData
    };
}

export function layoutEdit( layoutEditData ) {
    return {
        type: HEADER_ACTIONS_TYPE.LAYOUT_EDIT,
        layoutEditData
    };
}

export function preview ( previewData ) {
    return {
        type: HEADER_ACTIONS_TYPE.PREVIEW,
        previewData
    };
}