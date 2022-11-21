# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:
Object-oriented programming groups variables and applicable functions into objects. In Object-oriented programming, functions are called methods and variables are viewed as properties. As an example, if we were going to represent a smart phone in object-oriented programming, we could identify the properties(variables) as the make and model of the smart phone. The methods of a smart phone could be actionable characteristics such as processing(). Object-oriented programming gives developers more frexibility in creating applications by allowing them to work on smaller chunks of code without having major implications to the overall project. 

Researched answer:

There are four pillars of Object-oriented programming. The four pillars are encapsulation, abstraction, inheritance, and polymorphism. Encapsulation groups all the related variables and functions into objects. Abstraction is making some of the properties in an object not observable. Inheritance is when an object take in or inherits some of the properties or methods of another object. Polymorphism is when objects have different reactions to the same method. All four pillars are interconnected in object-oriented programming.


2. What is the difference between a Float and an Integer in Ruby?


Your answer:
An integer a data type in Ruby that includes any whole number such as 5 or -35. A float is a different data type in Ruby that includes a number in decimal form such as 1.50, 2.00, and 0.75

Researched answer:
There is some inprecision with floats in Ruby. For example:

0.2 + 0.1 == 0.3

One would think this would return a true value. However, it returns a false
The result returned is 0.30000000000000004

3. Ruby has an implicit return. What does that mean?


Your answer:
Implicit return means Ruby always reads the last expression in a method and returns that result. For this reason, developers do not need to include a return in their method.

Researched answer:
Developers can use and explicit return by including a return in their method.

4. What is a block in Ruby?
A block in Ruby is an anonymous function that can be passed into a method. Executing a block in Ruby generally require the a "do" and "end".

Your answer:
A block in Ruby is an anonymous function that can be passed into a method. Executing a block in Ruby generally require the a "do" and "end".


Researched answer:
There are several key factors about blocks in Ruby. First, blocks accept arguments and return a value. Unlike a method/function a block does not have its own name. Instead, it is code that is passed into a method. A block is always called into use through a method.

1. How do you extract a value in a Ruby hash?

Your answer:
I'm not sure about how to extract a value in a Ruby hash. I'd love the opportunity to research this answer and get back to you.

Researched answer:
It is possible to extract both keys and values from a Ruby hash. In order to extract a value, a developer can perform the following:

First, user is defined with key-value pairs
user = {"first_name"=>"Darth", "last_name"=>"Vader", "email"=>"darth@email.com"}

A developer can extract only the value for last name by using:
user.extract!("last_name").values # ["Vader"]

## Looking Ahead: Terms for Next Week

1. Class Inheritance: 
Class inheritance is similar in the way we inherit certain traits from our parents. Similairly, some behaviors in a class can be passed to another class.

2. RSpec:
RSpec is a test framework for the Ruby programming language. 

3. CRUD:
CRUD is an acronym for operations that are used in web development. It is commonly used as a checklist for manipulating data.
An example is outlined below:

C - Create
Create a variable and assign key-value pairs
R - Read
Reading the data can be done in various ways depending on the platform. For example, in Ruby a "p" can be used to return the output.
U - Update
Data can be updated in key-value pairs such as adding or changing values from a hash
D - Delete
Data can be deleted in key-value pairs by removing data that is no longer needed

4. Test-driven development:
Test-driven development is the process of fully testing software software applications before releasing for use. Test driven driven development is a continous stream of testing that tries to elimatate potential user problems. It's main purpose serves as a quality control mechinism for software development. 

5. HTTP:
HTTP stands for Hypertext Transfer Protocol and serves as a communication mechinism between the front and back end of a software application. For example, a user utilizes a website that requires access to data on a server. A message is sent to the server to obtain certain information such as HTML files or other functions.