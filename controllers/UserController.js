const UserModel = require("../model/UserModels.js")
const ObjectId = require('mongoose').Types.ObjectId

exports.AllUser = async (_,res) =>{
  const users =await UserModel.find().select('-password ');
  res.status(200).json(users)
}

exports.UserInfo = (req,res)=>{
     if (!ObjectId.isValid(req.params.id)){
     return res.status(400).send('ID UKNOW' + err)
     }
     UserModel.findById(req.params.id,(err,docs)=>{
 if(!err){
    res.send(docs)
    }else{
         console.log('id uknow' + err);
    }
}).select('-password')
}

exports.udapteUser= async (req,res)=>{
 
    if (!ObjectId.isValid(req.params.id)){
    return res.status(400).send('ID UKNOW' + err)
    }
    try{
        await UserModel.findOneAndUpdate( {_id : req.params.id},{
            $set : 
            { 
            name:req.body.name
        }},
        { new:true ,upsert:true , setDefaultsOnInsert:true},(_,docs) =>{
               return res.send(docs);
        })
    }catch(err){
      return  res.status(500).json({message:"err"})
    }

}

//Delete

exports.DeleteUser = async (req,res)=>{
    if (!ObjectId.isValid(req.params.id)){
    return res.status(400).send('ID UKNOW' + err)
    }
    try{
         UserModel.deleteOne( {_id : req.params.id}).exec();
       return res.status(200).json({message:"Sucessfully deleted"})
    }catch(err){
       return res.status(500).json({message:"err"})
    }
}