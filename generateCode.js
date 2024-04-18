module.exports = function generateCode(node) {
    if (node.type === 'NumericLiteral') {
      return node.value;
    }
    if (node.type === 'Identifier') {
      return node.name;
    }
    if (node.type === 'CallExpression') {
      
      return `${generateCode(node.callee)}(${node.arguments.map(generateCode).join(', ')})`;
    }
    if (node.type === 'ExpressionStatement') {
      return `${generateCode(node.expression)};`;
    }
    if (node.type === 'Program') {
      return node.body.map(generateCode).join('\n');
    }
  }