import React from 'react'

import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
const BookTable = ({books}) => {
  return (
    <table className="w-full border-seperate border-spacing-2">
    <thead>
      <tr>
        <th className="border border-slate-600 rounded-md">No</th>
        <th className="border border-slate-600 rounded-md">Book Name</th>
        <th className="border border-slate-600 rounded-md">
          Book Description
        </th>
        <th className="border border-slate-600 rounded-md max-md:hidden">
          Book Author
        </th>
        <th className="border border-slate-600 rounded-md">Book Price</th>
        <th className="border border-slate-600 rounded-md max-md:hidden">
          Book Published Year
        </th>
        <th className="border border-slate-600 rounded-md">Operations</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book, index) => 
      (
        <tr key={book._id} className="h-8">
          <td className="border border-slate-700 rounded-md text-center">
            {index + 1}
          </td>
          <td className="border border-slate-700 rounded-md text-center">
            {book.book_name}
          </td>
          <td className="border border-slate-700 rounded-md text-center">
            {book.book_description}
          </td>
          <td className="border border-slate-700 rounded-md text-center max-md:hidden">
            {book.book_author}
          </td>
          <td className="border border-slate-700 rounded-md text-center">
            {book.book_price}
          </td>
          <td className="border border-slate-700 rounded-md text-center max-md:hidden">
            {book.book_published_year}
          </td>
          <td className="border border-slate-700 rounded-md text-center">
            <div className="flex justify-center gap-x-4">
              <Link to={`/show/${book._id}`}>
                <BsInfoCircle className="text-2xl text-green-800" />
              </Link>
              <Link to={`/update/${book._id}`}>
                <AiOutlineEdit className="text-2xl text-yellow-800" />
              </Link>
              <Link to={`/delete/${book._id}`}>
                <MdOutlineDelete className="text-2xl text-red-800" />
              </Link>
            </div>
          </td> 
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default BookTable