const mongoose = require('mongoose');

const booksSchema= new mongoose.Schema({
    book_name:{
        type:String,
        required:[true, 'Please Enter the Books Name']
    },
    book_description:{
        type:String,
        required:[true, 'Please Enter the Books Description']
    },
    book_author:{
        type:String,
        required:[true, 'Please Enter the Books Author']
    },
    book_published_year:{
        type:String,
        required:[true, 'Please Enter the Books Published Year']
    },
    book_price:{
        type:String,
        required:[true, 'Please Enter the Books Price']
    }


},{
    timestamps:true
})


module.exports =  mongoose.model("Books", booksSchema)