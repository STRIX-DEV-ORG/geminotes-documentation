---
id: us-02-paraphrasing
title: US-02 Paraphrasing
sidebar_label: Paraphrasing
---

# US-02 Paraphrasing

## User Story

_As a user, I want to paraphrase the selected text with a single click, so I can get a version in different wording but with the same meaning._

---

## Features

- **FT-01-TEXT-SELECTION**  
  Allow the user to select text directly from a webpage. (Shared with US-01 Summarization)

- **FT-06-PARAPHRASE-BUTTON**  
  Provide a button to trigger the paraphrasing process, embedded in the browser UI or Content Script.

- **FT-07-AI-INTEGRATION-PARAPHRASE**  
  Send the selected text to the Gemini AI model and retrieve a paraphrased version.

- **FT-08-RESULT-DISPLAY-PARAPHRASE**  
  Display the paraphrased text in a note.

---

## Acceptance Criteria

1. The user can select text on any webpage.
2. Clicking the button sends the selected text to Gemini and displays the paraphrased version in under 3 seconds.
3. The paraphrased text maintains the original meaning while rewording the content.
4. The user can save the paraphrased text in a note with a single click.
