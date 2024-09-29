import sql from 'mssql';
import { DATABASE_CONFIG } from './config';

export class MSSQLDatabase {
  private static instance: MSSQLDatabase;
  private pool: sql.ConnectionPool;

  private constructor() {
    console.log("instance: " + `${DATABASE_CONFIG.server}\\${DATABASE_CONFIG.instanceName}`)
    const config = {
      user: DATABASE_CONFIG.user,
      password: DATABASE_CONFIG.password,
      server: `${DATABASE_CONFIG.server}\\${DATABASE_CONFIG.instanceName}`,
      database: DATABASE_CONFIG.database,
      options: {
        encrypt: DATABASE_CONFIG.options.encrypt,
        trustServerCertificate: DATABASE_CONFIG.options.trustServerCertificate
      },
    };

    this.pool = new sql.ConnectionPool(config);
  }

  public static getInstance(): MSSQLDatabase {
    if (!MSSQLDatabase.instance) {
      MSSQLDatabase.instance = new MSSQLDatabase();
    }

    return MSSQLDatabase.instance;
  }

  public async getPool(): Promise<sql.ConnectionPool> {
    if (!this.pool.connected) {
      await this.pool.connect();
    }
    return this.pool;
  }
}

// Uso do Singleton para conectar e executar consultas
/*
async function executeQuery(query: string) {
  const db = MSSQLDatabase.getInstance();
  const pool = await db.getPool();

  try {
    const result = await pool.request()
      .input('input_parameter', sql.Int, 12345)
      .query('SELECT * FROM your_table WHERE id = @input_parameter');

    console.log(result.recordset);
  } catch (err) {
    console.error('SQL error', err);
  } finally {
    pool.close(); // Fechar a conexão após uso
  }
}

executeQuery("");


*/