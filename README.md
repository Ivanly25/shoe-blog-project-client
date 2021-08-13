# shoe-blog-project-client
# shoe-blog-project

# Full Stack Project Practice

Be prepared to discuss these items with a consultant during a 1 on 1.

You may use GitHub, PowerPoint, Keynote, or any other tools you desire to
complete any part of this.

## Project Idea

What is your project idea?  How did you come up with it? Why? Who would use it?

```md
My project idea is to create a shoe blog where a  user can sign up/ sign in /sign out and change password.
In this project i will be creating and building a full-stack application, i will be building my api, and Build a single-page application with basic user authentication like sign up, sign in, sign out, change password that interacts with the custom API that i built. This app will be able to create, read, update, and delete data in a database.
```

## Write between 3-5 user stories


```md
As a user, I can sign up
As a user, I can sign in
As a signed in user, I can sign out
As a signed in user, I can change password
As a signed in user, I can sign up
As a signed in user, i can add a shoe
As a signed in user, I can view my shoes
As a signed in user, I can update a shoe
As a signed in user, I can delete a shoe
```

## Wireframes

Please create a wireframe of your planned front end.

```md
<https://imgur.com/f48cw1u>


Logged Out

sign up form
sign in form
Logged In

sign out button
change password form
add shoe form (fields for brand, model and price)
update shoe form (fields for brand, model, price, ID)
delete shoe form (fields for ID)
view my shoes button
```

## Plan your resources

What resources will you need? What will the attributes and relationships be?

```md
i will be starting with one resource which is shoe and the attributes will be the brand, model, and resale price
```

## Create an ERD (entity relationship diagram)

These are the diagrams that show how your resources are related to one another
(one to many, many to many, etc).

Include an image (or a link to image) below.

```md
<https://imgur.com/76t83Zi>
User has many Shoes
Shoe belongs to User
Shoe

brand : string
model : string
resale price : string

```

## Routing

What routes will you need to make the proper request to your API?

```md

POST 
PATCH
UPDATE
DELETE

shoe route 
```

## Timetable

Write a basic timetable for yourself, you don't have to stick to it but it
helps to go in with a plan.

```md
Day 1- planning for project
    -readMe
    - Create User Stories
    - Create Wire Frames
    - Create ERD
Day 2 - set up for working api 
Day 3 - CRUD and test
Day 4 - set up client
Day 5 - sign up/ in/out/ change password
Day 6 - delete and update resource
Day 7 - style 
Day 8 - final touches
Days 1-8 -attend office hours for assistance on debugging and next step forward
```
