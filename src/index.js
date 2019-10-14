import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from  'react-redux'
import { createStore } from 'redux'

import App from './components'
import reducers, {initState} from './redux/reducers'

import './styles/styles.scss'

const store = createStore(reducers, initState)

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
);

