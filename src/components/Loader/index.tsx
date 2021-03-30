import React from 'react';
import { Spin } from 'antd'; 

const loaderWrraperStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh'
}

export const Loader = () => {
    return (
        <div style={loaderWrraperStyles}>
            <Spin size="large" />
        </div>
    )
}