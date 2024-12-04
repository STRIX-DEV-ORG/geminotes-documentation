# Geminotes Browser Extension

**Geminotes** is a browser extension that enhances your browsing experience by allowing you to take notes, summarize content, paraphrase text, and extract key points directly from your browser. The extension integrates into the browser via a sidebar, offering a seamless, persistent workspace for managing your notes and processing content without interrupting your workflow.

## Features

- **Note Creation**: Create and manage text notes directly within the sidebar.
- **Summarization**: Automatically summarize any selected content on the web.
- **Paraphrasing**: Paraphrase selected text to improve readability or change tone.
- **Key Point Extraction**: Extract key points from text or web pages to highlight important information.
- **Persistent Sidebar**: The sidebar stays open for easy access to your notes and tools, without disrupting your browsing experience.
- **Responsive UI**: A clean, responsive interface built with React that adapts to different screen sizes.

## How It Works

The **Geminotes** extension works by adding a sidebar to your browser that enables you to interact with the content of the current webpage and manage your notes. The extension is built around several key components:

### 1. **Sidebar UI**

- The sidebar is the main interface of the extension, accessible from the browser toolbar.
- It provides an area where users can create, view, and manage their notes.
- The sidebar includes buttons for actions like summarizing text, paraphrasing, and extracting key points from the webpage.
- Users can resize or close the sidebar at any time.

### 2. **Content Scripts**

- **Content scripts** are JavaScript files that interact with the DOM of the current webpage.
- These scripts allow the extension to process selected content, summarize it, extract key points, or paraphrase it.
- The content scripts are triggered when the user selects text or requests an action through the sidebar interface.

### 3. **Background Service Worker**

- The **background script** runs in the background, handling tasks that need to persist beyond a single tab or interaction.
- It manages data storage, event handling, and ensures that the extension remains responsive across different pages and tabs.
- This script is responsible for initializing the extension, storing notes, and cleaning up when the extension is uninstalled.

### 4. **Note Storage**

- Notes are saved locally in the browser’s storage, allowing them to persist across sessions.
- Users can add, edit, and delete notes from the sidebar, and these changes are saved automatically.
- Notes are also synchronized with the sidebar UI to ensure a smooth and consistent user experience.

### 5. **Zustand State Management**

- **Zustand** is used for managing the state of the sidebar and its features.
- The global store tracks the user's notes, ongoing tasks (like summarization or paraphrasing), and the results of these tasks.
- Zustand ensures that the sidebar's state is always up to date and manages asynchronous actions efficiently.

### 6. **Summarization and Paraphrasing**

- The extension communicates with external APIs to perform summarization and paraphrasing.
- Users can select text from a webpage and click the appropriate button in the sidebar to summarize or paraphrase the content.
- The results are displayed directly in the sidebar, allowing users to copy, edit, or save the processed text.

### 7. **Key Point Extraction**

- The sidebar includes an option to extract key points from the content of a webpage.
- This feature analyzes the page or selected text and returns a list of the most important points, which are displayed in the sidebar for easy access.

### 8. **API Integration**

- The extension communicates with external APIs to process text, such as summarization, paraphrasing, and key point extraction.
- When a user requests any of these features, the selected content is sent to the API, and the processed result is returned and displayed in the sidebar.

## Installation

1. **Download the Extension Files**: Clone or download the source code from the repository.
2. **Load in Browser**:
   - Open your browser's extensions page (`chrome://extensions` in Chrome).
   - Enable **Developer Mode**.
   - Click **Load unpacked** and select the `build` directory.
3. **Start Using Geminotes**: Once installed, the Geminotes icon will appear in your browser toolbar. Click the icon to open the sidebar and start taking notes.

## How to Use

### Creating Notes

- Click on the **Geminotes icon** in the browser toolbar to open the sidebar.
- Type or paste your text into the **note area**.
- Notes are saved automatically and are accessible across sessions.

### Summarizing Content

- To summarize a webpage or selected text:
  - Select the text you want to summarize.
  - Click the **Summarize** button in the sidebar.
  - The extension will process the selected content and display the summarized version in the sidebar.

### Paraphrasing Content

- To paraphrase selected text:
  - Select the text you want to paraphrase.
  - Click the **Paraphrase** button in the sidebar.
  - The paraphrased text will appear in the sidebar, offering an alternative version of the selected content.

### Extracting Key Points

- To extract key points from a webpage:
  - Click the **Extract Key Points** button in the sidebar.
  - The extension will analyze the page content and return a list of key points in the sidebar.

## Permissions

The extension requires the following permissions:

- **Active Tab**: To interact with the current page and read selected text.
- **Storage**: To store user-created notes locally in the browser.

## Technologies Used

- **React**: A JavaScript library for building the user interface of the sidebar.
- **Zustand**: A small and fast state management library for handling app state.
- **Vite**: A build tool for fast development and optimized production builds.
- **TypeScript**: A typed superset of JavaScript that enhances developer productivity.
- **Chrome Extensions API**: To interact with the browser and perform tasks like storing data and managing tabs.

## License

Geminotes is licensed under the MIT License. See the LICENSE file for more details.
