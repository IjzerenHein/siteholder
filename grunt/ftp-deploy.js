module.exports = {
  build: {
    auth: {
      host: 'ftp.pcextreme.nl',
      port: 21,
      authKey: 'gloey.nl'
    },
    src: '<%= config.dist %>',
    dest: '/domains/gloey.nl/htdocs/www/apps/siteholder'
  }
};
