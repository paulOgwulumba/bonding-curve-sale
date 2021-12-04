# WalletConnect QR Code Modal

QR Code Modal for WalletConnect

This is a fork of [`@walletconnect/qrcode-modal`](https://www.npmjs.com/package/@walletconnect/qrcode-modal) specifically for the [Algorand blockchain](https://developer.algorand.org/).

For more details, read the [documentation](https://docs.walletconnect.org)

```js
import WalletConnectQRCodeModal from "algorand-walletconnect-qrcode-modal";

/**
 *  Get URI from WalletConnect object
 */
const uri = connector.uri;

/**
 *  Open QR Code Modal
 */
WalletConnectQRCodeModal.open(uri);

/**
 *  Close QR Code Modal
 */
WalletConnectQRCodeModal.close();
```
