---
id: us-02-paraphrasing
title: US-02 Paraphrasing
sidebar_label: Paraphrasing
---

# US-02 Paraphrasing

## User Story
*As a user, I want to paraphrase the selected text with a single click, so I can get a version in different wording but with the same meaning.*

---

## Features

- **FT-01-TEXT-SELECTION**  
  Allow the user to select text directly from a webpage. (Shared with US-01 Summarization)

- **FT-06-PARAPHRASE-BUTTON**  
  Provide a button to trigger the paraphrasing process, embedded in the browser UI or Content Script.

- **FT-07-AI-INTEGRATION-PARAPHRASE**  
  Send the selected text to the Gemini AI model and retrieve a paraphrased version.

- **FT-08-RESULT-DISPLAY-PARAPHRASE**  
  Display the paraphrased text in a popup or modal window and provide an option to save it as a new note.

- **FT-09-CUSTOM-TONE**  
  Optionally, allow users to select a tone for the paraphrased text (e.g., formal, casual, technical).

- **FT-05-ERROR-HANDLING**  
  Handle scenarios where no text is selected or the AI fails to generate a paraphrase, and display an appropriate message. (Shared with US-01 Summarization)

---

## Acceptance Criteria

1. The user can select text on any webpage.
2. A "Paraphrase" button appears in the UI when text is selected.
3. Clicking the button sends the selected text to Gemini and displays the paraphrased version in under 3 seconds.
4. The paraphrased text maintains the original meaning while rewording the content.
5. The user can choose a specific tone (formal, casual, or technical) and regenerate the paraphrase.
6. If no text is selected, an error message is displayed ("Please select text to paraphrase.").
7. The user can save the paraphrased text as a new note with a single click.
