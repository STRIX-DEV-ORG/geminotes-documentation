---
id: us-04-source-url
title: US-04 Source URL
sidebar_label: Source URL
---

# US-04 Source URL

## User Story

_As a user, I want the note to automatically include the URL of the source webpage, so I can refer back to the source when needed._

---

## Features

- **FT-15-CAPTURE-URL**  
  Use the `chrome.tabs` API to retrieve the URL of the active tab at the time the note is saved.

- **FT-16-AUTOMATIC-URL-INCLUSION**  
  Automatically add the retrieved URL as a field in the note’s data structure.

- **FT-17-DISPLAY-URL-IN-NOTE**  
  Show the URL in the note’s details, ensuring it is easily visible and accessible.

- **FT-18-CLICKABLE-LINKS**  
  Make the URL clickable so users can navigate back to the original webpage.

- **FT-05-ERROR-HANDLING**  
  Handle cases where the URL is not retrievable (e.g., restricted or local pages).

---

## Acceptance Criteria

1. The URL of the active tab is automatically captured when a note is created.
2. The URL is saved alongside the note content and stored correctly.
3. Users can view the URL within the note details.
4. The URL is displayed as a clickable link for easy navigation.
5. If the URL cannot be retrieved, an error message or placeholder is displayed.
