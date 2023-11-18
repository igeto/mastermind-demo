import { Router } from 'express';
import driverRoutes from './drivers.router';

const router = Router();

// Register the driver routes
router.use('/drivers', driverRoutes);

// You can add more routes here as your application grows

export default router;
