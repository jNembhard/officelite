# Officelite Coming Soon Site

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Update table of contents**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See error states when the contact form is submitted if:
  - The `Name` and/or `Email Address` fields are empty
  - The `Email Address` is not formatted correctly
- See a live countdown timer that ticks down every second
- See a custom-styled `select` form control in the sign-up form

### Screenshot

![](./screenshot.jpg)

**Note: Update screenshot**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)

## My process

### Built with

- [Next.js](https://nextjs.org/) - React framework
- Sass/SCSS, and styled-jsx components
- Flexbox
- Mobile-first workflow

### What I learned

When I first looked at this project, I realized that I could greatly speed up my workflow by using a framework. I decided to give NextJS a try.

Not only does it allow you to create webpages and components dually, it also has the functionality to allow you to decide whether you'd like to implement a Static Site Generation (SSG) or Server Side Rendering (SSR) strategy based on the needs of your project.

I also liked the features it improved on from React such as page links and preprocessing Images. The styled-jsx components is also great, but I may try using styled-components instead next-time around. Currently, there isn't an accurate script color code available when using jsx-styled sass, so it can make your code a bit difficult to follow on larger projects.

For the countdown clock, I decided to to use built-in JavaScript but ran into a problem:

```js
const today = new Date();
const future = new Date(today).getTime();
const futureDate = future.setDate(future.getDate() + 30);

const now = new Date().getTime();
const distance = countdownDate - now;
```

See the problem here? Since Next.js is a framework built on top of React, futureDate is searching for a `setDate()` declaration in a predefined React Hook, but it does not exist. The function is already available as a function within `Date()`. This results in a TypeError. To avoid this, a better strategy would be to use the momentJS library available for React frameworks, or using TypeScript to better define types and avoid errors.

The final result ended up looking more like this:

```js
  let interval;

  const startTimer = () => {
    const countdownDate = new Date("December 30, 2021").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance % 86400000) / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
}
```

I also had the opportunity to improve my email validation from previous projects using a JavaScript implementation instead of jQuery.

### Continued development

I've found with these projects that a mobile-first approach typically easier for me to implement, but it is important to be cautious with how how create sections. The easiest way is to create sections based on the largest layout and then design for mobile devices from there.

### Useful resources

**Note: Update resources**

## Author

- Website - [Jason Nembhard](https://www.jasonnembhard.com)
