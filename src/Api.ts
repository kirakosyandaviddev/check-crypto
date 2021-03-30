import { notification } from "antd";

const baseURL = 'https://api.smartbit.com.au/v1/blockchain/address';

export const Api = {
    get: async (address: string) => {
        try {
            const res = await fetch(`${baseURL}/${address}`);
            return await res.json();
        } catch(err) {
            notification.open({
                placement: 'bottomRight',
                message: err.message,
            })
        }
    }
} 
