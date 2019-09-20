const Quotes = {
  take () {
    const url = `https://programming-quotes-api.herokuapp.com/quotes/random`;
    
    return fetch(url)
      .then ( response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error('Request failed!');
        }
        }).then ((jsonResponse)=>{
          return {
            quote: jsonResponse.en,
            author: jsonResponse.author
          };
        })
      .catch(e => e.message)
  }
}
    
export default Quotes;