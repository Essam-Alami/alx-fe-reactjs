javascript
module.exports = {
  transform: {
    '^.+\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  testEnvironment: 'jsdom', // Ensures Jest can work with React (optional but recommended)
};