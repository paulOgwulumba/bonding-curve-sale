const User = {
    OMEGA_USER: 'Omega User',
    NORMAL_USER: 'Normal User',
}

/**
 * @desc Enum holding names of all possible views.
 */
const Views = {
    INDEX_VIEW: 'index',
    BUY_TOKEN_VIEW: 'buy token',
    CONNECT_ACCOUNT: 'connect account',
    CREATE_CONTRACT: 'create contract',
    OMEGA_LOG_IN: 'omega log in'
}

const API_BASE_URL = 'https://dapp-api-service.herokuapp.com'

const Provider = {
  MAIN_NET: 'MainNet',
  TEST_NET: 'TestNet',
  LOCAL_HOST: 'LocalHost'
}

export { User, Views, API_BASE_URL, Provider }