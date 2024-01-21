# sd

## auth
- for token send post request `/auth/login` with `{email:"admin@gmail.com",password:"admin@123"}` as body.

## employee
 - all below endpoints are protected,should be authenticated with brearer token which gotten from `/auth/login` response
### send post to `/employees` to create new a employee
### send get to `/employees/:employeeId` to get a employee
### send put to `/employees/:employeeId` to update a employee
### send delete to `/employees/:employeeId` to delete a employee
### send get to `/employess/all` to list all employees.
 - this endpoint is paginated send `page` query parameter to get particular page.
 - to sort use `sortBy` and `sortType` query parameters
 - possible values for sortBy is
    ``` 'employeeId',
        'firstName',
        'lastName',
        'email',
        'dateOfBirth',
        'department',
        'position'
        
        ```
- values for sortType is ```'ascending', 'descending'```
- for filtering send a query params with keys 
   ``` 'employeeId',
        'firstName',
        'lastName',
        'email',
        'department',
        'position'```
- example query would be `/emplyees/all?page=2&sortBy=firstName&sortType=ascending&firstName=john`


## to run in local 
 - clone repo
 - run `npm install`
 - copy example.env and  past ,rename it to  `.env` update values accordingly
 - run `npm start`