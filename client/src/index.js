import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { productFetch } from './features/cart/cartSlice'
import { getPreviousBuy } from './features/previousBuy/previousBuySlice'
import { checkLoggedIn } from './features/user/userSlice'
const root = ReactDOM.createRoot(document.getElementById('root'))

store.dispatch(productFetch())
store.dispatch(getPreviousBuy())
store.dispatch(checkLoggedIn())
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
)
