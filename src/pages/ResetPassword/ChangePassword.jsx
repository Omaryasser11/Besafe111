import React, { useState } from 'react';
import "./ChangePassword.scss"
const ResetPasswordForm = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if new password and confirm password match
        if (newPassword !== confirmPassword) {
            setError('New password and confirm password do not match');
            return;
        }

        // Reset password logic
        // Here you would typically make an API call to reset the password
        // For the sake of example, let's just log the new password to the console
        console.log('New password:', newPassword);

        // Display success message
        setMessage('Password reset successfully');

        // Reset form fields
        setNewPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <div className="Restform col-12">
            <h2>Enter New Password</h2>
            {message && <div className="message">{message}</div>}
            {error && <div className="error">{error}</div>}
            {!message && (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">

                        <input
                            className='col-12'
                            placeholder='New Password'
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">

                        <input className='col-12'
                            placeholder='Confirm Password'
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className='btn col-12' type="submit">Reset Password</button>
                </form>
            )}
        </div>
    );
};

export default ResetPasswordForm;
