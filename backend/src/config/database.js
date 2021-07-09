const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })


mongoose.Error.messages.general.required = "The attr '{PATH}' is required."
mongoose.Error.messages.Number.min = 
    "The '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = 
    "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum = 
    "'{VALUE}'is invalid to attr '{PATH}'."