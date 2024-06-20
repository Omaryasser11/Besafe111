import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ChangePassword.scss';
import baseUrl from '../../BaseUrl';
import Swal from 'sweetalert2';

const ChangePasswordForm = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    // Retrieve email and otp from location state
    const { email, otp } = location.state || {};

    // Redirect to EnterOTP page if email or otp is missing
    if (!email || !otp) {
        navigate('/forgot-password');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        // Check if new password and confirm password match
        if (newPassword !== confirmPassword) {
            Swal.fire({
                title: "Passwords do not match",
                text: "Please Enter Matching Password",
                icon: "question"
            });
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await baseUrl.post('/account/resetPassword', {
                email: email,
                otp: otp,
                password: newPassword,
            });

            if (response.status === 200) {
                setMessage('Password reset successfully');
                Swal.fire({
                    title: "Good job!",
                    text: "Password reset successfully",
                    icon: "success"
                });
                setTimeout(() => {
                    navigate('/login', { replace: true });
                }, 3000); // Redirect to login page after 3 seconds
            } else {
                const errorText = response.data.message || 'An error occurred';
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorText,

                });
                setError(errorText);
            }
        } catch (err) {
            if (err.response) {
                if (err.response.status === 401) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Password reset successfully",
                        icon: "success"
                    });
                    setError('Sucess');
                    setTimeout(() => {
                        navigate('/login', { replace: true });
                    }, 3000); // Redirect to login page after 3 seconds
                } else {
                    const errorText = err.response.data.message || 'Error resetting password';
                    setError(errorText);
                }
            } else {
                Swal.fire({
                    title: "Network error?",
                    text: "Please try again.",
                    icon: "question"
                });
                setError('Network error. Please try again.');
            }
            console.error('Error during password reset:', err);
        }
    };

    return (
        <div className="ChangePasswordForm col-12">
            <h2>Enter New Password</h2>
            {message && <div className="message">{message}</div>}
            {error && <div className="error">{error}</div>}
            {!message && (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            placeholder='New Password'
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            placeholder='Confirm Password'
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="btn" type="submit">Reset Password</button>
                </form>
            )}
        </div>
    );
};

export default ChangePasswordForm;
