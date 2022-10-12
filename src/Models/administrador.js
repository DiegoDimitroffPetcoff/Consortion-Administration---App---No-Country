//const mongoose = require('mongoose');
import mongoose from "mongoose";


const adminSchema = new mongoose.Schema({
      nombre: {
        type: String,
        required: true
      },
      apellidos: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password:{
        type: String,
        required:true
      },
      confirmarPassword:{
        type: String,
        required:true
      }
      
});

export default adminSchema;