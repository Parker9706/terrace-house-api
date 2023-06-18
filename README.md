<img src="./src/frontend/assets/terracehouse_logo.png" alt="Terrace House API Logo"/>

# Introduction
**Terrace House API** is an open-source resource that gives developers access to member data and quotes from Terrace House to build fun applications and projects. 

# Endpoints

## Members
[Get All Members](###get-all-members)
- [Get all members by series](###Get-all-members-by-series)
- [Get a member](###Get-a-member)
- [Search by name or nickname](###Search-by-name-or-nickname)

## Quotes

- [Get a quote](###Get-a-random-quote)
- [Get all quotes from a member](###Get-all-quotes-from-a-member)


---
### Get All Members
 Retrieve all memebers from all Terrace House series.
 
Request:
```shell
GET "https://www.terracehouseapi.com/api/v1/members"
```
Response:
```json
[
    {
        "appearanceNumber": 1,
        "name": "Kaori Watanabe",
        "japaneseName": "渡邉香織",
        "nickname": [],
        "occupation": "Illustrator",
        "birthDate": "June 25, 1990",
        "age": 28,
        "appearance": [
            1,
            20
        ],
        "episodes": 20,
        "series": "Tokyo 2019-2020"
    },
    ...all members
]
```
---
### Get all members by series
Add the corresponding key as a URL parameter to return all members from a particular series.
| Parameter    |      Series      |
|   --------   |      -------     |
| bxg  | Boys X Girls Next Door   |
| b&g | Boys & Girls in the City  |
| aloha    | Aloha State          |
| ong    | Opening New Doors      |
| tokyo    | Tokyo 2019-2020      |

Request:
```shell
GET "https://www.terracehouseapi.com/api/v1/members/ond"
```
Response:
```json
[
    {
        "appearanceNumber": 1,
        "name": "Ami Komuro",
        "japaneseName": "小室安未",
        "nickname": [
            "Ami"
        ],
        "occupation": "university student / aspiring model",
        "birthDate": "January 19, 1997",
        "age": 21,
        "appearance": [
            1,
            17
        ],
        "episodes": 17,
        "series": "Opening New Doors"
    },
    ...all Opening New Doors members
]
```
---
### Get a member
Separate the first and last name with a "+" symbol

Request:
```shell
GET "https://www.terracehouseapi.com/api/v1/members/chikako+fukuyama"
```
Response:
```json
[
    {
        "appearanceNumber": 14,
        "name": "Chikako Fukuyama",
        "japaneseName": "福山智可子",
        "nickname": [
            "Chika"
        ],
        "occupation": "spa receptionist",
        "birthDate": "November 8, 1988",
        "age": 28,
        "appearance": [
            26,
            36
        ],
        "episodes": 11,
        "series": "Aloha State"
    }
]
```

### Search by name or nickname
Use a general search to look for members, including nicknames! This endpoint can bring back multiple members with similar names, or help you find a specific member by their nick name. 

Request:
```shell
GET "https://www.terracehouseapi.com/api/v1/members/tap"
```
Response:
```json
[
  {
        "appearanceNumber": 3,
        "name": "Yuki Adachi",
        "japaneseName": "安達雄基",
        "nickname": [
            "Tap"
        ],
        "occupation": "tap dancer",
        "birthDate": "August 19, 1987",
        "age": 27,
        "appearance": [
            1,
            17
        ],
        "episodes": 17,
        "series": "Boys & Girls in the City"
    }
]
```

### Get a random quote
This endpoint will fetch a random quote from the show

Request:
```shell
GET "https://www.terracehouseapi.com/api/v1/quotes"
```
Response:
```json
{
    "name": "Minori Nakada",
    "japaneseName": "中田みのり",
    "quote": "I love having free time. I can live forever doing nothing."
}
```

### Get all quotes from a member
This endpoint will fetch all quotes from a member, depending on if there is any available. Like in the members endpoint, provide the first name and last name separated by a "+" symbol.

Request:
```shell
GET "https://www.terracehouseapi.com/api/v1/quotes/minori+nakada"
```
Response:
```json
[
    {
        "name": "Minori Nakada",
        "japaneseName": "中田みのり",
        "quote": "I love having free time. I can live forever doing nothing."
    }
]
```


## Coming Soon

- Studio Commentator Data
- Guests Data
- Images for Characters
- Series & Episode Data
- Japanese Data

# Contribute

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change. 

[Terrace House API Repository](www.github.com/parkerhutcheson/terrace-house-api)

# Authentication
No authentication is currently in place, however there is a rate limit of 10,000 requests per 15 minutes. If you exceed this, you will receive a status code 429, and will need to wait before making additional requests. 

Any excessive use of this API will be limited to prevent impact to other users.

# Local Development

Clone this [repository](www.github.com/parkerhutcheson/terrace-house-api) to your local machine.

## Prerequisites:
Node.js version 12.0 or later

## Setup

Run the following command in your terminal:
```bash
npm run start
```

The server will begin running on localhost:3000. 
# License
Terrace House API has been developed by Parker Hutcheson. All data is provided by public online resources and therefore might not be 100% accurate. Please see how to contribute above to improve or correct data.

Copyright (c) © 2023 Parker Hutcheson. Terrace House is a registered trademark of Fuji Television Network, Inc. East Entertainment Co., Ltd. フジテレビ イースト・エンタテインメント.フジテレビ イースト・エンタテインメント.

