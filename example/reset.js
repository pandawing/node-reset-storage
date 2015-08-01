var resetStorage = require('../');
resetStorage('test-item').catch(function (err) {
  console.error(err);//eslint-disable-line no-console
});
