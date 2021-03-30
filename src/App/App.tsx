import React, { useState } from 'react';

import { Balance } from '../components/Balance';
import { Header } from '../components/Header';
import { AssetTypes, ITotalBalanceBTC } from '../types';
import { Api } from '../Api';

import './App.css'
import { Loader } from '../components/Loader';

export interface IParams {
  mode: AssetTypes;
  address: string;
}

function App() {
  const [totalBalance, setTotalBalance] = useState<ITotalBalanceBTC | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleSearch = async (params: IParams) => {
    setTotalBalance(null)
    setIsLoading(true);
    const {address, success}: any = await Api.get(params.address);
    if(success) { 
      setTotalBalance(address.total)
    }

    setIsLoading(false);
  }

  return (
    <div className="app-wrapper">
      <Header onSearch={handleSearch} />

      <div className="main-content">
          {isLoading && <Loader />}
        
          {totalBalance !== null && 
            <Balance balance={totalBalance} />
          }
      </div>
    </div>
  );
}

export default App;
