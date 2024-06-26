### features of netflix-gpt
- Login & Signup Screen/page - It will contain a signin/signup form. Once logged in, redirect to browse page.
- Browse page: (Only after authentication)
 - Header
 - Main movie
    - Trailer in Background
    - Title and description and Play button
    - Movie suggestions
        - MovieList * n
- Netflixgpt
 - Searchbar
 - Movie suggestions.


 # developing NetflixGPT
 - create-react-app Netflix-GPT.
 - configured Tailwindcss
 - Routing in app
 - built header with netflix logo
 - background image
 - built login form.
 - built Signup form.
 - should add validations
 - useRef Hook
 - deploy our app on firebase
 - create sign up user account
 - implemented signin signup authentications
 - created redux store with user slice
 - updated user profile using updateProfile function of firebase/auth.
 - dispatched actions like addUser and removeUser to userSlice.
 - subscribed to store using useSelector and passed photoURL to userIcon in Browse page
 - Bug fix: If user is not logged in, redirect to login page. If user is logged in, redirect to browse page.
 - unsubscribed to onAuthStateChanged callback.
 - Register for TMDB API, create a new app and get access token
 - Go to Documentation and get TMDB now playing list.
 - get data from TMDB API
 - created custom hooks to get nowplaying movies and get trailer video
 - planned for browse page with main container and secondary container
 - fetch movie list, update the store with movie list
 - fetch trailer video, update the store with trailer video
 - Embed youtube video and autoplay it on mute
 - make main container look awesome
 - Built secondary component
 - got images for my movie cards in my secondary component.
 - Made the browse page amazing with Tailwind css
 - created multiple custom hooks
 - created gpt search page
 - added gpt search bar
 - added multilingual feature in our gpt search page (Huge thing!!)
 - created .env file to store secret keys
 - added .env to git ignore.
 - we did memoization
 - we made our app responsive