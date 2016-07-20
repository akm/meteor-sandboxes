imports/ui/body.js »
1
2
3
4
5
6
7
8
9
10
11
import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});
