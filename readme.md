1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementById=This will gives us single element which is found by id .if there is no element this will return null;
querySelector=this will gives us first element which is found by css selector.if there is no element this will return null;

getElementsByClassName=This will gives us multiple element from multiple classes but class name must be same.This will return html collection which is like array but not exactly the array
querySelectorAll=This will gives us multiple element from multiple element which is found by css selector.This will return node-list which is like array but not exactly the array.

2. How do you **create and insert a new element into the DOM**?

first: create element using document.createElement("")
second: select the element (using DOM selector) where i want to put this,
third: put this using append() method.

3. What is **Event Bubbling** and how does it work?

event bubbling means when event occurs in child this will automatically going up their parents and parents going up their parents and so on.at the end this will go to their root

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Event Delegation means delegate the event on parent so that i can access all the child. if i want to access all child i have to add event listener for all child..but if i delegate the event on parent i can access all the child without using loop.its very useful because it is way more faster

5. What is the difference between **preventDefault() and stopPropagation()** methods?

event.preventDefault() =Prevents the default behavior of an element.But it does not stop the event from bubbling

stopPropagation() =This method stops the event from propagating (bubbling or capturing) to parent elements.But it does not stop the default action of the element
