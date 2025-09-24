import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productDetail, productUpdate } from '../../lib/api/ProductApi';
import { alertError, alertSuccess } from '../../lib/util/alert';
import { useEffectOnce } from 'react-use';

export default function ProductEdit() {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await productDetail(token, { id });
      const { data, message } = response.data;
      console.log(data);

      setName(data.name || '');
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

  async function handleSubmit(e) {
    e.preventDefault();

    if (!token) {
      await alertError('You must be logged in.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('_method', 'PATCH');
    if (file) {
      formData.append('image', file);
    }

    try {
      const response = await productUpdate(token, id, formData);
      const responseBody = response.data;

      await alertSuccess(responseBody.message);
      navigate('/products');
    } catch (err) {
      await alertError(err.response?.data?.message || err.message);
    }
  }

  return (
    <div className="max-w-6xl mx-auto py-8 bg-base-200 px-4 mt-4 mb-4">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Edit Product</legend>

          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label">Upload File</label>
          <input
            type="file"
            className="file-input file-input-bordered"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="flex justify-end gap-2 mt-6">
            <Link to="/products" className="btn btn-outline">
              Cancel
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
