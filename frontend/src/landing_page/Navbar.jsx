import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);

  // Read auth state from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    if (token && name) setUserName(name);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setUserName(null);
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/stocklab.png"
            style={{ width: "150px", height: "40px" }}
            alt="Logo"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

            {/* Always visible links */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>

            {/* Auth-dependent links */}
            {userName ? (
              <>
                <li className="nav-item ms-3">
                  <a
                    href={import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174"}
                    className="nav-link"
                    style={{
                      fontWeight: 700,
                      color: "#fff",
                      background: "#387ed1",
                      borderRadius: "8px",
                      padding: "6px 16px",
                      fontSize: "0.9rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Kite 🚀
                  </a>
                </li>
                <li className="nav-item ms-2">
                  <span
                    className="nav-link"
                    style={{ color: "#387ed1", fontWeight: 600 }}
                  >
                    👋 {userName}
                  </span>
                </li>
                <li className="nav-item ms-2">
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger btn-sm"
                    style={{ borderRadius: "8px", fontWeight: 600 }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ms-2">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                <li className="nav-item ms-1">
                  <Link
                    className="btn btn-primary btn-sm"
                    to="/login"
                    style={{ borderRadius: "8px", fontWeight: 600 }}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
