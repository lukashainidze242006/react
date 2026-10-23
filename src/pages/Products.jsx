import { Link } from 'react-router-dom';

function Products() {
  const productsList = [
    { id: 1, name: 'ნოუთბუქი' },
    { id: 2, name: 'სმარტფონი' },
    { id: 3, name: 'ყურსასმენი' }
  ];

  return (
    <div>
      <h2>პროდუქტების გვერდი</h2>
      <ul>
        {productsList.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;