Post Management Demo
====================

This is a demo application built with Angular for managing posts. The application utilizes NGXS for state management and demonstrates basic CRUD operations for posts, including listing, creating, and viewing post details.

Features
--------

-   **List Posts:** Fetches and displays a list of posts from a GraphQL API (`https://graphqlzero.almansi.me/`).
-   **Create a Post:** Allows users to create new posts. Although these posts are not persisted on the API, they remain in the local state and are visible when navigating through the app.
-   **View Post:** Users can click on a post to view its details on a separate page.
-   **State Management:** State is managed using NGXS, handling the local state for the list of posts and pagination.
-   **Routing:** The app implements Angular routing for navigating between the post list and individual post details.

Setup Instructions
------------------

1.  Clone the repository:

    bash

    Copia codice

    `git clone https://github.com/Alessandroinfo/post-management-demo.git`

2.  Navigate to the project directory and install dependencies:

    bash

    Copia codice

    `cd post-management-demo
    npm install`

3.  Run the development server:

    bash

    Copia codice

    `ng serve`

4.  Access the application at `http://localhost:4200/`.

Dependencies
------------

-   Angular
-   NGXS (for state management)
-   Apollo GraphQL (for data fetching)

Future Enhancements
-------------------

-   Implement post deletion functionality.
-   Improve UI with additional styling (e.g., using a CSS framework like Tailwind or Bootstrap).
-   Persist created posts in the API.
