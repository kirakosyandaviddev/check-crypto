import React, { useState } from 'react';
import { Input, notification, Select } from 'antd';

import './Header.css'
import { AssetTypes } from '../../types';
import { IParams } from '../../App/App';

const { Option } = Select;
const { Search } = Input


interface HeaderProps {
    onSearch: (params: IParams) => void;
}

export const Header = ({onSearch}: HeaderProps) => {
    const [asset, setAsset] = useState<AssetTypes>(AssetTypes.BTC);
    
    const handleSubmit = (value: string) => {
        if(value !== '') {
            onSearch({
                mode: asset,
                address: value
            })
        } else {
            notification.open({
                placement: 'bottomRight',
                message: 'Wallet address is required!',
            })
        }   
    };

    return (
        <div className="header-wrapper">
            <div className="input-group">
                <Input.Group compact style={{ display: 'flex' }}>
                    <Select 
                        value={asset} 
                        onChange={(value) => setAsset(value)}
                        size="large"
                    >
                        <Option value="BTC">Bitcoin</Option>
                        <Option value="ETH" disabled>Ether</Option>
                        <Option value="XLM" disabled>Stellar</Option>
                    </Select>
                    <Search
                        
                        placeholder="Wallet Address"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={handleSubmit}
                    />
                </Input.Group>
            </div>
        </div>
    )
};