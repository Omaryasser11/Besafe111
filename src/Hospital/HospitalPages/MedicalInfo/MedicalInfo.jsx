import React from 'react'
import "./MedicalInfo.scss"
import ScanQrCode from '../../../pages/ScanQrCode/ScanQrCode'
export default function MedicalInfo() {
    return (
        <div className='col-12 Section2Hospital'>
            <h3>Get Patient Medical Information</h3>
            <ScanQrCode />
        </div>

    )
}
