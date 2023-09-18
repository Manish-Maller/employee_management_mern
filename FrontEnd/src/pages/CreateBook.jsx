import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [book_name, setBookName] = useState("");
  const [book_description, setBookDescription] = useState("");
  const [book_price, setBookPrice] = useState("");
  const [book_published_year, setPublishedYear] = useState("");
  const [book_author, setBookAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      book_name,
      book_description,
      book_author,
      book_published_year,
      book_price,
    };

    setLoading(true);
    axios
      .post("http://localhost:5506/api/", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: 'success' });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("An Error Occured Please Check Console", { variant: 'error' });
        setLoading(false);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-3xl my-4 text-gray-500">Book Title</label>
          <input
            type="text"
            value={book_name}
            onChange={(e) => setBookName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-3xl my-4 text-gray-500">
            Book Description
          </label>
          <input
            type="text"
            value={book_description}
            onChange={(e) => setBookDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-3xl my-4 text-gray-500">Book Author</label>
          <input
            type="text"
            value={book_author}
            onChange={(e) => setBookAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-3xl my-4 text-gray-500">
            Book Published Year
          </label>
          <input
            type="text"
            value={book_published_year}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-3xl my-4 text-gray-500">Book Price</label>
          <input
            type="text"
            value={book_price}
            onChange={(e) => setBookPrice(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-200 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
