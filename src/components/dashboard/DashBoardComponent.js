import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RefreshToken } from '../../store/actions';

const DashBoardComponent = ({content}) => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(RefreshToken());
    })

    return (<div style={{marginLeft: 150, height: 550}}> 
        {content}
    </div>)
}

export default DashBoardComponent;