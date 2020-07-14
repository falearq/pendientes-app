import React from 'react';
import {createGlobalStyle} from 'styled-components'
import {BrowserRouter as Router, Switch, Route}
 from 'react-router-dom'
 //COMPONENTS
 import Pendientes from './pages/Pendientes.js'

const App = () => {
  return (
    <Router>
      <GlobalStyle/>  
      <Switch className='content'>
        <Route exact path='/' component={Pendientes}/>
    
      </Switch>
    </Router>
  );
}
const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td{background: transparent;border: 0;margin: 0;padding: 0;vertical-align: baseline} a{text-decoration:none}
    /*GENERALES*/
    *, *:after ,:before{
        -ms-box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-box-sizing:border-box;
        box-sizing:border-box;
    }
    .animado, a{
        -ms-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
    .wrap{
        width: 90%;
        margin-top:50%;
        
    }
   
    html,body{
        width: 100%;
        height: 100%;
    }
    body{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
`
export default App;
