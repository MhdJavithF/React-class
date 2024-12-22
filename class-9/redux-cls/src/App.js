import { Counter } from './Component/Counter';
import './App.css';
import store from './Store/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
