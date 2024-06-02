import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ForgetPassword.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send email for password reset
        console.log('Submit email:', email);
        // You can add more logic here, like sending the email for password reset
    };

    return (

        <div className="containerForm col-10">
            <div >
                {/* <FontAwesomeIcon className='icon' icon={faLock} /> */}
            </div>
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div className="text-center">
                            <FontAwesomeIcon className='icon' icon={faLock} />
                            <h2 className="text-center">Forgot Password?</h2>
                            <p className='pr'>You can reset your password here.</p>
                            <div className="panel-body">
                                <form id="register-form" role="form" autoComplete="off" className="form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input id="email" name="email" placeholder="email address" className="form-control" type="email" value={email} onChange={handleEmailChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <Link to="/EnterOTP" className="btn btn-lg btn-primary btn-block">
                                            Reset Password
                                        </Link>
                                        {/* <input name="recover-submit" className="btn btn-lg btn-primary btn-block" value="Reset Password" type="submit" /> */}
                                    </div>
                                    <input type="hidden" className="hide" name="token" id="token" value="" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ForgotPasswordForm;
