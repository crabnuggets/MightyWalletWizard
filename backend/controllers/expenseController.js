const { Expense } = require('../models');

const createExpense = async (req, res) => {
  try {
    const expense = await Expense.create({ ...req.body, user_id: req.user.id });
    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create expense' });
  }
};

const getExpenses = async (req, res) => {
  const expenses = await Expense.findAll({ where: { user_id: req.user.id } });
  res.json(expenses);
};

module.exports = { createExpense, getExpenses };
