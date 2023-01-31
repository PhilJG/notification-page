# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Notifications page solution](#frontend-mentor---notifications-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile](design/screenshots/mobile-view.png/screenshot.jpg)
![Desktop](design/screenshots/desktop-view.png/screenshot.jpg)

### Links

- Solution URL: [Github repo URL here](https://github.com/PhilJG/notification-page)
- Live Site URL: [Live Site](https://clever-strudel-57ca19.netlify.app/)

## My process

### Built with

- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - Class components

### What I learned

This was my first FE project with React so there where alot of lesson to be had. 
- That inluded breaking the project into components and running functions through those components as properties

```js
return (
      <div className="container">
        <Head 
        users={this.state.users} 
        markAllRead={this.markAllRead}/> 

        {this.state.users.map((user) => (
          <User
            key={user.id}
            className={user.unread ? "unread" : "read"}
            firstName={user.firstName}
            lastName={user.lastName}
            activity={user.activity}
            post={user.post}
            when={user.when}
            dot={user.unread ? "dot__unread" : "dot__read"}
            comment={user.comment}
            image={user.image}
          />
        ))}
      </div>
    );
```


### Continued development

I still have much to learn with react and I intend to do my next project with functional classes since it is the more modern way to develop react but I`m still grateful I did this porject with class components so I understood the concerpt going forward


## Author

- Website - [philjgray.ca](https://www.philjgray.ca)
- Frontend Mentor - [@PhilJG](https://www.frontendmentor.io/profile/PhilJG)