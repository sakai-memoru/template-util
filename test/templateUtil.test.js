const merge = require('../lib/templateUtil').merge;
const expect = require('chai').expect;

describe('templateUtil unit test',()=>{
  describe('#merge function',()=>{
    it('expect merged return-strings to be expected',()=>{
      // Arrange
      let paramObj = {
        name : 'sakai',
        address : 'sakai.memoru@gmail.com'
      };
      let templateId = 'tmplOfUnittest';
      let expected = 'Name is sakai and Email Address is sakai.memoru@gmail.com.';

      // Act
      let actual = merge(paramObj,templateId);
      // Assert
      expect(actual).to.equal(expected);
    });
  });

});

