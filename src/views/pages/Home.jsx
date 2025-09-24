import { useState } from 'react';
import { useEffectOnce, useLocalStorage } from 'react-use';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';
import About from '../components/About';
import Pagination from '../components/Pagination';
import { alertError } from '../../lib/util/alert';
import { productLists } from '../../lib/api/ProductApi';

export default function Home() {
  const [token] = useLocalStorage('token', '');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const fetchProducts = async (page = 1) => {
    try {
      setLoading(true);
      const response = await productLists(token, { page });
      setProducts(response.data.data);
      setCurrentPage(response.data.current_page);
      setLastPage(response.data.last_page);
    } catch (error) {
      await alertError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffectOnce(() => {
    fetchProducts();
  });

  return (
    <>
      {/* Carousel */}
      <Carousel />
      {/* End Carousel */}

      {/* About */}
      <About />
      {/* End About */}

      {/* Cards */}
      <div className="px-8">
        {loading ? (
          <div className="max-w-6xl mx-auto py-8 bg-base-200 mb-8">
            <div className="text-center py-12">Loading products...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="card bg-base-100 shadow-sm">
                  <figure>
                    <img
                      src={
                        import.meta.env.VITE_STORAGE_PATH + product.image ||
                        '/default-product.png'
                      }
                      alt={product.name}
                      className="h-48 w-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {product.name}
                      <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className="line-clamp-3">{product.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">No products found.</p>
            )}
          </div>
        )}
      </div>
      {/* End Cards */}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPageChange={fetchProducts}
      />
      {/* End Pagination */}

      {/* Contact us */}
      <Contact />
      {/* End Contact */}
    </>
  );
}
