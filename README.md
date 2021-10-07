# Audiophile

## Installation

### Application

#### Clone Repository

```
git clone https://github.com/onosendi/audiophile.git
cd audiophile
```

#### Environment Variables

Create `.env` file next to `package.json` with the following data:

```
NEXT_PUBLIC_APP_NAME=audiophile
DB_USER=audiophile
DB_PASSWORD=audiophile
DB_NAME=audiophile
DB_DEBUG=false
```

### NPM

```
npm install
```

### PostgreSQL

#### Set Up Database

Enter PostgreSQL shell with administrator privileges:

```
psql postgres
```

Create database, user, and grant privileges:

```sql
create database audiophile;
create user audiophile with encrypted password 'audiophile';
grant all privileges on database audiophile to audiophile;
```

#### Migration And Data

```
npx knex migrate:latest
npx knex seed:run
```

### Run Server

```
npm run dev
```
