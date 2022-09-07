const messageModels = require("../model/messagePostModel")
const ObjectId = require('mongoose').Types.ObjectId

exports.readAllPost = async (res,req)=>{
 const message =  messageModels.find()
   res.status(200).json(message)
}

exports.createPost = async (res,req)=>{
    const message = new messageModels({
        posterId : req.body.posterId,
        message  : req.body.message,
        video : req.body.video,
        liker:[],
        comment:{},
    })
    await message.save().then( msg =>{
        if(err){
            console.log(err);
            res.status(400).json(err)
        }else{
            res.satus(200).json(msg)
        }
    })
}


exports.UpdateMessagePost = async (res,req) =>{
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send('ID UKNOW' + err)
        }
   try{
        messageModels.findByIdAndUpdate( req.params.id ,{
        $set:{
        message:req.body.message,
        }
    },{new: true},(_,docs) =>{
        return res.send(docs);
 })}catch(err){
return  res.status(500).json({message:err})
}
}


exports.deleteMessageUser = async (res,req) =>{
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send('ID UKNOW' + err)
        }
   try{
    messageModels.findByIdAndDelete(req.params.id).exec();
    return res.status(200).json({message:"Sucessfully deleted"})
 }catch(err){
    return res.status(500).json({message:err})
 }
}


exports.LikeMessage = async (res, req) =>{
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send('ID UKNOW' + err)
        }
   try{
      await messageModels.findById(req.params.id,{
       $addToSet:{

        Likers : req.body.id,
       }},{nex:true},(err,docs) =>{
        if(!err){
        return res.send(docs);
        }else{
            return res.status(200).json({message:err})
        }
 })

UserModel.findOneAndUpdate( req.body.id,{
    $addToSet : 
    { 
     Like :req.params.id
}},
{ new:true },(err,docs) =>{
          res.status(400).json(err)
}
)
}catch(err){
  return res.status(500).json({message:err})
}

}


exports.UnLikeMessage = async (res, req) =>{
    if (!ObjectId.isValid(req.params.id)){
        return res.status(400).send('ID UKNOW' + err)
        }
   try{
      await messageModels.findById(req.params.id,{
       $pull:{

        Likers : req.body.id,
       }},{nex:true},(err,docs) =>{
        if(!err){
        return res.send(docs);
        }else{
            return res.status(200).json({message:err})
        }
 })

UserModel.findOneAndUpdate( req.body.id,{
    $pull : 
    { 
     Like :req.params.id
}},
{ new:true },(err,docs) =>{
          res.status(400).json(err)
}
)
}catch(err){
  return res.status(500).json({message:err})
}

}