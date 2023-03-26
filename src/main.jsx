import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import {  legacy_createStore as createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducers from './reducers'
import { GoogleOAuthProvider } from "@react-oauth/google"
import 'tw-elements';

const client_id = "134073754356-2368ql92atlsqi9jm4uatqtf268kb3oc.apps.googleusercontent.com"

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  


        <BrowserRouter>

        <GoogleOAuthProvider clientId={client_id}>
      
          <Provider store={store}>

          <App />

          </Provider>

          </GoogleOAuthProvider>

        </BrowserRouter>

  
)
