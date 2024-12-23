require('dotenv').config();
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET


//เช็คว่ามี token?
exports.auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    // get token from header
    let authToken = "";

    if (authHeader) {
      authToken = authHeader.split(" ")[1]; // แยกข้อมูลเอาแต่ token ออกมา
    } else if (!authHeader) {
      throw new Error("Invalid authorization");
    }

    //verify auth token
    jwt.verify(authToken, secret,(err,user)=>{
      if(err){
        return res.status(403).send({message:err.name === 'TokenExpiredError' ? "Token expired" : "Invalid token",status:403})
      }
      req.user = user;  
      next(); //บอกว่าทำงานเสร็จแล้วทำวานอื่นต่อไปได้
    }
  );
    
  } catch (e) {
    console.log(e);
    res.send("Invalid token");
  }
};

//ยังไม่ได้แก้ไข
exports.allowRole = (allowedRoles)=>{
  
  return (req,res,next)=>{
    
    try{
      // check token
      const authHeader = req.headers["authorization"];
      let authToken = "";

      if(authHeader){
        authToken = authHeader.split(" ")[1]; // separate token
      }else{
        throw new Error("Invalid authorization")
      }

      const decoded = jwt.decode(authToken,secret);
      req.user = decoded.user;

      // คัด role ที่ไม่ได้รับอนุญาติออก
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ message: "Unauthorized" });
      }

      next(); //ยืนยันผ่านสามารถยิง API

    }catch (e) {
      console.log(e);
      res.json({ message: "Invlid token" });
    }
  }
}