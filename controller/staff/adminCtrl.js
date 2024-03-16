const AsyncHandler = require("express-async-handler");
const Admin = require("../../model/Staff/Admin");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");

//@desc Register admin
//@route POST /api/admins/register
//@acess  Private
exports.registerAdmCtrl = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const adminFound = await Admin.findOne({ email });
  if (adminFound) {
    res.json("Admin Exists");
  }
  const user = await Admin.create({
    name,
    email,
    password,
  });
  res.status(201).json({
    status: "success",
    data: user,
    message: "Admin Registered Successfully",
  });
});

//@desc     login admins
//@route    POST /api/v1/admins/login
//@access   Private
exports.loginAdminCtrl = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Admin.findOne({ email });
  if (!user) {
    return res.json({ message: "Invalid login credentials" });
  }

  if (user && (await user.verifyPassword(password))) {
    return res.json({
      data: generateToken(user._id),
      message: "Admin logged in successfully",
    });
  } else {
    return res.json({ message: "Invalid login credentials" });
  }
});

//@desc     Get all admins
//@route    GET /api/v1/admins
//@access   Private

exports.getAdminsCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "All admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};
//@desc     Get single admin
//@route    GET /api/v1/admins/:id
//@access   Private

exports.getAdminProfileCtrl = AsyncHandler(async (req, res) => {
  console.log("login complete");
  const admin = await Admin.findById(req.userAuth._id).select(
    "-password -createdAt -updatedAt"
  );

  if (!admin) {
    throw new Error("Admin not Found");
  } else {
    res.status(200).json({
      status: "success",
      data: admin,
      message: "Admin Profile fetched successfully",
    });
  }
});
//@desc    update admin
//@route    UPDATE /api/v1/admins/:id
//@access   Private
exports.updateAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "update admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc     Delete admin
//@route    DELETE /api/v1/admins/:id
//@access   Private
exports.deleteAdminCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "delete admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc     admin suspends a teacher
//@route    PUT /api/v1/admins/suspend/teacher/:id
//@access   Private

exports.adminSuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: " admin suspend teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};
//@desc     admin unsuspends a teacher
//@route    PUT /api/v1/admins/unsuspend/teacher/:id
//@access   Private
exports.adminUnSuspendTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: " admin Unsuspend teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};
//@desc     admin withdraws a teacher
//@route    PUT /api/v1/admins/withdraw/teacher/:id
//@access   Private
exports.adminWithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: " admin withdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};
//@desc     admin Unwithdraws a teacher
//@route    PUT /api/v1/admins/withdraw/teacher/:id
//@access   Private
exports.adminUnWithdrawTeacherCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: " admin Unwithdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};
//@desc     admin publich exam result
//@route    PUT /api/v1/admins/publish/exam/:id
//@access   Private
exports.adminPublishResultsCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: " admin publish exam",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};

//@desc     admin unpublish exam result
//@route    PUT /api/v1/admins/unpublish/exam/:id
//@access   Private
exports.adminUnPublishResultsCtrl = (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: " admin unpublish exam",
    });
  } catch (error) {
    res.json({
      status: "failed",
      error: error.message,
    });
  }
};
