import './App.css';
import ProductList from './components/ProductList';

function App() {

const list = [
  {
    name: 'bread',
    price: '$4',
    quantity: 1zz
  },
  {
    name: 'ham',
    price: '$10',
    quantity: 1
  },
  {
    name: 'mayo',
    price: '$6',
    quantity: 1
  }

]


  return (
    <div className="App">
 <ProductList />
    </div>
  );
}

export default App;
