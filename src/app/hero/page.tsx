"Use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faExpandArrowsAlt, faHeart, faShoppingBag, faStar } from '@fortawesome/free-solid-svg-icons';
import  "./page.css"
import Link from 'next/link';
const App: React.FC = () => {
  return (
    <div className="container bg-white">
    <nav className="navbar navbar-expand-md navbar-light bg-white">
<div className="container-fluid p-0">
  <span className="border-red pe-2">Rami</span>Store

<button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#myNav"
  aria-controls="myNav"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <FontAwesomeIcon icon={faBars} />
</button>
<div className="collapse navbar-collapse" id="myNav">
  <div className="navbar-nav ms-auto">
    <Link className="nav-link " aria-current="page" href="#">
      All
    </Link>
    <Link className="nav-link" href="/men">
    Men's   </Link>
    <Link className="nav-link" href="/women">
   Women's

    </Link>
   
    <Link className="nav-link" href="/assiore">
      Accessories
    </Link>
    <Link className="nav-link" href="/costume">
      Cosmetics
    </Link>
    <Link className="nav-link" href="/add-product">
      Add product
    </Link>

  </div>
          </div>
      </div>
  </nav>
  </div>

  )}




export default App;
