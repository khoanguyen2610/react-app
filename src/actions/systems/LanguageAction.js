import { LanguageActionType } from 'my-constants/action-types';

import LanguageService from 'my-services/systems/LanguageService'

export const changeLanguage = (lang_code) => {
    return (dispatch) => {
        return LanguageService.getLanguage(lang_code).then(res => {
            dispatch({
                type: LanguageActionType.ON_CHANGE_LANGUAGE,
                payload: res,
                lang_code: lang_code
            })
        })
    }
}
