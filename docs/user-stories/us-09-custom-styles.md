---
id: us-09-custom-styles
title: US-09 Custom Styles
sidebar_label: Custom Styles
---

# US-09 Custom Styles

## User Story
*As a user, I want to choose between different summarization or paraphrasing styles (formal, technical, casual), so I can tailor the output to my needs.*

---

## Features

- **FT-39-STYLE-SELECTION**  
  Provide a dropdown or toggle to select the desired style (e.g., formal, technical, casual).

- **FT-40-AI-STYLE-INTEGRATION**  
  Send the selected style as a parameter in the API request to Gemini to adjust the output accordingly.

- **FT-41-PREVIEW-OUTPUT**  
  Display a preview of the styled output before saving it as a note.

- **FT-05-ERROR-HANDLING**  
  Handle scenarios where the AI cannot generate a specific style and fall back to a default style. (Shared with US-01, US-02)

---

## Acceptance Criteria

1. Users can select from at least three styles (e.g., formal, casual, technical) when summarizing or paraphrasing text.
2. The selected style is reflected in the AI-generated output.
3. Users can preview the styled output before saving it as a note.
4. If the selected style fails, a default style is applied with a notification to the user.
