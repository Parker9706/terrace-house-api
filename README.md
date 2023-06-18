<img src="./src/assets/terraceHouseLogoFull.png" alt="Terrace House API Logo" width="" height="" />

# Intro
Introducing **Terrace House API**, an open-source resource that gives developers access to member information and quotes from Terrace House to build fun applications. With Terrace House API, developers gain seamless access to a wealth of data from the beloved Japanese reality TV show, enabling them to create exciting and immersive experiences for Terrace House enthusiasts. 

# Routes
 
```/v1/members``` | Retrieve All Members

```/v1/members/:name``` | Will search by first name, last name, or nickname (EN) and specific with +

```/v1/members/:series``` | Retrieve all members by series
['bxg', 'b&g', 'aloha', 'ond', 'tokyo'];

```/v1/quotes``` | Random Quote

```/v1/quotes/:member``` | Random Quote

## Coming Soon

- Studio Commentator Data
- Guests Data
- Images for Characters
- Series & Episode Data
- Japanese Data

# Contribute

Please contribute by opening a pull request to the (Terrace House API Repo)[www.github.com/parkerhutcheson/terrace-house-api]. 

# Authentication
No authentication is currently in place, however there is a rate limit of 10,000 requests per 15 minutes. If you exceed this, you will receive a status code 429, and will need to wait before making additional requests. 

Any excessive use of this API will be limited to prevent impact to other users.

# Develop Locally

Clone this (repository)[www.github.com/parkerhutcheson/terrace-house-api] to your local machine.

## Prerequisites:
Node.js version 12.0 or later

## Setup

Run the following command in your terminal
`npm run start`

The server will begin running on localhost:3000. 
## Development
Terrace House API has been developed by Parker Hutcheson. All data is provided by public online resources and therefore might not be 100% accurate. Feel free to open a pull request to provide corrections or continue development. You may also submit feedback for corrections or new features using the form [here](www.airtable.com). 

Copyright (c) © 2023 Parker Hutcheson. Terrace House is a registered trademark of Fuji Television Network, Inc. East Entertainment Co., Ltd. フジテレビ イースト・エンタテインメント.フジテレビ イースト・エンタテインメント.

