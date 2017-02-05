const Mustache = require('mustache');
const config = require('config');

var merge = (paramObj,templateId)=>{
  let template = config.get(templateId);
  let retStr = Mustache.render(template,paramObj);
  return retStr;
};

module.exports.merge = merge;
// debug -------------------------------
// -------------------------------------
// let paramObj = {
//   fileName : 'template utility',
//   author : 'sakai.memoru',
//   liecense : 'MIT'
// }
// let templateId = 'tmplOfReadme';
// 
// let ret = merge(paramObj,templateId);
// console.log(ret);

