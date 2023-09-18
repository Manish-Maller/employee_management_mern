import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
const ViewBook = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const getBooks = async () => {
    setLoading(true);
    const response = await axios.get(`http://localhost:5506/api/${id}`);
    setBooks(response.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Book ID</span>
              <span>{books._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Book Name</span>
              <span>{books.book_name}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Book Description
              </span>
              <span>{books.book_description}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Book Author</span>
              <span>{books.book_author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Book Published Year
              </span>
              <span>{books.book_published_year}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Book Price</span>
              <span>{books.book_price}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Book Written At
              </span>
              <span>{books.createdAt}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Book Modified At
              </span>
              <span>{books.updatedAt}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBook;
