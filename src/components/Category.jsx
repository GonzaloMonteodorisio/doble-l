import React, { Component } from 'react';
import './category.css';

class Category extends Component {
    render() {
        return (
            <li className="nav-item li__NavBar--item1">
                <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="./index.html"
                >  
                    {this.props.category}
                </a>
            </li>
        ); 
    }
  
}

export default Category;