import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Apartamento",
          type: "deposit",
          value: 6000,
          category: "Alugel",
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Apartamento",
          type: "withdraw",
          value: 2000,
          category: "Alugel",
          createdAt: new Date("2021-02-14 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const response = JSON.parse(request.requestBody);

      return schema.create("transaction", response);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
