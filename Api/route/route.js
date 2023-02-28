const express=require('express')
const router=express.Router()
const cont=require('../controller/controller')
const middile=require('../middileware/middileware')



router.post('/signUp',cont.signUp) 
router.post('/login',cont.login)
router.post('/updateimage',middile.tokenverify,middile.upload.single('dp'),cont.uploadImage)
router.get('/profile',middile.tokenverify,cont.getdata);
router.put('/update',middile.tokenverify,cont.updatedata);
module.exports=router
