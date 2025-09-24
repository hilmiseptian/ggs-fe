import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productDetail } from '../../lib/api/ProductApi';
import { alertError } from '../../lib/util/alert';
import { useEffectOnce } from 'react-use';

export default function ProductView() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await productDetail(token, { id });
      const { data } = response.data;
      setProduct(data);
    } catch (err) {
      await alertError(err.response?.data?.message || err.message);
      if (err.response?.status === 401) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  }

  useEffectOnce(() => {
    fetchProduct();
  });

  if (loading) {
    return (
      <div className="text-center mt-10 text-lg font-semibold">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 bg-base-200 px-6 mt-4 mb-4 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Product Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image section */}
        <div className="flex justify-center">
          <img
            src={
              import.meta.env.VITE_STORAGE_PATH + product.image ||
              '/placeholder.png'
            }
            alt={product.name}
            className="max-h-80 rounded-lg shadow-md object-contain"
          />
        </div>

        {/* Info section */}
        <div>
          <p className="mb-4">
            <span className="font-bold">Name:</span> {product.name}
          </p>
          {product.description && (
            <p className="mb-4">
              <span className="font-bold">Description:</span>{' '}
              {product.description}
            </p>
          )}
          <div className="flex justify-end gap-2 mt-6">
            <Link to="/products" className="btn btn-outline">
              Back
            </Link>
            <Link
              to={`/products/${product.id}/edit`}
              className="btn btn-primary">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
