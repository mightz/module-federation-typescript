const path = require('path');

const pathResolve = dir => path.join(__dirname, '..', dir);

const alias = {
  '@': pathResolve('src'),
};

module.exports = {
  pathResolve,
  alias,
};