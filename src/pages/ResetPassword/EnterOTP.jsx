import React from 'react'
import "./EnterOTP.scss"

export default function EnterOTP() {
    return (
        <div className='BIg col-12'>
            <h1>Enter Verfiction Code</h1>
            <p>OTP sent on ....12@gmail.com</p>

            <div class="otp-field">
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input class="space" type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
                <input type="text" maxlength="1" />
            </div>
            <button className='btn'>Enter </button>
        </div>

    )
}

