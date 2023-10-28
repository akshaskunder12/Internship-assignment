const Studentmodel = require("../Models/studentmodel.js");


let createStudent = async (req, res) => {
    try{
    //     let data = req.body;
    //     let registerStudent = await Studentmodel.create(data);
    //     return res.status(201).send({
    //         status:true, 
    //         msg:"student data registered successfully",
    //     data: registerStudent,
    // });
let data = req.body
let registerStudent = await Studentmodel.create(data)
return res.status(201).send({status:true, msg:"data created", data:registerStudent})


} catch (error) {
    return res
    .status(500)
    .send({ status: false, msg: "Internal server error"});

    }
};

module.exports={createStudent};
