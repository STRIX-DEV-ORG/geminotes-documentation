# Architecture of Geminotes

## Overview
Geminotes is a Chrome extension designed to streamline note-taking with AI-powered summarization and paraphrasing. Its architecture is modular, following Chrome’s extension structure for Manifest V3.

## Key Components
### 1. Manifest.json
Defines permissions, entry points, and configurations.

### 2. Background Script
Handles events, communication, and core logic.

### 3. Content Script
Interacts with the webpage DOM to extract user-selected text.

### 4. Popup UI
Provides the user interface for managing notes.

## Data Flow
1. **User selects text on a webpage.**
2. **Content Script** sends the selected text to the **Background Script**.
3. The **Background Script** processes the text using AI and returns a summary.
4. The summary is displayed in the **Popup UI**.

## Permissions
- **activeTab**: To interact with the current webpage.
- **storage**: To save notes locally.

## Diagram
```mermaid
graph TD;
    A[User Interaction] --> B[Popup Script];
    B --> C[Background Script];
    C --> D[Content Script];
    D --> E[Updates Webpage DOM];
