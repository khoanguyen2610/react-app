import React from 'react';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import MenuItem from '@material-ui/core/MenuItem';

import { changeLanguage } from 'my-actions/systems/LanguageAction';
import { renderDropzone, renderEditor, renderRadioGroup, renderSelectField, renderTextField } from 'my-utils/components/redux-form/render';


class FormLogin extends React.Component {
    handleChangeLanguage = _ => {

        console.log(this.props.initialValues);
        // this.props.changeLanguage(this.props.initialValues.lang_code)
    }

    render() {
        const { t } = this.props
        // console.log(this.props);
        return (
            <div className=" login" style={{ backgroundColor : 'transparent' }}>
                
                <button type="button" onClick={_ => this.props.changeLanguage("en")}>Change Language To English</button>
                <button type="button" onClick={_ => this.props.changeLanguage("vi")}>Change Language To Vietnam</button>
                <div className="logo">
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
                <div className="content">
                    <form className="login-form" >
                        <h3 className="form-title font-green">{t("Login to VW3 Application")}</h3>
                        <div className="alert alert-danger display-hide">
                            <button className="close" data-close="alert" />
                            <span> Enter any username and password. </span>
                        </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9">Username</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" />
                            <Field name="text" component="input" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9">Password</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" />
                        </div>
                        <div className="form-group">
                            <Field name="lang_code" component="select" className="form-control" onChange={this.handleChangeLanguage}>
                                <option value="vi">Tiếng Việt</option>
                                <option value="en">English</option>
                            </Field>
                        </div>
                        <div className="form-actions text-center">
                            <button type="submit" className="btn green uppercase">{t("Login")}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     // initialValues: state.item.data
// });



const mapStateToProps = state => {
    let initialValues = {}
    if(state.form.form_login) {
        initialValues = state.form.form_login.values;
    }
    console.log(state.form.form_login);
    return {initialValues}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: params => {dispatch(changeLanguage(params))}
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withTranslation(),
    reduxForm({form: 'form_login'})
)(FormLogin);


