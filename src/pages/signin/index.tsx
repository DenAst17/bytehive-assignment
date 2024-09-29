/* eslint-disable */
import { useEffect, useState } from 'react';

import './index.css'
import LoginComponent from '../../components/auth/login';

function LogInPageContainer() {
    return (
        <div className="signInContainer">
            <LoginComponent />
        </div>
    );
}

export default LogInPageContainer;
