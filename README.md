
-- ADDING A MOVIE

# Step 1 | Create the backend route/endpoint that can process the movie
    A) Set up bodyParser
    B) Set the route with app.post
    C) Verify that we can receive the data (Postman)
    D) Using our Movie model, insert the movie into the database
    E) Send back confirmation

# Step 2 | Create the Form in React
    A) Create all the input fields
    B) Manage the form values through state
        - write our onChangeHandlers
        - set the name and value attributes of the input fields
    C)handle form fields that can contain multiple instances (stars, showtimes) (LEFT TO DO)

# Step 3 | Send the data from the form to the backend route/endpoint
    A) set up cors
    B) create a add movie button
    C) attach an event listener to the button OR an onSubmit event on the form
    D) prevent the default behaviour of the form, i.e. redirecting
    E) send the data to the backend with axios.post

--- EDITING A MOVIE

# Step 1
    A) Set up the route app.put
    B) Using our movie model, update the movie 
    C) Verify that we can edit with Postman
    D) Send back confirmation

# Step 2 | Create the edit Form Component
    A) You can copy paste the AddMovie Component
    B) Rename addMovieHandlers to editMovieHandlers

# Step 3 | Create a Link and Route component
    We need some way to end up at the edit Form component. We also need some mechanism to find out which movie we are editing.
    A) Set up a react router <Route/> component. Set up the path for a parameter.
    D) Create the react router <Link /> component and put the movie id in the link as query param
    E) extract the id from the link in <EditMovie />

# Step 3 | Prepopulate the Form with the Movie data
    
    A) Request the data the movie data from the backend by using the movie id from the previous Step
    B) Set the movie state equal to the response of the backend. 

# Step 4 | Send the data from the form to the backend
    This works the same as Adding a movie. You only have to change POST to PUT and but the movie id in the URL.