import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Logger } from '@nestjs/common';

@Injectable()
export class DbService implements OnModuleInit {
  private readonly logger = new Logger(DbService.name);
  private pool: Pool | undefined;
  session:
    | (NodePgDatabase<Record<string, never>> & {
        $client: Pool;
      })
    | null = null;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    const dbConnectionUrl = this.configService.get<string>('DATABASE_URL');

    this.pool = new Pool({
      connectionString: dbConnectionUrl,
    });

    this.session = drizzle({
      client: this.pool,
    });

    await this.session.execute('select 1');
    this.logger.log('✅ connected to the database successfully!');
  }

  async onModuleDestroy() {
    if (this.pool) {
      await this.pool.end();
      this.logger.log('🛑 database connection pool closed.');
    }
  }

  getSession() {
    if (!this.session) throw new Error('Db not initialized');

    return this.session;
  }
}
