import { desc, sql } from "drizzle-orm";
import { boolean, check, index, numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const investorInterest = pgTable(
  "investor_interest",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone"),
    city: text("city").notNull(),
    country: text("country").notNull(),
    referrer: text("referrer"),
    amountUsd: numeric("amount_usd", { precision: 12, scale: 2 }).notNull(),
    capitalType: text("capital_type").notNull(),
    background: text("background").notNull(),
    howCanHelp: text("how_can_help"),
    citizenship: text("citizenship").notNull(),
    notRestrictedCountry: boolean("not_restricted_country").notNull(),
    isAccredited: boolean("is_accredited"),
    consentToStore: boolean("consent_to_store").notNull(),
  },
  (table) => [
    check("investor_interest_amount_min_check", sql`${table.amountUsd} >= 5000`),
    check(
      "investor_interest_capital_type_check",
      sql`${table.capitalType} in ('Personal', 'Fund/Family Office')`
    ),
    index("investor_interest_created_at_idx").on(desc(table.createdAt)),
    index("investor_interest_email_idx").on(table.email),
  ]
);

export type NewInvestorInterest = typeof investorInterest.$inferInsert;

