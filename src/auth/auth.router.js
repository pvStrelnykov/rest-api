import { Router } from 'express'
import { check } from 'express-validator'

import authController from './auth.controller.js'
import blacklistMiddlewares from '../middlewares/blackList.middlewares.js'
import authMiddlewares from '../middlewares/auth.middlewares.js'

const router = new Router()

router.post('/registration', [
	check('username', 'The field can\'t be empty').notEmpty(),
	check('password', 'Minimum number of symbols 5').isLength({ min: 5 })
], authController.registration)
router.post('/login', authController.login)
router.post('/logout', authMiddlewares, blacklistMiddlewares, authController.logout)

export default router