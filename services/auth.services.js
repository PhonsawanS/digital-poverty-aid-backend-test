
const db = require('../models')
const user_model = db.User;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

exports.register = async (userObj) => {
  
  userObj.password = await bcrypt.hash(userObj.password, 10);

  
  return await user_model.create(userObj);
};

exports.login = async (userObj) => {
  const email = userObj.email;
  const password = userObj.password;

  try {
    const user = await user_model.findOne({ where: { email: email } });

    if (!user) {
      return {
        status: 404,
        message: "User not found",
        data: null,
      };
    }
    // compare pass in DB
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return {
        status: 401,
        message: "Invalid Password",
        data: null,
      };
    }

    // gen token
    const token = jwt.sign(
      { id: user.id, name: user.name, role: user.role },
      secret,
      { expiresIn: "24h" }
    );

    return {
      status: 200,
      message: "Login Successful",
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        accessToken: token,
      },
    };
  } catch (err) {
    return {
      status: 500,
      message: "Error",
      data: null,
      err: err,
    };
  }
};

exports.currentUser = async (id) => {
    console.log("id user is " + id);
  
    return await user_model
      .findOne({
        where: { id: id },
        attributes: { exclude: ["password", "id", "address"] }, // ละเว้นฟิลด์ที่ไม่ต้องการส่งกลับ
      })
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return err;
      });
  };
