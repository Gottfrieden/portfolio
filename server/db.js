require('dotenv').config();
const mysql = require('mysql');

class Database {
  init () {
    this.connection = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '3306',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'root',
      database: process.env.DB_NAME || 'portfolio_api',
      connectionLimit: 10
    });

    return this;
  }

  async query (...args) {
    return new Promise((resolve, reject) => {
      this.connection.query(...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  async closeConnection () {
    return new Promise((resolve, reject) => {
      if (this.connection) {
        this.connection.end((err, res) => {
          if (err) reject(err);
          else resolve();
        });
      } else {
        return resolve();
      }
    });
  }

  async deleteAllData () {
    if (process.env.NODE_ENV !== 'test') throw new Error('Cannot truncate all table if not in test env !');
    const truncates = await this.getTableNames().then(rows => rows.map(row => `TRUNCATE ${row.table_name};`).join(' '));
    const sql = `SET FOREIGN_KEY_CHECKS=0; ${truncates} SET FOREIGN_KEY_CHECKS=1;`;
    return this.query(sql);
  }

  async getTableNames () {
    if (!this._tableNames) {
      this._tableNames = await this.query(`
          SELECT table_name
          FROM INFORMATION_SCHEMA.TABLES where table_schema = 'portefolio' and table_name != 'migrations'
      `);
    }
    return this._tableNames;
  }
}

module.exports = (new Database()).init();