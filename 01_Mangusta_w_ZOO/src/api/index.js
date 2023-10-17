import express from 'express';

import animals from './animals';

const { Router } = express;

const apiRouter = Router();
apiRouter.use('/animals', animals);

// 404 supports
apiRouter.use((req, res) => {
  res.status(404).json({
    message: 'Not found',
    status: 404,
  });
});

export default apiRouter;
