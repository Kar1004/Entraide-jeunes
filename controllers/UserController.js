const UserModel = require("../model/UserModels.js")
const ObjectId = require('mongoose').Types.ObjectId


// pour récupérer toutes les données j'utilise le .find et le select pour retirer
// la possibilité de voir du password
exports.AllUser = async (_,res) =>{
  const users =await UserModel.find().select('-password ');
  res.status(200).json(users)
}
//pour récupérer les infos d'un seul utilisateurs
// On véridie avec ObjectId si il existe et valide 
// Aprrés avec  FindbyId nous essyons de le retrouver avec le Id aléatoire
exports.UserInfo = (req,res)=>{
     if (!ObjectId.isValid(req.params.id)){
     return res.status(400).send('ID UKNOW')
     }
     UserModel.findById(req.params.id,(err,docs)=>{
 if(!err){
    res.send(docs)
    }else{
         console.log('id uknow' + err);
    }
}).select('-password')
}

//ppour la mise a jour du profil de l'utilisateur 
//Nous utiliserons findOneandUpdate 

exports.udapteUser= async (req,res)=>{
    if (!ObjectId.isValid(req.params.id)){
    return res.status(400).send('ID UKNOW')
    }
    try{
        await UserModel.findOneAndUpdate(  req.params.id,{
            $set : 
            { 
            name:req.body.name
        }},
        { new:true ,upsert:true , setDefaultsOnInsert:true},(_,docs) =>{
               return res.send(docs);
        })
    }catch(err){
      return  res.status(500).json({message:err})
    }

}

//pour le delte 
// Nous pouvons supprimer l'utilisateur avec son id 

//Delete
exports.DeleteUser = async (req,res)=>{
    if (!ObjectId.isValid(req.params.id)){
    return res.status(400).send('ID UKNOW')
    }
    try{
         UserModel.deleteOne( {_id : req.params.id}).exec();
       return res.status(200).json({message:"Supprimé"})
    }catch(err){
       return res.status(500).json({message:err})
    }
}

//patch

exports.Follow = async (req,res)=>{
  if (!ObjectId.isValid(req.params.id) || !ObjectId.isValid(req.body.id) ){
  return res.status(400).send('ID UKNOW')
  }
  try{
    //s'ajouter à la liste de la personne qu'on veut suivre
    UserModel.findOneAndUpdate(  req.params.id,{
      $addToSet : 
      { 
      follow:req.body.idToFollow
    }},
      { new:true ,upsert:true },(err,docs) =>{
      if(!err){
      res.status(201).json(docs)
      }else{
            res.status(400).json(err)
      }
    })
     // s'ajouter dans la liste de la personnes suivit
     UserModel.findOneAndUpdate( req.body.idToFollow,{
      $addToSet : 
      { 
        followers:req.params.id
  }},
  { new:true ,upsert:true },(err,docs) =>{
            res.status(400).json(err)
  }
  )
}catch(err){
    return res.status(500).json({message:"err"})
 }
}

  //unfollow une

exports.Unfollow = async (req,res)=>{
  if (!ObjectId.isValid(req.params.id)|| !ObjectId.isValid(req.body.id)){
  return res.status(400).send('ID UKNOW')
  }
 
  UserModel.findOneAndUpdate(  req.params.id,{
    $pull : 
    { 
    follow:req.body.idToUnFollow
}},
{ new:true ,upsert:true },(err,docs) =>{
  if(!err){
    res.status(201).json(docs)
    }else{
          res.status(400).json(err)
    }
  })
   // retirer dans la liste de la personnes suivit
   UserModel.findOneAndUpdate( req.body.idToUnFollow,{
    $pull : 
    { 
      Unfollow:req.params.id
}},
{ new:true ,upsert:true },(err,docs) =>{
          res.status(400).json(err)
}
)
}
