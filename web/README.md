# bigfive-web

https://bigfive-test.com

Website for five factor model of personality based on work from [IPIP-NEO-PI](https://github.com/kholia/IPIP-NEO-PI).

Tests and evaluation is gathered from [ipip.ori.org](http://ipip.ori.org).

See it live @ [bigfive-test.com](https://bigfive-test.com)

The frontend is written in [nodejs](https://nodejs.org) using the
[Next.js](https://nextjs.org/) framework.

## Installation

Download and install [nodejs](https://nodejs.org),
[git](https://git-scm.com/downloads) and [vercel-cli](https://vercel.com/download)

Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

```
npm install --global yarn
```

Install docker and docker-compose

The results are saved to a [mongodb](https://www.mongodb.com/) database, so for a full test you either need a running mongodb or an instance at [mlab](https://mlab.com/)

## Development

add .env.local file

```
NEXT_PUBLIC_ENV=development
DB_URL=mongodb://root:example@localhost:27017
DB_NAME=b5
DB_COLLECTION=results
```

Run the setup script to install all dependencies

```
yarn
```

Start mongodb server

```
docker-compose up -d
```

Run the development server

```
yarn dev
```

## Linting

Run the linter

```
yarn lint && yarn format:fix
```

## License

Licensed under the [MIT license](../LICENSE).
