import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Mushaf Platform"
              className="nav-logo"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="brand-text">Mushaf Platform</span>
          </Link>
          <button
            className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
          {user ? (
            <>
              <div className="nav-links">
                <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                  Quran
                </Link>
                <Link to="/search" className={isActive("/search") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                  Search
                </Link>
                <Link to="/bookmarks" className={isActive("/bookmarks") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                  Bookmarks
                </Link>
                <button onClick={toggleTheme} className="btn-icon" title="Toggle theme">
                  {isDark ? '☀️' : '🌙'}
                </button>
              </div>

              <div className="user-menu">
                <span className="user-name">
                  {user.firstName} {user.lastName}
                </span>
                <span className="user-role">({user.role})</span>
                <button onClick={logout} className="btn btn-logout">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="nav-links">
              <Link to="/login" className={isActive("/login") ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
