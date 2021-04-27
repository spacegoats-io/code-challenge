# SPACEGOATS code-challenge

In this repository you will find a backend and frontend application. When you start both apps you should see Groundcontrol, our administrator frontend. There you'll find the company overview page - a simple list showing all companies fetched from the backend (There's a sample company in the seed files).

For the existing functionality unit tests are in place. You can run them with `npm t`.

## ✅ Setup

1. Clone the repository
2. Spin up the dockerized postgres with the instructions from the backend readme
3. Run the migrations and seed the database with the dummy data
4. Start the backend application
5. Start the frontend application

## 👨‍🏭 Your task

You should extend the functionality in the backend and the frontend as instructed by the user stories below. For that, you will need to add handlers in the backend, extend the repository with new SQL queries and add a new view in the frontend.

You should fully test your code and use AntD components in the frontend.

Once you are done, send the code to us so we can prepare a session where we go through the project together and have a discussion on how you approached the challenges.

If anything is unclear or questions arise, just ask us - we are happy to help.

We expect that you are done within one to two weeks, but if you need more time for whatever reason just drop us a line.

## ✨ What's important to us

💄 We want to see how you organise data in the frontend.

✨ We want to see how you organise data in the frontend.

🔧 We want to see if you know what's necessary in a modern, IO focused backend with an SQL database.

🤙 It's okay when you don't want to implement all company fields in the frontend. Feel free to reduce them to only a few. We are curious to see how you approach this.

👷 Testing and a good coverage

😇 It's okay if you don't finish all the tasks, it's about quality not quantity.

## 📚 User stories

### User can read company details

```
When I click on the 'open' button on a listed company,
I want to see a view that displays all of that company's
details, so that I can check if everything is correct.
```

#### Acceptance criteria

- ✅ Clicking on the 'open' button in the list view opens a details page with all company properties shown
- ✅ Clicking on a 'back' button in the company details view will bring me back to the list view
- ✅ The backend has a handler to retrieve a single company by its UUID from the DB

### User can add a company

```
When I click on the 'Add Company' button on the company list view,
I want to see a view where I can add a company,
so we can add all out customers to the database
```

#### Acceptance criteria

- ✅ Add a 'Add Company' button to the the list view
- ✅ Clicking on the 'Add Company' button in the list view opens the add company view
- ✅ Clicking on a 'back' button in the add company view will bring me back to the list view
- ✅ There's a form with every field a new company has to have
- ✅ Clicking on a 'save' button in the add company view will send the data to the backend
- ✅ The backend has a handler to retrieve the company data and save them to the database

### User can delete a company

```
When I am on the company list
I want to be able to delete companies
So that I can remove old companies from the system
```

#### Acceptance criteria

- ✅ Some sort of button that deletes a company by its UUID from the DB
