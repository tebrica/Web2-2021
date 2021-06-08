import React from 'react';

const SocialNetworks = () => {
    return (
        <div style={{ float: 'left', marginLeft: 0}}>
        <table>
            <tr>
                <td>
                    <button className="ui facebook button" style={{marginBottom: 5, width: '50%'}} type="button">
                    <i className="facebook icon"></i>
                        Continue with Facebook
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button className="ui twitter button" style={{marginBottom: 5, width: '50%'}} type="button">
                    <i className="twitter icon"></i>
                    Continue with Twitter
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button className="ui google plus button" style={{marginBottom: 5, width: '50%'}} type="button">
                        <i className="google plus icon"></i>
                        Continue with Google
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button className="ui linkedin button" style={{marginBottom: 5, width: '50%'}} type="button">
                        <i className="linkedin icon"></i>
                        Continue with LinkedIn
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button className="ui instagram button" style={{marginBottom: 5, width: '50%'}} type="button">
                        <i className="instagram icon"></i>
                        Continue with Instagram
                    </button>
                </td>
            </tr>
        </table>
            
    </div>
    );
}

export default SocialNetworks;