/*

HTTP: Hyper Text Transfer Protocol

1. A protocol is defined for machines to communicate
2. Specifically for websites it is the most common way for websites frontend to talk to its backend

Web RTC protocol for web communication

HTTP: Most common way for website content to communicate from frontend to backend.


Things the client needs to know about

1. Protocol: HTTP/HTTPs
2. Address: URL/IP/PORT
3. Route: 
4. Headers, Body and Query Parameters
5. Methods: GET POST

Things the server needs to know about:
1. Response headers
2. Response Body
3. Status Codes


https://chat.openai.com/backend-api/conversation

protocol: https
url: chat.openai.com
route: backend-api/conversation

cookie is one of the headers we can send which can provide authentication
body is usually in hte JSON
methods: POST (what kind of request we want to send)


the authorization cookie is stored in the browser everytime we log in 


Things that happen in the browser after we fire a request:

1. Browser parses the URL
2. Does a DNS Lookup ie. converts google.com to its IP
3. Establishes a connection to the IP (does handshake)

DNS Resolution: URLS are mapped to an IP so when we buy a url it is mapped to our server's IP


At the server, when the input request is recieved:
1. We get the inputs (route, body, headers)
2. We do some logic on the input, calculate the output
3. Return the outpu body, headers and status codes, GET, POST, PUT, DELETE

200: OK
404: Page/Route not found
403: Authentication Error: Accessing Resources we dont have access to
500: Internal Server Error

Create an HTTP server from scratch in C++
*/