import './test'

if (module.hot) {
  module.hot.accept('./test', () => {
    console.log('it works!')
  })
}


import React from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { Root } from './containers/root'

ReactDom.render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    ReactDom.render(
      <AppContainer>
        <Root/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
