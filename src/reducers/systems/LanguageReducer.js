import { LanguageActionType } from 'my-constants/action-types';
import i18n from '../../i18n'
let defaultState = {
    lang_code: null,
    resources: {}
}

const LanguageReducer = (state = defaultState, action) => {
	switch(action.type){
		case LanguageActionType.ON_CHANGE_LANGUAGE:
			i18n.removeResourceBundle(action.lang_code, "translation")
			i18n.addResourceBundle(action.lang_code, "translation", action.payload)
			i18n.reloadResources(action.lang_code, "translation")
			i18n.changeLanguage(action.lang_code)
			return {...state, resources: action.payload, lang_code: action.lang_code};
		default:
			return state;
	}
}

export default LanguageReducer;