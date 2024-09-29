import sql from 'mssql';

class MSSQLDatabase {
  private static instance: MSSQLDatabase;
  private pool: sql.ConnectionPool;

  private constructor() {
    const config = {
      user: 'your_username',
      password: 'your_password',
      server: 'your_server_address', // ex: localhost
      database: 'your_database',
      options: {
        encrypt: true, // Use encrypt if the SQL Server is configured for it
        trustServerCertificate: true // Required for self-signed certificates
      }
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
