---
title: Api
slug: /references/api/api
sidebar_position: 2
last_update:
  date: 2026-01-03
  author: Anis
---

# API

## Open API
### Dev API

- [GitHub’s API](https://api.github.com/)

### Countries API

- [Country State City API](https://countrystatecity.in/) - [demo](https://dr5hn.github.io/countries-states-cities-database/)

### mock API 

Free fake API for testing and prototyping.

- [jsonplaceholder](https://jsonplaceholder.typicode.com/)
- More fake api :[https://github.com/typicode](https://github.com/typicode)

### REST API Tools
on linux
- Postman (Desktop Application): Postman Website
- Insomnia (Desktop Application): Insomnia Website
- curl (Command-Line Tool):curl Website
- HTTPie (Command-Line Tool):HTTPie Website
- Mozilla Firefox (Web Browser) with REST Client Add-On:Firefox Add-On: REST Client
- Advanced REST Client (Web-Based):Advanced REST Client Website


## API Testing
### Automate API testing
you can automate API testing using Python along with the `requests` library, which is a popular choice for making HTTP requests. Here's a basic example of how to automate API testing with Python:

- Install the `requests` library if you haven't already. You can install it using `pip`:

```bash 
pip install requests
```

- Write a Python script that uses the `requests` library to interact with your API endpoints. 

Here's an example script that sends `GET` and `POST` requests:
``` python
import requests

## Define the API endpoint URL
api_url = "https://api.example.com/users"

## Test Scenario 1: GET Request
response = requests.get(api_url)

if response.status_code == 200:
    print("Test Scenario 1: GET Request - Passed")
else:
    print("Test Scenario 1: GET Request - Failed")

## Test Scenario 2: POST Request
headers = {"Content-Type": "application/json"}
data = {"name": "John", "email": "john@example.com"}

response = requests.post(api_url, headers=headers, json=data)

if response.status_code == 201:
    print("Test Scenario 2: POST Request - Passed")
else:
    print("Test Scenario 2: POST Request - Failed")
```
You can further enhance this script by adding more test cases, handling response data, and incorporating assertions to validate the response content.

- Run the Python script:
```bash
python api_test.py
```
