# Transend (simple transfer and add money api)

A project for the Treblle API hackathon.

Transend exists to simulate a simple transfer process. This API provides a simple, easy and secured way to transfer and add money between users. It uses JSON Web Tokens (JWTs) for authentication and authorization, and it has endpoints for forgot password, reset password, and retrieve transactions history.

# Project Features:
- Simple and easy to use
- Uses JWTs for authentication and authorization
- Includes endpoints for forgot password, reset password, and retrieve transactions history which provides a secure way to access the API.
- Has about 10 endpoints in total

### Instructions
- Register a user
- Log in with email and password
- Copy access token and use as bearer token for all requests, **IMPORTANT**

Endpoints that don't require access token are `/v1/register` `/v1/login` `/v1/reset` `/v1/forgot` `/v1/refresh`

**To add money**
- Send amount to `/v1/add_money`
- Check `/v1/user/wallet` for update

**To transer make transfer**
- Send amount and email to `/v1/transfer`
- Check `/v1/user/wallet` for update

Here's how to setup:
---
---
### Setup Sails

```sh 
npm install sails -g
```
or
```sh
yarn add global sails
```
---

### Setup the project
- Make sure you are in project directory, if not:

```sh
cd transend
```
- Install the necessary packages

```sh
npm install
```
or
```sh
yarn install
```
- Once done with installation, to start the server:
```sh
sails l
```
or
```sh
sails lift
```
---

### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Mon Jul 03 2023 18:29:07 GMT+0100 (West Africa Standard Time) using Sails v1.5.4.

<!-- Internally, Sails used [`sails-generate@2.0.8`](https://github.com/balderdashy/sails-generate/tree/v2.0.8/lib/core-generators/new). -->



<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

