---
id: us-01-summarization
title: US-01 Summarization
sidebar_label: Summarization
---

# US-01 Summarization

## User Story

_As a user, I want to select text from a webpage and click a button to summarize it, so I can save the information more concisely._

---

## Features

- **FT-01-TEXT-SELECTION**  
  Allow the user to select text directly from a webpage. Integrate a text selection detector in the DOM (Content Script).

- **FT-02-SUMMARIZE-BUTTON**  
  Provide a button to trigger the summarization process, embedded in the browser UI or Content Script.

- **FT-03-AI-INTEGRATION**  
  Connect the selected text to the Gemini AI model and retrieve the summary.

- **FT-04-RESULT-DISPLAY**  
  Show the summary in a note.

---

## Acceptance Criteria

1. The user can select text on any webpage.
2. Clicking the button sends the selected text to Gemini and displays the summary in under 3 seconds.
3. The summary is concise and meaningful, adhering to the content of the original text.
4. The user can save the summary in the note.
