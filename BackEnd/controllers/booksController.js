const expressAsyncHandler = require('express-async-handler');
const Books = require('../models/booksSchema');


const getBooks = expressAsyncHandler(async(req,res)=>{
    const data = await Books.find()
    if(data){
        res.status(200).json({message:"Books Details", data:data})
    }
    res.status(404)
    throw new Error({message:"Books Details are Not Found"})
})
const postBooks = expressAsyncHandler(async(req,res)=>{
    const {book_name, book_description,book_author,book_published_year, book_price} = req.body

    if (!book_name|| !book_description|| !book_author|| !book_published_year|| !book_price){
        res.status(400)
        throw new Error("All Fields are Mandatory")
    }

    const new_books = await Books.create({
        book_name,
        book_description,
        book_author,
        book_published_year,
        book_price
    })

    res.status(201).json({message:"Books Added Successfully", data:new_books})
})

const updateBooks = expressAsyncHandler(async(req,res)=>{
    const books= await Books.findById(req.params.id)
    
    if(!(books)){
        res.status(404)
        throw new Error("Books Details Not Found")
    }

    const new_updated_data = await Books.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json({message:"Update API Created Successfully",books_details:new_updated_data})

    // res.status(200).json({message:"Update API Created Successfully"})
})

const deleteBooks = expressAsyncHandler(async(req,res)=>{
    const books= await Books.findByIdAndDelete(req.params.id)
    if (!books){
        res.status(404)
        throw new Error({message:"Books Details Not Found"})
    }
    await Books.findByIdAndRemove()
    res.status(200).json({message:"Delete API Created Successfully",data:books})
})

const getBooksByID = expressAsyncHandler(async(req,res)=>{
    const books = await Books.findById(req.params.id)
    if(!(books)){
        res.status(404)
        throw new Error("Books Details Not Found")
    }
    res.status(200).json({message:"Get Books By ID API Created Successfully",data:books})
})
module.exports = {getBooks,postBooks,updateBooks, deleteBooks,getBooksByID}