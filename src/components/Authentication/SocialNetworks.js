import React from 'react';

const SocialNetworks = () => {
    return (
        <div style={{ float: 'left', marginLeft: 0}}>
        <table>
            <tr>
                <td>
                    <button class="ui facebook button" style={{marginBottom: 5, width: '50%'}} type="button">
                    <i class="facebook icon"></i>
                        Continue with Facebook
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="ui twitter button" style={{marginBottom: 5, width: '50%'}} type="button">
                    <i class="twitter icon"></i>
                    Continue with Twitter
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="ui google plus button" style={{marginBottom: 5, width: '50%'}} type="button">
                        <i class="google plus icon"></i>
                        Continue with Google
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="ui linkedin button" style={{marginBottom: 5, width: '50%'}} type="button">
                        <i class="linkedin icon"></i>
                        Continue with LinkedIn
                    </button>
                </td>
            </tr>
            <tr>
                <td>
                    <button class="ui instagram button" style={{marginBottom: 5, width: '50%'}} type="button">
                        <i class="instagram icon"></i>
                        Continue with Instagram
                    </button>
                </td>
            </tr>
        </table>
            
    </div>
    );
}

export default SocialNetworks;