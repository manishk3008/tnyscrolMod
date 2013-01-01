tnyscrolMod
===========

It is modification tinyscroll bar plugin "http://baijs.nl/tinyscrollbar/" which is created by  Maarten Baijs.
This plugin is modified to wrap the content,and adds all the required html elements, which are otherwise manually added to make tiny-scroll plugin to work.
Instructions:

1. Include both js files
2. And initialize plugin $(".example").myScrollBar()
options:

isHidden:true(default) this will show scroll bar only on mouse hover

callbacks added:

afterWrap: => executes when all the elements are wrapped, and html elements are added
