Post Management Demo 📋
=======================

This repository demonstrates a post management system developed using **Angular** with **NGXS** for state management. The project allows listing posts, viewing post details, and creating new posts, all built using the latest versions of Angular, NGXS, and other dependencies.

Features ✨
----------

-   **Post List**: View a list of all posts.
-   **Post Detail**: View details of a specific post by selecting it from the list.
-   **Create Post**: Add a new post via a form, which is then stored in the NGXS state.
-   **Modern Stack**: Built with the latest versions of Angular, NGXS, and supporting libraries.

Getting Started 🚀
------------------

### Prerequisites

Ensure you have the following installed:

-   Node.js (v14 or higher)
-   Angular CLI (v12 or higher)
-   [Git](https://git-scm.com/)

### Installation 🛠️

1.  **Clone the repository**:

    bash

    Copia codice

    `git clone https://github.com/Alessandroinfo/post-management-demo.git`

2.  **Navigate to the project directory**:

    bash

    Copia codice

    `cd post-management-demo`

3.  **Install dependencies**:

    bash

    Copia codice

    `npm install`

4.  **Run the application**:

    bash

    Copia codice

    `ng serve`

    The application will be available at `http://localhost:4200/`.

Usage 📝
--------

### Post List 🗂️

The homepage displays a list of posts fetched from a mock backend. The posts are paginated for easier navigation of larger datasets.

### Post Detail 🔍

Click on any post in the list to view its detailed content, including the post's title and body.

### Create Post ➕

Click on the "Create Post" button to add a new post. A form will appear where you can enter the title and content. Upon submitting the form, the new post will be added to the list and stored in the NGXS state.

NGXS State Management 🌐
------------------------

This project uses **NGXS** to manage the state of posts:

-   **State**: Posts are stored in a centralized state (`PostState`), making it easier to manage and scale the application.
-   **Actions**: NGXS actions handle interactions with the state, including:
  -   `GetPosts`: Fetch a list of posts from the backend.
  -   `AddPost`: Add a new post to the state.
  -   `GetPostById`: Retrieve the details of a specific post.

You can find the NGXS logic in:

bash

Copia codice

`src/app/store/post/`

Project Structure 🏗️
---------------------

bash

Copia codice

`src/
│
├── app/
│   ├── components/       # Angular components for post list, details, and creation
│   ├── store/            # NGXS store configuration, actions, and state
│   ├── services/         # Post service for mock API interaction
│   └── models/           # Post model interface
│
├── assets/               # Static assets (images, styles, etc.)
└── environments/         # Environment configurations (mock API URLs)`

Mock API 📡
-----------

The project uses a mock service (based on Angular's `HttpClient`) to simulate backend interaction. This service is responsible for fetching, creating, and displaying posts. You can find this service in:

bash

Copia codice

`src/app/services/post.service.ts`

If you wish to integrate with a real backend, you can modify the service to point to your API endpoints.

Running Unit Tests 🧪
---------------------

Run the unit tests with:

bash

Copia codice

`ng test`

The project includes unit tests for the components and NGXS state management, ensuring the core functionalities are reliable and maintainable.

Contributing 💻
---------------

Contributions are welcome! If you want to improve the project, feel free to fork the repository and submit a pull request.

License 📄
----------

This project is licensed under the MIT License.

* * * * *

### Happy Coding! 😊

* * * * *
