# lens

**Important**

Tested in Chrome

**Instructions**

Make sure to create `.env` for the following variables which will be used to connect to Cloud Atlas Mongodb:

- `EXPRESS_PORT`
- `MONGO_USER`
- `MONGO_KEY`
- `MONGO_HOSTNAME`
- `MONGO_DB`

1. Clone the repository:
git clone https://github.com/davidmoonraw/lens.git


2. Run the following command to populate the database with sample products:
node populatedb.js


3. Start the application:
npm start