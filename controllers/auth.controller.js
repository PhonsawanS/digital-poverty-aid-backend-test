const authService =  require('../services/auth.services')

const register = async (req, res) => {
    
    const userObj = {
        name: req.body.name,
        // username: req.body.username,
        email: req.body.email,
        password:req.body.password,
        // role:req.body.role,
        // isactive:req.body.isactive,
        // address: req.body.address
    };

    
    await authService.register(userObj)
        .then(data => {
            res.send({
                data: data,
                msg: "success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}

const loginUser = async (req, res) => {
    const userObj = {
        email: req.body.email,
        password: req.body.password
    };
    await authService.login(userObj)
        .then(data => {
            res.send({
                data: data,
                msg: "Login success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
}
const currentUser = async (req, res) => {
    try{
        console.log('Current user', req.user);
        // ทำการส่งข้อมูลไปเก็บที่หน้าบ้าน

        await authService.currentUser(req.user.id)
        .then(data => {
            res.send({
                data: data,
                msg: "Get current user success",
                status: 200,
                err: ''
            });
        })
        .catch(err => {
            res.send({
                data: null,
                msg: "error",
                status: 500,
                err: err
            });
        });
        
    }catch(err){
        console.log(err);
        
    }
}

module.exports = {
    register,
    loginUser,
    currentUser
};