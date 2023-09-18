import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
const BookModal = ({ book, onClose }) => {
    console.log(book.book_description)
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.book_published_year}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start books-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.book_name}</h2>
        </div>
        <div className="flex justify-start books-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.book_author}</h2>
        </div>
        <p className="mt-4">AnyThing You Want to Show!</p>
        <p className="mt-4">
          Hello loveliest people in the world! I have been thinking about
          blogging at you for a while, but it is tricky because I have
          like…800,000 different emotions every day? And about half of them are
          hopeful but the other half are of the
          let’s-all-go-hide-under-the-covers / need-more-ice-cream variety, so I
          keep trying to catch myself in a happy mood to write{" "}
        </p>
      </div>
    </div>
  );
};

export default BookModal;
