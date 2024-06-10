import React from 'react'
import "./TopBar.scss"
import SearchInput from '../CompentsAdmin/SearchInput/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';
export default function () {
    return (
        <div className='col-10 HeaderNav'>
            <div className='ORG col-12'>
                <SearchInput />
                <div className='Icons col-4'>
                    <FontAwesomeIcon className='BarIcon' icon={faBell} />
                    <FontAwesomeIcon className='BarIcon' icon={faGear} />
                </div>
            </div>
        </div>
    )
}
