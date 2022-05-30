// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  // development: {
  //   client: "sqlite3",
  //   connection: {
  //       filename: "./data/dev.sqlite3"
  //   },
  //   migrations: {
  //       directory: "./data/migrations"
  //   },
  //   seeds: {
  //       directory: "./data/seeds"
  //   }
  // },

  development: {
    client: 'postgresql',
    connection: {
      database: 'friend_computer_dev',
      user: 'friend_computer_testing',
      password: 'password',
      port: '5433'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
