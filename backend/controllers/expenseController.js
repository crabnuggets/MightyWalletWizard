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

// Get a single expense by ID for the current user
const getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findOne({ where: { id: req.params.id, user_id: req.user.id } });
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }
    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch expense' });
  }
};

// Update an existing expense by ID
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findOne({ where: { id: req.params.id, user_id: req.user.id } });
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    await expense.update(req.body); // Update expense with new data
    res.json(expense);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update expense' });
  }
};

// Delete an expense by ID for the current user
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findOne({ where: { id: req.params.id, user_id: req.user.id } });
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    await expense.destroy(); // Delete the expense
    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete expense' });
  }
};

// Get all expenses for the current user by category
const getExpensesByCategory = async (req, res) => {
  try {
    const expenses = await Expense.findAll({
      where: { category: req.params.category, user_id: req.user.id }
    });
    res.json(expenses);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch expenses' });
  }
};

module.exports = { 
  createExpense, 
  getExpenses, 
  getExpenseById, 
  getExpensesByCategory, 
  updateExpense, 
  deleteExpense  
};
