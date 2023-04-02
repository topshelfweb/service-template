# Authentication Service

This is a generic authentication service for web-APIs that uses a flow with both access-tokens and refresh-tokens.

[Changelog](./changelog.md) | [License (MIT)](./LICENSE)

## Installation and running

To install, run `yarn install`

If in a development environment, run `yarn run dev`.

Otherwise, `node index`

## Environment Variables

A number of environment variables are needed.

```env
PORT=any port number

MONGO_USER=your mongoDB database user
MONGO_PASS=your mongoDB datapase password
MONGO_DB=name of your mongoDB database
MONGO_URI=the URI for your mongoDB database

TOKEN_SECRET=random string
TOKEN_ACCESS_TIME=number of seconds for access-token to live
TOKEN_REFRESH_TIME=number of seconds for refresh-token to live

REDIS_URI=the URI for your redis service
```
