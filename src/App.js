/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './component/Greeting';
import Home from './component/Home';
import Navbar from './component/Navbar';
import store from './redux/configureStore';

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/greetings" element={<Greeting />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
