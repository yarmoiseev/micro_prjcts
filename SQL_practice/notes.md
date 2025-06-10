
**Entities (they're different things):**
- Database Server (Cluster)
- Database
- Data

[SQL cheat sheet](https://github.com/academind/sql-complete-guide-code)

**Parts of an SQL command/statement:**
```` SELECT name, salary FROM employees WHERE salrary > 8000; ````
- key words (SELECT, WHERE, FROM, etc)
- identifiers (name, salary, etc)
- tokens (each peace of a command)
- clauses (parts of a command: SELECT name, salary - one clause. FROM employees - another clause)
- Value/Expression (> 800, for example)
- semicolon in the end.

**Syntax rules:**
- Semicolon is must, if more than one statement;
- Case-insensitive
- Identifiers can match with some keywords, so you surround them with ```` " " or  ``(mySQL) ````
to avoid clashing.
- Order of clauses is important

**Two types of commands:**
- Data defenition (define table, constraints, relationship, deleting and dropping tables)
- Data manipulation (insert, update, delete, fetch, join, filter)

**Start-stop and others RDBMS actions:**
- [MySQL](https://academind.com/tutorials/mysql-start-stop-uninstall-upgrade-server/)

msql shell: shell.connect({host: 'localhost', user: 'root', port?: optional})

- [Postgres](https://academind.com/tutorials/postgresql-start-stop-uninstall-upgrade-server/)


**Schemas**
- Schema in MySQL - is a synonim of DB
- Schema in postgres - a way of organizing tables

**Data definition operations**
- CREATE/ALTER DATABASE/TABLE
- CREATE DATABASE somename IF NOT EXISTS (not available for postgres)
- CREATE TABLE somename IF NOT EXISTS (available for both)

**Key Data types**
- Text: CHAR (less - fill, more - error), VARCHAR (less - not fill, more - error), TEXT (any length),
ENUM
- INT, SMALLINT (both with boundaries), DECIMAL, NUMERIC (both fixed precision), FLOAT (REAL), DOUBLE (both, aproximate)
- DATE, DATETIME, TIMESTAMP
- BOOLEAN

**Files**
- Not stored in DB since they're not primitive data
- But, you can store a path to the file on a disk