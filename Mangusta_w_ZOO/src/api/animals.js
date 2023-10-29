import express from  'express';
import Animals from '../services/animals.js';

const { Router } = express;
const router = Router();


const animals = new Animals();

router.get('/', async (req, res) => {
  return res.json({});
});

router.get('/add', async (req, res) => {
  return res.json({});
});

router.get('/remove', async (req, res) => {
  return res.json({});
});

router.post('/add', async (req, res) => {
  return res.json({});
});

export default router;
