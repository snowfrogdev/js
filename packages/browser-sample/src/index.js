import LogtoClient from '@logto/browser';

import { endpoint, appId } from './consts';
import Callback from './pages/Callback';
import Home from './pages/Home';

import './index.scss';

const logtoClient = new LogtoClient({ endpoint, appId });
const app = document.querySelector('#app');

// Could replace this with a formal router solution
const isCallback = window.location.pathname.startsWith('/callback');
const render = isCallback ? Callback : Home;

render(app, logtoClient);
