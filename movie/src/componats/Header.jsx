import Link from "next/link"

function Header() {
  return (
    <div>
<nav className="navbar fixed-top bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a href="/.index.js" className="navbar-brand" >Movie</a>
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" href="/.index.js">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/.MovieList.js">Movie list</Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Actress</a>
  </li>
  
</ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

  </div>
  )
}

export default Header