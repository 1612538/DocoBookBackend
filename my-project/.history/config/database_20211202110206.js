module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env(
          "DATABASE_HOST",
          "rds-mysql-1.c0qiccwp4vcf.us-east-1.rds.amazonaws.com"
        ),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "docobook"),
        username: env("DATABASE_USERNAME", "admin"),
        password: env("DATABASE_PASSWORD", "quang050398"),
        //ssl: env.bool('DATABASE_SSL', true),
      },
      options: {},
    },
  },
});
