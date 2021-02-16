import React, { Component } from 'react';

//Components
import FacebookLogin from './FacebookLogin/'
import GoogleLogin from './GoogleLogin/'



//import config from '../../../config';

class Social extends Component{
    
    render(){
        return(
            <div>
                <h2>Facebook and Google login with ReactJs</h2>   
                <p>
                    <FacebookLogin />
                    <GoogleLogin />
                    
                </p>
            </div>
        )
    }
}

export default Social;