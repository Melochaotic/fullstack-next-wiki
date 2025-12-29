import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import schema from "./schema";
import "dotenv/config";
import assert from "node:assert";

assert(process.env.DATABASE_URL, "You need a DATABASE_URL");

export const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql, { schema });

export default db;
