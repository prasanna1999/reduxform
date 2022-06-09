import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { Provider } from "react-redux";
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Form />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
