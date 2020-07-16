if(process.env.NODE_ENV ==='production') {  //환경변수 production -배포 후일시
  module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}