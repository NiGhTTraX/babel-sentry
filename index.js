module.exports = babel => {
  const { types: t } = babel;

  return {
    visitor: {
      Function(path) {
        if (!t.isBlockStatement(path.node.body)) {
          return;
        }

        const exceptionId = t.identifier('e');

        path.node.body = t.blockStatement([
          t.tryStatement(
            path.node.body,
            t.catchClause(
              exceptionId,
              t.blockStatement([
                t.expressionStatement(
                  t.callExpression(
                    t.memberExpression(
                      t.identifier('Raven'),
                      t.identifier('callException')
                    ),
                    [exceptionId]
                  )
                )
              ])
            )
          )
        ])
      }
    }
  };
}
