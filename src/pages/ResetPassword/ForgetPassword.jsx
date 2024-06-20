import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./ForgetPassword.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import fetchApi from "../../BaseUrl";

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await fetchApi.post('/account/sendEmailResetPassword', {
                email
            });

            if (response.status >= 200 && response.status < 300) {
                console.log('Email submitted:', email);
                navigate('/EnterOTP', { state: { email } });
            } else {
                const errorText = await response.data;
                setError(errorText.message || 'An error occurred');
            }
        } catch (err) {
            console.error('Error during fetch:', err);
            setError('Failed to send email. Please try again.');
        }
    };

    return (
        <div className="containerForm col-10">
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
                                            <input id="email" name="email" placeholder="email address" className="form-control" type="email" value={email} onChange={handleEmailChange} required />
                                        </div>
                                    </div>
                                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-lg btn-primary btn-block">Reset Password</button>
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
