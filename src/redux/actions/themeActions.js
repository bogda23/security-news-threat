import { ActionTypes } from "../constants/action-types";

export const changeTheme = (theme) =>{
    return {
        type: ActionTypes.CHANGE_THEME,
        payload: theme
    }
}
