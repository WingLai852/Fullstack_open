sequenceDiagram
    participant browser
    participant server

    Note right of browser: User types note text and clicks "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note (content=...)
    activate server
    Note over server: Store note and add timestamp
    server-->>browser: 302 Found (Location: /exampleapp/notes)
    deactivate server

    Note right of browser: Browser follows the redirect

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: JS fetches current notes as JSON

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [ ..., { "content": "<your note>", "date": "YYYY-MM-DD" } ]
    deactivate server

    Note right of browser: Callback renders the notes list
