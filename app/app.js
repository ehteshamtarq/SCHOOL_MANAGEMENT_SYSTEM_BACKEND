const express = require("express");
const {globalErrHandler,notFoundErr} = require('../middlewares/globalErrHandler')
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.json()); // pass incoming jsons
//Routes
//admin register
app.use("/api/v1/admins", adminRouter);

app.use(notFoundErr); 
app.use(globalErrHandler);

module.exports = app;
