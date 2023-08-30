# things

# "Where is the thing?" app

Web application for identifying the location of things in the apartment.
User have "things" (e.g.: keys, smartphone, credit card) and "containers" (e.g.: organizer box, wallet, closet). "Things" should have description and volume (in cubic centimeters) fields. "Containers" should have description and volume (in cubic centimeters) fields.
"Things" can be put into "containers". "Containers" also can be put into other "containers". User can add, edit and remove "things" and "containers". Thing can not be put into a "container" if it does not fit or there is no capacity left. UI/UX is on your own.

# Technical requirements:
1. Angular 2+.
2. Data should be stored in persistent storage (Should persist between user sessions).

Optional:
1. Centralized state management (ngRx or similar)
2. JWT Authentication (backend requests can be mocked)
3. REST or CRUD operations (backend requests can be mocked)
4. Use of Ionic 3+