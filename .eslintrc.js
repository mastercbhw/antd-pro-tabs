const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.eslint,
  rules: {
    ...fabric.eslint.rules,
    "max-len": [0, 120, 4],
    "react-hooks/rules-of-hooks": "off",
    "react/no-array-index-key": "off",
  },
  globals: {
    'rootPath': true,
    'sessionKeyPrefix': true,
  }
}
