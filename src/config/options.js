export default {
  paths: {
    tasks: 'fbi',
    config: 'fbi/config.js'
  },
  server: {
    host: 'localhost',
    port: 9000,
    root: '.'
  },
  DATA_ROOT: 'data',
  DATA_TASKS: 'data/tasks',
  DATA_TEMPLATES: 'data/templates',
  TASK_PARAM_PREFIX: '-',
  TEMPLATE_ADD_IGNORE: ['node_modules', '.DS_Store', '.svn', '.git', 'dst', 'dist'],
  TEMPLATE_INIT_IGNORE: ['node_modules', '.DS_Store', '.svn', '.git', 'dst', 'dist'],
  BACKUP_IGNORE: ['node_modules', '.DS_Store', '.svn', '.git', 'dst', 'dist'],
  RECOVER_IGNORE: ['node_modules', '.DS_Store', '.svn', '.git', 'dst', 'dist']
}