import './App.css';
import ProductListPage from './Pages/ProductListPage';
import CartPage from './Pages/CartPage';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="py-10 bg-gray-100 App">
      <ProductListPage setOpen={setOpen} />
      <CartPage open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
