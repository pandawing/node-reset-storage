var removeStorages = require('../');
removeStorages('test-item').catch(function (err) {
  console.error(err);//eslint-disable-line no-console
});
