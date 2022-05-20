# Entrega NodeJS 02 kenzie Academy Brasil

## Sobre a API

#### Está API é apenas uma demonstração de um CRUD completo de usuários.

# Endpoints da API

1. POST /api/users
2. POST /api/login
3. GET /api/users
4. GET /api/users/:id
5. PATCH /api/users/:id
6. DELETE /api/users/:id

## POST - USERS

**<font color="green">POST</font> /api/users - Formato da Requisição**

```js
    {
        "email": "jhondoe@mail.com",
	    "name": "Jhon Doe",
	    "password": "123456",
	    "age": 20
    }
```

#### Formato da requisição caso der tudo certo.

**<font color="green">POST</font> /api/users - Formato da Resposta - <font color="lime">201 CREATED</font>**

```js
    {
        "email": "jhondoe@mail.com",
        "name": "Jhon Doe",
        "age": 20,
        "id": "5cc93fcc-ed14-439e-a412-bedc3d9ca3e7",
        "created_at": "2022-05-20T00:21:13.850Z",
        "updated_at": "2022-05-20T00:21:13.850Z"
    }
```

## POST - LOGIN

**<font color="green">POST</font> /api/login - Formato da Requisição**

```js
    {
	    "email": "jhondoe@mail.com",
	    "password": "123456"
    }
```

#### Formato da requisição caso der tudo certo.

**<font color="green">POST</font> /api/login - Formato da Resposta - <font color="lime">200 OK</font>**

```js
    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYzkzZmNjLWVkMTQtNDM5ZS1hNDEyLWJlZGMzZDljYTNlNyIsIm5hbWUiOiJKaG9uIERvZSIsImVtYWlsIjoiamhvbmRvZUBtYWlsLmNvbSIsImFnZSI6MjAsImNyZWF0ZWRfYXQiOiIyMDIyLTA1LTIwVDAwOjIxOjEzLjg1MFoiLCJ1cGRhdGVkX2F0IjoiMjAyMi0wNS0tMFQwMDoyMToxMy44NTBaIiwiaWF0IjoxNjUzMDA0NTcxLCJleHAiOjE2NTMwOTA5NzF9.z5h_jscI23DHAZ9m-BreLRBly2RFqfEx7r4PNVGxc8z",
        "user": {
            "id": "5cc93fcc-ed14-439e-a412-bedc3d9ca3e7",
            "name": "Jhon Doe",
            "email": "jhondoe@mail.com",
            "age": 20,
            "created_at": "2022-05-20T00:21:13.850Z",
            "updated_at": "2022-05-20T00:21:13.850Z"
        }
    }
```

## GET - USERS

**<font color="purple">GET</font> /api/users - Formato da Resposta com Token - <font color="lime">200 OK</font>**

```js
[
  {
    id: "c5d871a3-7db7-4864-8944-cb7381666f9f",
    name: "Postgres SQL",
    email: "postgresql@mail.com",
    age: 39,
    created_at: "2022-05-19T22:55:44.593Z",
    updated_at: "2022-05-19T21:46:06.246Z",
  },
  {
    id: "0883141c-53ff-4ccd-9832-ae521bcab4b6",
    name: "Node Js",
    email: "nodejs@mail.com",
    age: 25,
    created_at: "2022-05-19T22:55:44.593Z",
    updated_at: "2022-05-19T21:50:23.397Z",
  },
  {
    id: "5cc93fcc-ed14-439e-a412-bedc3d9ca3e7",
    name: "Jhon Doe",
    email: "jhondoe@mail.com",
    age: 20,
    created_at: "2022-05-20T00:21:13.850Z",
    updated_at: "2022-05-20T00:21:13.850Z",
  },
];
```

**<font color="purple">GET</font> /api/users - Formato da Resposta SEM o Token - <font color="lime">401 UNAUTHORIZATION</font>**

```js
    {
        "message": "no verification token found."
    }
```

**<font color="purple">GET</font> /api/users/:id - Formato da Resposta com Token - <font color="lime">200 OK</font>**

```js
    {
        "id": "5cc93fcc-ed14-439e-a412-bedc3d9ca3e7",
        "name": "Jhon Doe",
        "email": "jhondoe@mail.com",
        "age": 20,
        "created_at": "2022-05-20T00:21:13.850Z",
        "updated_at": "2022-05-20T00:21:13.850Z"
    }
```

**<font color="purple">GET</font> /api/users/:id - Formato da Resposta com Token porem com usuário não encontrado - <font color="lime">404 NOTFOUND</font>**

```js
    {
        "message": "User Not Found."
    }
```

**<font color="purple">GET</font> /api/users/:id - Formato da Resposta SEM Token - <font color="lime">401 UNAUTHORIZATION</font>**

```js
    {
        "message": "no verification token found."
    }
```

## PATCH - USERS

**<font color="yellow">PATCH</font> /api/users/:id - Formato da Requisição - <font color="lime">200 OK</font>**

```js
    {
        "name": "Jhon Doe",
        "email": "jhondoem@mail.com",
        "age": 23,
        "password": "654321"
    }
```

**<font color="yellow">PATCH</font> /api/users/:id - Formato da Resposta com Token - <font color="lime">200 OK</font>**

```js
    {
        "id": "0883141c-53ff-4ccd-9832-ae521bcab4b6",
        "name": "Matheus Serafim Kuchak",
        "email": "matheus18serafim@gmail.com",
        "age": 25,
        "created_at": "2022-05-19T22:55:44.593Z",
        "updated_at": "2022-05-20T00:16:52.755Z"
    }
```

**<font color="yellow">PATCH</font> /api/users/:id - Formato da Resposta com Token porem com usuário não encontrado - <font color="lime">404 NOTFOUND</font>**

```js
    {
        "message": "User Not Found."
    }
```

**<font color="yellow">PATCH</font> /api/users/:id - Formato da Resposta SEM Token - <font color="lime">200 OK</font>**

```js
    {
        "message": "no verification token found."
    }
```

**<font color="red">DELETE</font> /api/users/:id - Formato da Resposta com Token - <font color="lime">204 NOCONTENT</font>**

**<font color="red">DELETE</font> /api/users/:id - Formato da Resposta com Token porem com usuário não encontrado - <font color="lime">404 NOTFOUND</font>**

```js
    {
        "message": "User Not Found."
    }
```

**<font color="red">DELETE</font> /api/users/:id - Formato da Resposta SEM Token - <font color="lime">401 UNAUTHORIZATION</font>**

```js
    {
        "message": "no verification token found."
    }
```
