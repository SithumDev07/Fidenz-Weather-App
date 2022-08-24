# Fidenz Weather App

### Instructions to use

#### 1. Create Private and Public Keys to start a https server

    $ cd /bin
    $ openssl genrsa -out key.pem
    $ openssl req -new -key key.pem -out csr.pem
    $ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem 
    $ rm csr.pem

#### 2. Create a .env file in the project directory

#### 3. Create a redis server and add redis server credentials into .env

#### 4. Create Open Weather Account and add the APP_ID into .env

#### 5. Create Auth0 Account and add required auth0 appID and other credentials to .env

#### 6. Start

    $ npm run start

    $ yarn run start

App is running on, (if PORT number is 8080 in .env)

    https://localhost:8080/weather

### Requirements

    * App is require a public key and private key to create a https server
    * .env file at the root directory
    * Redis Server
    * Open Weather API Account
    * Auth0 Account