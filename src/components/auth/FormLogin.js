import React from 'react';


class FormLogin extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { loggingIn, handleSubmit , submitting} = this.props;
        // const { username, password, submitted } =  this.state;
        return (
            <div className=" login" style={{ backgroundColor : 'transparent' }}>
                <div className="logo">
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>
                <div className="content">
                    <form className="login-form" action="index.html" method="post">
                        <h3 className="form-title font-green">Login to VW3 Application</h3>
                        <div className="alert alert-danger display-hide">
                            <button className="close" data-close="alert" />
                            <span> Enter any username and password. </span>
                        </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9">Username</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" /> </div>
                        <div className="form-group">
                            <label className="control-label visible-ie8 visible-ie9">Password</label>
                            <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" /> </div>
                        <div className="form-actions text-center">
                            <button type="submit" className="btn green uppercase">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


export default FormLogin

