const Quotes = {
  take (nr) {
    const url = `https://programming-quotes-api.herokuapp.com/quotes/page/${nr}`;
    
    return fetch(url)
      .then ( response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error('Request failed!');
        }
        }).then ((jsonResponse)=>{
          return jsonResponse.map (res => {
            return {
              quote: res.en,
              author: res.author
            };
          })
        })
      .catch(e => e.message)
  }
}
    
export default Quotes;