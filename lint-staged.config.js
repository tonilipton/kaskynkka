module.exports = {
  '*.{js,ts,tsx,json,css,md}': ['prettier --write'],
  '*.ts': ['eslint --cache --fix'],
  '*.json': ['prettier --write']
};