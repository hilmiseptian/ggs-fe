import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffectOnce } from 'react-use';
import { useLocalStorage } from 'react-use';
import { productDelete, productLists } from '../../lib/api/ProductApi';
import { alertError, alertSuccess, alertConfirm } from '../../lib/util/alert';
import Pagination from '../components/Pagination';

export default function Product() {
  const [token] = useLocalStorage('token', '');
  const [loading, setLoading] = useState(true);
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchLists = async (page = 1) => {
    try {
      setLoading(true);
      const response = await productLists(token, { page });
      setLists(response.data.data); // Laravel paginate returns { data, meta }
      setCurrentPage(response.data.current_page);
      setLastPage(response.data.last_page);
    } catch (error) {
      await alertError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = await alertConfirm('Want to delete this product?');
    if (!confirmed) return;
    try {
      const response = await productDelete(token, { id });
      await alertSuccess(response.data.message || 'Deleted successfully');
      fetchLists(currentPage); // refresh same page
    } catch (err) {
      await alertError(err.response?.data?.message || err.message);
    }
  };

  useEffectOnce(() => {
    fetchLists();
  });

  return (
    <>
      <h1 className="text-green-600 text-3xl font-bold text-center my-6">
        “Supplying Quality, Connecting Industries”
      </h1>

      <div className="flex justify-between items-center max-w-6xl mx-auto mb-4">
        <h2 className="text-xl font-bold">Product List</h2>
        <Link to="/product/create" className="btn btn-primary">
          + Create
        </Link>
      </div>

      <div className="max-w-6xl mx-auto py-8 bg-base-200 px-4 mt-4 mb-4">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lists.length > 0 ? (
                  lists.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={
                                import.meta.env.VITE_STORAGE_PATH +
                                  product.image || '/default-product.png'
                              }
                              alt={product.name}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="font-bold">{product.name}</td>
                      <td>{product.description}</td>
                      <td className="space-x-2">
                        <Link
                          to={`/products/${product.id}`}
                          className="btn btn-xs btn-info">
                          View
                        </Link>
                        <Link
                          to={`/products/${product.id}/edit`}
                          className="btn btn-xs btn-warning">
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn btn-xs btn-error">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No products found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <Pagination
              currentPage={currentPage}
              lastPage={lastPage}
              onPageChange={fetchLists}
            />
          </div>
        )}
      </div>
    </>
  );
}
