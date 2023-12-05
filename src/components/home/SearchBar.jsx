import React from 'react';
import { Container, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import '../../styles/home/searchBar.css';

const SearchBar = () => {
  return (
    <Container className="search-container">
      <Form className="search-form">
        <div className="search-wrapper">
          <input type="text" placeholder="Search..." className="dark-search-input" />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
        </div>
      </Form>
    </Container>
  );
};

export default SearchBar;
