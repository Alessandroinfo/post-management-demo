📮 Post Management Demo
=======================

This project is a demo application built with Angular for managing posts. It uses NGXS for state management and demonstrates basic CRUD operations such as listing, creating, and viewing post details.

✨ Features
----------

-   **📋 List Posts:** Fetches and displays a list of posts using the GraphQL API [graphqlzero.almansi.me](https://graphqlzero.almansi.me/).
-   **➕ Create a Post:** Allows users to create new posts. While these posts are not persisted to the API, they remain visible in the local state and are accessible during navigation.
-   **👁️ View Post:** Users can click on a post to view its details on a separate page, where the title and body of the post are displayed.
-   **💾 State Management:** State is managed using NGXS, including handling the post list and pagination in the local state.
-   **🌐 Routing:** Angular routing is implemented to navigate between the post list and the single post details view.

🚀 Getting Started
------------------

1.  Clone the repository:

    bash

    Copia codice

    `git clone https://github.com/Alessandroinfo/post-management-demo.git`

2.  Navigate to the project directory and install the dependencies:

    bash

    Copia codice

    `cd post-management-demo
    npm install`

3.  Run the development server:

    bash

    Copia codice

    `ng serve`

4.  Access the application at `http://localhost:4200/`.

🛠️ Dependencies
----------------

-   **Angular:** Framework used to build the app.
-   **NGXS:** Used for centralized state management.
-   **Apollo GraphQL:** For fetching data from the GraphQL API.

📌 Future Enhancements
----------------------

-   **🗑️ Post Deletion:** Add the ability to delete posts.
-   **🎨 UI Enhancements:** Apply a CSS framework like Tailwind or Bootstrap to improve the interface design.
-   **📡 Post Persistence:** Enable post creation to persist data directly to the API.
