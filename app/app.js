const express = require("express");
const {globalErrHandler,notFoundErr} = require('../middlewares/globalErrHandler')
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");
const academicYearRouter = require("../routes/academics/academicYearRouter");

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json()); // pass incoming jsons
//Routes
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);

app.use(notFoundErr); 
app.use(globalErrHandler);

module.exports = app;
