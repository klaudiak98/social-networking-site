# SOCIAL NETWORKING SITE

## FRONTEND - REACT JS

cd frontend/  
npm install  
npm run start

http://localhost:3000

## BACKEND - SPRING BOOT

http://localhost:5000

https://www.callicoder.com/spring-boot-spring-security-jwt-mysql-react-app-part-1/

### API

api/

- auth/

  - signin POST
  - signup POST

- user/

  - me GET
  - checkUsernameAvailability GET
  - checkEmailAvailability GET

- users/
  - {username} POST

## DATABASE - POSTGRESQL

### TABLES

users (
id BIGSERIAL PRIMARY KEY,
created_at timestamp without time zone NOT NULL,
updated_at timestamp without time zone NOT NULL,
email character varying(40) UNIQUE,
name character varying(40),
password character varying(100),
username character varying(15) UNIQUE
);

roles (
id BIGSERIAL PRIMARY KEY,
name character varying(60) UNIQUE
);

user_roles (
user_id bigint REFERENCES users(id),
role_id bigint REFERENCES roles(id),
CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id)
);
