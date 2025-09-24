import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { productCreate } from '../../lib/api/ProductApi';
import { alertError, alertSuccess } from '../../lib/util/alert';

export default function ProductCreate() {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      await alertError('You must be logged in.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    if (file) {
      formData.append('image', file);
    }

    try {
      const response = await productCreate(token, formData);
      const responseBody = response.data;

      if (response.status === 201) {
        await alertSuccess(responseBody.message);
        navigate('/products');
      } else {
        await alertError(responseBody.message);
      }
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
          <legend className="fieldset-legend">Page details</legend>

          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered"
            placeholder="My awesome name"
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
            <Link to={'/product'} className="btn btn-outline">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
