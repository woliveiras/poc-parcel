import React from 'react';
import ReactDOM from 'react-dom';

import Input from './src/components/Input'

const App = () => (
    <>
        <h1>Hello Parcel x React</h1>
        <Input
            warning={'Esta é uma mensagem de erro'}
            error={false}
            placeholder={'Serch'} />
    </>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}