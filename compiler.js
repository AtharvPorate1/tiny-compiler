const tokenizer = require('./tokenizer');

module.exports = function compiler(input) {
    // 1. Lexical Analysis 
    // It will break the input into an array of tokens
    const tokens = tokenizer(input);
    // 2. Syntactic Analysis
    // 3. Transformation
    // 4. Code Generation
    //
    // return jsCode;
    return tokens;
  }