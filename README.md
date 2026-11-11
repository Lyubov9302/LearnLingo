LearnLingo is a web application for a company that offers online language tutoring services. 
The application allows users to find suitable teachers using such filters:  language, level of knowledge and price.

The application consists of 3 pages:
• “Home” page featuring the company’s advantages and a call-to-action link that redirects the user to the “Teachers” page.
• “Teachers” page containing a list of teachers.
• private “Favorites” page displaying the teachers the user has added to their “favorites”

Technologies: 
• React
• TypeScript
• Vite
• React Router
• Firebase Authentication
• Firebase Realtime Database
• React Hook Form
• Yup
• React Hot Toast
• CSS Modules
• Vercel

Figma layout - LearnLingo

Technical Requirements:
1. User authentication (registration, login, retrieving current user data, and logout) using Firebase.
2. Registration/login form and basic field validation using `react-hook-form` and `yup`.
3. Collection of teachers in the Firebase Realtime Database with the following fields: `name`, `surname`, `languages`, `levels`, `rating`, `reviews`, `price_per_hour`, `lessons_done`, `avatar_url`, `lesson_info`, `conditions`, and `experience`.
4. Teacher profile card with their details, following the provided design layout.
5. The "Teachers" page initially renderі 4 cards. Additional cards can be loaded by clicking a "Load more" button, which triggers a database request to fetch the next set of cards.
6. Handling the "heart" (favorite) button:
- If clicked by an **unauthorized** user: Display a modal window or a push notification stating that this feature is available only to authorized users.
- If clicked by an **authorized** user: Adds the card to the user's list of favorites and updates the color of the "heart" button.
7. The user's current state (including their favorites) persists when the page is reloaded. In other words, when a teacher's information card is added to "Favorites" and the page is refreshed, the button remains in the "selected" state (with the corresponding color).
8. Clicking the "heart" button again removes the card from the "Favorites" list, and the button color reverts to its original state.
9. Clicking the "Read more" button expands the card to reveal more detailed information about the teacher, along with reviews from their students.
10. Clicking the "Book trial lesson" button opens a modal window containing a form to book a trial lesson.
11. The modal window closes when clicking the "X" (close) button, clicking the backdrop, or pressing the Esc key.
12. Authorized users have access to a private "Favorites" page, where they can view all the teacher cards they have added to their favorites.
13. Implemented routing using React Router. Added filtering options.


