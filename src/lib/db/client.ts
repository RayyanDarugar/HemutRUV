import "server-only";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres, { type Sql } from "postgres";

import * as schema from "./schema";

const connectionString = process.env.DIRECT_URL ?? process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL (or DIRECT_URL) is required for database access.");
}

const globalForDb = globalThis as typeof globalThis & {
  __pgClient__?: Sql;
  __drizzleDb__?: ReturnType<typeof drizzle>;
};

const pgClient =
  globalForDb.__pgClient__ ??
  postgres(connectionString, {
    ssl: "require",
    prepare: false,
  });

const db = globalForDb.__drizzleDb__ ?? drizzle(pgClient, { schema });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__pgClient__ = pgClient;
  globalForDb.__drizzleDb__ = db;
}

export { db };

