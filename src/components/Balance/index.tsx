import React, { useEffect, useState } from 'react';
import { Button, List, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { CSVLink } from "react-csv";

import { ITotalBalanceBTC } from '../../types';
import './Balance.css'

interface BalanceProps {
    balance: ITotalBalanceBTC;
}

export const Balance = ({balance}: BalanceProps) => {
    const [data, setData] = useState<any[]>([]);


   useEffect(() => {
        const keys = Object.keys(balance);
        const values = Object.values(balance);
        setData(s => [keys, values]);
   }, [balance]);

    return (
        <div className="balance-container">
            <List
                size="large"
                bordered
            >
                <List.Item>
                    <Typography>Balance</Typography>
                    {balance.balance_int}
                </List.Item>
                <List.Item>
                    <Typography>Input</Typography>
                    {balance.input_count}
                </List.Item>
                <List.Item>
                    <Typography>Output</Typography>
                    {balance.output_count}
                </List.Item>
            </List>
            <CSVLink data={data}>
                <Button 
                    style={{marginTop: '20px'}}
                    type="primary" 
                    shape="round" 
                    icon={<DownloadOutlined />} 
                    size="large"
                >
                    Download CSV
                </Button>
            </CSVLink>
        </div>
    )
};