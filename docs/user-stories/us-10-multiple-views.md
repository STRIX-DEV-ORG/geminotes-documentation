---
id: us-10-multiple-views
title: US-10 Multiple Views
sidebar_label: Multiple Views
---

# US-10 Multiple Views

## User Story
*As a user, I want to toggle between different views (list, cards, mind map) to better manage my notes.*

---

## Features

- **FT-42-VIEW-TOGGLE**  
  Provide a UI toggle to switch between different views:  
  - **List View**: Compact and simple.  
  - **Card View**: Grid-based visual representation.  
  - **Mind Map View**: Graphical relationship mapping (optional).

- **FT-43-DEFAULT-VIEW**  
  Set a default view (e.g., List View) with an option for users to change their preferences.

- **FT-44-DYNAMIC-RENDERING**  
  Ensure the selected view dynamically renders notes without requiring a page reload.

- **FT-45-TAG-FILTERING-IN-VIEWS**  
  Maintain tag-based filtering and sorting consistency across all views.

- **FT-46-CUSTOM-LAYOUT**  
  Allow users to manually rearrange notes in the Mind Map View (optional).

---

## Acceptance Criteria

1. Users can toggle between at least two views (List and Card) with an optional Mind Map View for advanced organization.
2. Notes dynamically re-render based on the selected view without page reload.
3. Tag-based filtering and sorting work consistently across all views.
4. The system defaults to List View unless the user selects a different default.
5. (Optional) Users can rearrange notes manually in the Mind Map View.
