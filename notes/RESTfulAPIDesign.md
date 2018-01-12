https://github.com/gothinkster/realworld/blob/master/api/README.md

## Terminologies

* Resource is an object or representation of something
* Collections are set of resources
* URL (Uniform Resource Locator)

## API endpoint

* Conclusion: The paths should contain the plural form of resources
* HTTP method should define the kind of action to be performed on the resource.
* The resource should always be plural in the API endpoint
* If we want to access one instance of the resource, we can always pass the id in the URL.

## HTTP methods

* GET method requests data from the resource and should not produce any side effect.
* POST method requests the server to create a resource in the database, mostly when a web form is submitted.
* PUT method requests the server to update resource or create the resource, if it doesn’t exist.
* DELETE method requests that the resources, or its instance, should be removed from the database.

## HTTP response status codes

* 2xx (Success category)
* 3xx (Redirection Category)
* 4xx (Client Error Category)
* 5xx (Server Error Category)

## Field name casing convention
If the request body or response type is JSON then please follow camelCase to maintain the consistency.

## Searching, sorting, filtering and pagination
All of these actions are simply the query on one dataset. There will be no new set of APIs to handle these actions.

* Sorting - GET /companies?sort=rank_asc would sort the companies by its rank in ascending order.
* Filtering - GET /companies?category=banking&location=india
* Searching - GET /companies?search=Digital-Mckinsey
* Pagination - GET /companies?page=23

## Versioning
When your APIs are being consumed by the world, upgrading the APIs with some breaking change would also lead to breaking the existing products or services using your APIs.
