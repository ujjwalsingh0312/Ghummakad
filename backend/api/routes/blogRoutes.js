import express from "express";
import blogController from "../controllers/blogController.js";
// const express = require('express');
// const blogController = require("../controllers/blogController")

const blogRoutes = express.Router();

blogRoutes.get('/read_by_category',blogController.ReadbyCategory);
blogRoutes.post('/read_by_user',blogController.ReadbyUser);
blogRoutes.post('/compose',blogController.Compose);
blogRoutes.delete('/delete_blog',blogController.Delete);


export default blogRoutes;