export class FetchWrapper {
  // with export -- it can now be imported, like a module

  //! it's in the frtosybee github
  //! the customexception class... b
  //! basically everything. same code, different names
  constructor() {}

  // this is a class memember thats why its not declaared as function - public as default
  async sendRequest(resourceUri) {
    //console.log("sending////");


    //?
    const defaultOptions = {
      method: 'POST'
    }
    console.log("Fetching some shows....");
    try {
      // Implement the HTTP client using the Fetch API.
      // 1) Send the HTTP request
      const response = await fetch(resourceUri);
      console.log(response);
      console.log("Hello!!");

      // 2) Validate the response
      if (!response.ok) {
        // Check the ok property
        const errorMessage = await response.json();

        // throw new Error(
        //   `An error occurred: request was no bueno! Status: ${response.status}`
        // );
        throw new CustomException(
          `An error occurred: request was no bueno! Status: ${response.status}`,
          respone.status,
          errorMessage
        );
      }
      // 3) Process the response
      // 3.a) Retrieve the response payload as JSON
      const data = await response.json();
      //console.log(shows);
      //renderShows(shows);
      return data;
    } catch (error) {
      console.log(error.message);
      throw new error();
    }
  }
}

//impleemnt custom js exception claa
class CustomException extends Error {
  constructor(message, code, details) { // message, code, details
    // pass message - optional
    super(message);
    this.message = message;
    this.code = code;
    this.details = details;

    //optional stack trace

  }
}
