import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Product from "../components/HomePage";
import {
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Select,
  Title,
} from "../helpers/style";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="item-container">
      <Link className="btn btn-light my-3" to="/">
        Back
      </Link>
      <Container>
        <FilterContainer>
          <Title>Product: {cat}</Title>
          <Filter>
            <FilterText>Filter by:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>Color</Option>
              <Option>black</Option>
              <Option>blue</Option>
              <Option>brown</Option>
              <Option>green</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort by:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="terbaru">Terbaru</Option>
              <Option value="tertinggi">Harga (Terendah)</Option>
              <Option value="terendah">Harga (Tertinggi)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <Product cat={cat} filters={filters} sort={sort} />
      </Container>
    </div>
  );
};

export default ProductList;
