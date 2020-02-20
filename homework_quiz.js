
Polymorphism

Q1  What does the word 'polymorphism' mean?
A1	Polymorphism is the ability to take on many forms.

Q2  What does it mean when we apply polymorphism to OO design? Give a simple Java example.
A2	In Java polymorphism is where a parent class references a 		child class object.

Q3  What can we use to implement polymorphism in Java?
A3	Polymorphism can be implemented using interfaces or abstract classes.

Q4  How many 'forms' can an object take when using polymorphism?
A4	An object can take as many forms as you like when using interfaces without having inheritance issues, whereas if using the abstract method inheritance can get messy with lots of child classes.

Q5. Give an example of when you could use polymorphism.
A5	You could use polymorphism if lots of different unrelated classes share some commonality ie have some of the same properties, for instance,  name, size, shape etc.



Composition



Q6  What do we mean by 'composition' in reference to object-oriented programming?
 A6.	Composition in OOP is a form of association related to dependancies where a child class could not meaningfully exist if the parent class was destroyed, ie a room (child) would not exist if the hotel (parent) was destroyed.

Q7  When would you use composition? Provide a simple example in Java.
A7.	You could use composition to identify properties that lots of classes, not necessarily similar classes, but utilising the same properties and bring all those properties under one umbrella by implementing an interface.

Q8  What is/are the advantage(s) of using composition?
A8.	All similar class properties are brought under a parent class keeping your code DRY.

Q9  When an object is destroyed, what happens to all the objects it is composed of?
A9.	When a parent class is destroyed all child classes are destroyed too as a child class could not meaningfully exist without the parent class.
