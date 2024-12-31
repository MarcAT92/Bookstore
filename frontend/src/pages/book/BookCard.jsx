import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from '../../utils/getImgUrl';

import { Link } from 'react-router-dom';
import { useDispatch } from'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }
  return (
    <div className="book-card rounded-lg shadow-md transition-shadow duration-300 overflow-hidden">
      <Link to={`/books/${book._id}`} className="flex flex-col sm:flex-row gap-4">
        {/* Image section */}
        <div className="flex-shrink-0 border rounded-md overflow-hidden">
          <img
            src={`${getImgUrl(book?.coverImage)}`}
            alt={book?.title} // Improved alt text for accessibility
            className="w-full h-64 object-cover transition-transform duration-200 hover:scale-105 rounded-md"
          />
        </div>

        {/* Text section */}
        <div className="flex flex-col justify-between p-4">
          <h3 className="text-lg font-semibold hover:text-blue-600 mb-2">
            {book?.title}
          </h3>
          <p className="text-gray-600 mb-2 line-clamp-3">
            {book?.description.length > 80 ? `${book.description.slice(0, 80)}...` : book.description}
          </p>
          <p className="font-medium mb-4">
            ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
          </p>
          <div className="flex justify-center mt-auto"> 
            <button 
            onClick={(e) => {
              e.preventDefault(); 
              handleAddToCart(book);
            }}
            className="btn-primary px-4 py-2 flex items-center gap-1 transition-colors duration-200">
              <FiShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BookCard;
