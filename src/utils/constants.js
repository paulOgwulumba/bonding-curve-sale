/**
 * @desc Constant holding the values of the two possible users of the contract.
 */
const User = {
    /** 
     * @description The User that creates the contract.
    */
    OMEGA_USER: 'Omega User',

    /**
     * @description The user that joins the contract.
     */
    NORMAL_USER: 'Normal User',
};

/**
 * @desc Enum holding names of all possible views.
 */
const Views = {
    /** 
     * @description The first page the user sees when the application is opened.
    */
    INDEX_VIEW: 'index',

    /**
     * @description The page that the user interacts with to select a token amount and pay for it.
     */
    BUY_TOKEN_VIEW: 'buy token',

    /**
     * @description The page that the user interacts with to import or create an account to interact with the contract with.
     */
    CONNECT_ACCOUNT: 'connect account',

    /**
     * @description The page that the Omega User interacts with to create a new contract.
     */
    CREATE_CONTRACT: 'create contract',

    /**
     * @description Log in page for Omega User.
     */
    OMEGA_LOG_IN: 'omega log in'
};

/**
 * @description The Base URL for the API microservice that serves as the interface between the application and a database.
 */
const API_BASE_URL = 'https://dapp-api-service.herokuapp.com';

/**
 * @description An enum holding the values of all possible Provider networks this application could run on.
 */
const Provider = {
  /**
   * @description The Algorand main net.
   */
  MAIN_NET: 'MainNet',

  /**
   * @description The Algorand testnet.
   */
  TEST_NET: 'TestNet',

  /**
   * @description A blockchain network abstraction running on the Local Machine.
   */
  LOCAL_HOST: 'LocalHost'
};

export { User, Views, API_BASE_URL, Provider }