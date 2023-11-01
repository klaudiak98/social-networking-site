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
  - checkEmailAvailability GET
  - changePassword/{userId} PATCH

- users/

  - {userId} POST

- post/

  - {postId} GET
  - getByAuthor?userId={id} GET
  - newPost POST

- friends/
  - listFriends?userId={id} GET
  - addFriend?userId={id1}&friendId={id2} GET

## DATABASE - POSTGRESQL

### TABLES

**users** (
id BIGSERIAL PRIMARY KEY,
created_at timestamp without time zone NOT NULL,
updated_at timestamp without time zone NOT NULL,
email character varying(40) UNIQUE,
firstName character varying(40),
lastName character varying(40),
password character varying(100)
);

**usersdetails** (
user_id bigint PRIMARY KEY REFERENCES users(id),
description character varying(250),
imgurl character varying(50)
);

**roles** (
id BIGSERIAL PRIMARY KEY,
name character varying(60) UNIQUE
);

**user_roles** (
user_id bigint REFERENCES users(id),
role_id bigint REFERENCES roles(id),
CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id)
);

**posts** (
id BIGSERIAL PRIMARY KEY,
content character varying(40),
likes integer NOT NULL,
public_post boolean NOT NULL,
tags character varying(50),
title character varying(40),
author_id bigint REFERENCES users(id)
);

**friends** (
id BIGSERIAL PRIMARY KEY,
created_date timestamp without time zone,
first_user_id bigint REFERENCES users(id),
second_user_id bigint REFERENCES users(id)
);
