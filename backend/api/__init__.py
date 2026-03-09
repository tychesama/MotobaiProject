import os
if not os.environ.get('RAILWAY_ENVIRONMENT'):
    import pymysql
    pymysql.install_as_MySQLdb()