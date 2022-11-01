import { Router } from 'express';
import LoginRoutes from './user.routes';
import CarsRoutes from './cars.routes';

const router = Router();

router.use(LoginRoutes)
router.use(CarsRoutes)

export default router;