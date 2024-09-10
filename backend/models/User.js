const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/sequelize'); // Update the path as necessary

class User extends Model {
  // Password validation method
  async validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

// Define the User model
User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true // Allow null in case profile picture is not provided
  }
}, {
  sequelize,
  modelName: 'User',
  hooks: {
    beforeSave: async (user) => {
      if (user.changed('password')) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    }
  },
  tableName: 'users', // Ensure the table name is 'users'
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = User;
