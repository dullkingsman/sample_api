# Sample API

> I hope this clarifies `what backend looks like `and paves the way for you to start on that journey.

This is a very simple sample of how data is handled in an api and a showcase to the true separation between the frontend and the backend of the system when it comes to development at least in the context of RESTful APIs.

There are `six end points` in this api and can be queried as follows: 

## Root Test
    
`URL:` http://localhost:3000/api

`Method: ` GET

> Returns an object with a `data` field that contains the string `Sample API`

## Echo Test

`URL:` http://localhost:3000/api/user/

`Method: ` GET

`body(json): ` any

> Throws any given `json` right` back at the entity` that made the query in an object with a `data` field.

## Signup
    
`URL:` http://localhost:3000/api/user/signup 

`Method: ` POST

`body(json): ` 
~~~json
{
	"username": "some_username",
	"phonenumber": "some_phone_number",
	"password": "some_password",
	"country": "some_country"
}
~~~

> Returns an object with a `data` field that contains the `newly created user`.

## Signin
    
`URL:` http://localhost:3000/api/user/signin

`Method: ` POST

`body(json): ` 
~~~json
{
	"username": "registered_username",
	"password": "registered_password"
}
~~~

> Returns an object with a `data` field that contains the string `login success`.

## Get User
    
`URL:` http://localhost:3000/api/user/some_registered_user_id

`Method: ` GET

`body(json): ` 
~~~json
{
	"username": "registered_username",
	"password": "registered_password"
}
~~~

> Returns an object with a `data` field that contains the `user with the same id as in the url`.

## Update User
    
`URL:` http://localhost:3000/api/user/some_registered_user_id

`Method: ` PUT

`body(json): ` any json with fields that match database fields and valid values like:

~~~json
{
    "username": "some_other_username"
}
~~~

> Returns an object with a `data` field that contains the `updated user with the same id as in the url`.