import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../../lib/context/AuthContext';

export default function BaseLayout() {
  const { token, userName } = useAuth();

  return (
    <>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            <img src="/assets/images/logo.png" width={100} height={20} />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {token && (
              <li>
                <Link to="/products">Product</Link>
              </li>
            )}
            <li>
              {token ? (
                <Link to="/logout">Logout</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
      {/* Footer */}
      <div className="max-w-6xl mx-auto">
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
          <aside>
            <img src="/assets/images/logo.png" width={100} height={20} />
            <p>
              Green Global Sumatera.
              <br />
              Providing reliable tech since 1992
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
      {/* End Footer */}
    </>
  );
}
