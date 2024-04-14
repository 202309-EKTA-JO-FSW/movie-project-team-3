import React, { useState } from "react";
import Link from 'next/link';

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    borderBottom: '1px solid #e2e8f0',
    zIndex: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    backdropFilter: 'blur(8px)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '100%',
    padding: '0 1rem',
    margin: 'auto',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
  },
  logo: {
    marginRight: '3rem',
  },
  ul: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  link: {
    fontWeight: '900',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'black',
    marginRight: '60px',
  },
  searchInput: {
    marginLeft: 'auto',
    padding: '0.7rem 1rem', 
    border: '1px solid #ccc',
    borderRadius: '10px',
    outline: 'none',
    height: '2.4rem', 
    width: '240px', 
  },
};

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search?query=${searchTerm}`;
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.flexContainer}>
          <Link href="/">
            <img src="./1.jpg" className="h-8 mr-4" alt="Logo" style={styles.logo} />
          </Link>
          <Link href="/" style={styles.link}>
            <span>Home</span>
          </Link>
          <Link href="/movies" style={styles.link}>
            <span>Movies</span>
          </Link>
          <Link href="/actors" style={styles.link}>
            <span>Actors</span>
          </Link>
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={styles.searchInput}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
