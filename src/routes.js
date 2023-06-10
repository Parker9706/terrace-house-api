import express from 'express';
import { findAllMembers, findAMember } from "./controllers/members.js";
import { getARandomQuote, getQuoteByMember, getASpecificQuote } from './controllers/quotes.js';

const router = express.Router();

// Members
router.get('/members', async (req, res) => {
  const result = await findAllMembers();
  return res.status(200).json(result);
});

router.get('/member/:name', async (req, res) => {
  const { name } = req.params;
  const result = await findAMember(name);
  return res.status(200).json(result);
});

// Quotes
router.get('/quotes', async (req, res) => {
  const result = await getARandomQuote();
  return res.status(200).json(result);
});

router.get('/quotes/:name', async (req, res) => {
  const { name } = req.params;
  const result = await getQuoteByMember(name);
  return res.status(200).json(result);
});

router.get('/quotes/:id', async (req, res) => {
  const { id } = req.params;
  const result = await getASpecificQuote(parseInt(id));
  return res.status(200).json(result);
});

export default router;
