import React from 'react';
import Popup from 'reactjs-popup';
import './PopupWalletConnect.scss';
import ClickToSelect from '@mapbox/react-click-to-select';
import CloseIcon from '../../../../assets/Dashboard-Icons/close-tab.svg';
import { WalletLink } from '../../connectors/Connectors';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
interface PopupWalletConnectProps {
    onClose: any
    open: any
    isTeam: boolean
}
const PopupWalletConnect = ({ onClose, open, isTeam } : PopupWalletConnectProps) => {

  const tryActivateWallet = async (connector) => {

    activate(connector, undefined, true).then(res => {
      console.log(res);
    }).catch(error => {
      if (error instanceof UnsupportedChainIdError) {
        activate(connector);
      }
    });
  };

  const { activate } = useWeb3React();

  return (<Popup open={open} onClose={onClose}>
    <div className="ShareContainer">

      <div className="ShareHeader">
        <div className="ShareName">
          <button onClick={ () => tryActivateWallet(WalletLink)}>Connect</button>
        </div>
        <div className="ShareClose"><img src={CloseIcon} onClick={e => { onClose(false); }} alt="Close" /></div>
      </div>

      <div className="ShareBody">
        <div>
            Wallet
        </div>
      </div>

      <div className="ShareFooter">
        <ClickToSelect containerElement="div">
          <p>Loading </p>
        </ClickToSelect>
        <div className="ShareCopy">
          Copy
        </div>
      </div>
    </div>
  </Popup>);
};

export default PopupWalletConnect;