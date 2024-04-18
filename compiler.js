const tokenizer = require('./tokenizer');
const parser = require('./parser');
const transformer = require('./transformer');

module.exports = function compiler(input) {
    // 1. Lexical Analysis 
    // It will break the input into an array of tokens
    const tokens = tokenizer(input);
    // 2. Syntactic Analysis

    // It will parse the array of tokens into an Abstract Syntax Tree (AST)
    const ast = parser(tokens);
    console.log(JSON.stringify(ast, null, 2));


    // 3. Transformation
    // converts the AST into a new jsAST
    const jsAST = transformer(ast);
    console.log(JSON.stringify(jsAST, null, 2));



    // 4. Code Generation
    //
    // return jsCode;
    return tokens;
  }