import express from 'express';

const router = express.Router()
import { authUser,registerUser,logoutUser,getUserProfile,updateUserProfile,getUsers,deleteUser,getUserById,updateUser } from '../controllers/userController.js';


router.route('/').post(registerUser).get(getUsers)
router.post('/auth',authUser)
router.post('/logout',logoutUser)
router.route('/profile').put(updateUserProfile).get(getUserProfile)
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser)



export default router