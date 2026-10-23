import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>პროდუქტის დეტალები</h2>
      <p>არჩეული პროდუქტის ID: <strong>{id}</strong></p>
      <Link to="/products">უკან დაბრუნება</Link>
    </div>
  );
}

export default ProductDetail;