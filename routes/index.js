//Here you will require route files and export them as used in previous labs.
const sortArrayRoute = require('./sortArray');

const constructorMethod = (app) => {
  app.use('/', sortArrayRoute);
};

module.exports = constructorMethod;
