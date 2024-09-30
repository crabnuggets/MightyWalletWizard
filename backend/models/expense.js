module.exports = (sequelize, DataTypes) => {
    const Expense = sequelize.define('Expense', {
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      account: {
        type: DataTypes.STRING,
        allowNull: false
      }
      ,
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      exclude: {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
      }
    });
  
    Expense.associate = (models) => {
      Expense.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    };
  
    return Expense;
  };
  