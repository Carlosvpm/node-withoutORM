import { Client } from "pg";

const createConnection = async () => {
  const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "161926",
    database: "ms-customer",
  });

  await client.connect();

  return client;
};

export { createConnection };
