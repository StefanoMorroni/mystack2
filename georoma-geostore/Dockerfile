FROM postgres:latest

COPY 001_setup_db.sql /docker-entrypoint-initdb.d/001_setup_db.sql
COPY 002_create_schema_postgres.sql /docker-entrypoint-initdb.d/002_create_schema_postgres.sql
COPY 003_create_schema_postgres.sql /docker-entrypoint-initdb.d/003_create_schema_postgres.sql        
COPY 004_georoma.sql /docker-entrypoint-initdb.d/004_georoma.sql        
