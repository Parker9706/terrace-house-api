# Intro
Introducing **Terrace House API**, an open-source resource that gives developers access to member information and quotes from Terrace House to build fun applications. With Terrace House API, developers gain seamless access to a wealth of data from the beloved Japanese reality TV show, enabling them to create exciting and immersive experiences for Terrace House enthusiasts. 

# Routes
 
```/v1/members``` | Retrieve All Members

```/v1/members/:name``` | Will search by first name, last name, or nickname (EN)

```/v1/quotes``` | Random Quote

```/v1/quotes/:name``` | Fetch a quote from a specific member




# Authentication
No authentication is currently in place, however there is a rate limit of 1,000 requests per 15 minutes. If you exceed this, you will receive a status code 429, and will need to wait before making additional requests. 

Any excessive use of this API will be limited to prevent impact to other users.

# Run Locally

Clone this repository to your local machine

## Prerequisites:
Node.js version 12.0 or later

## Setup

```npm run start```

Port 3000 will be the default, or you can reference a port in your local ENV.

## Development
Terrace House API has been developed by Parker Hutcheson. All data is provided by public online resources and therefore might not be 100% accurate. You may submit feedback for corrections or new features using the form [here](www.airtable.com).

## License

Copyright (c) © 2023 Parker Hutcheson. Terrace House is a registered trademark of Fuji Television Network, Inc. East Entertainment Co., Ltd. フジテレビ イースト・エンタテインメント.フジテレビ イースト・エンタテインメント.

