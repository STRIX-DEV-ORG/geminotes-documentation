---
id: us-11-version-history
title: US-11 Version History
sidebar_label: Version History
---

# US-11 Version History

## User Story
*As a user, I want each note to have a version history, so I can restore previous versions if needed.*

---

## Features

- **FT-47-VERSION-TRACKING**  
  Automatically save a version of the note whenever it is edited.

- **FT-48-VIEW-VERSION-HISTORY**  
  Provide a "View History" button that displays all saved versions of a note.

- **FT-49-VERSION-METADATA**  
  Include metadata for each version, such as the date and time of the edit.

- **FT-50-RESTORE-PREVIOUS-VERSION**  
  Allow users to restore any previous version of a note as the current version.

- **FT-51-VERSION-LIMIT (Optional)**  
  Set a limit on the number of saved versions (e.g., last 10 versions) to optimize storage.

---

## Acceptance Criteria

1. A new version of the note is saved automatically each time the note is edited.
2. Users can view all previous versions of a note along with metadata (e.g., date and time).
3. Users can restore any previous version of a note with a confirmation prompt.
4. The system does not save duplicate versions if no changes are made.
5. (Optional) A maximum of 10 versions is stored to optimize performance.
