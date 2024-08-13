import React from 'react'
import NavBar from '../components/navBar'
import ProductList from '../components/etsyPicks'
import ProductGrid from '../components/productCard'
import { Divider } from '@mui/material'

const SearchPage = () => {
  return (
    <div>
      <NavBar />
      <ProductList />
    </div>
  );
}

export default SearchPage;
