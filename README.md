# Kafka Publisher

This component template allows you to subscribe to changes in a HarperDB table and publish those changes to a Kafka stream.

This template includes the [default configuration](./config.yaml), which specifies how files are handled in your application.

The [schema.graphql](./schema.graphql) is the schema definition. This is the main starting point for defining your database schema, specifying which tables you want and what attributes/fields they should have.

The [resources.js](./resources.js) provides a template for defining JavaScript resource classes, for customized application logic in your endpoints. Note that for tasks like subscriptions, you'll want to ensure you only subscribe on a single thread to avoid publishing duplicate content. This does not affect the standard interface exports, which run on all enabled threads.

---

## Installation

- Clone this repo into your `components` directory (default location: `~/hdb/components`)
- Install dependencies: `npm i`
- Restart the HarperDB http process

---

## @TODO

- Variableize the values at the top of resources.js into the module's `config.yaml`
- Accommodate Kafka authentication
