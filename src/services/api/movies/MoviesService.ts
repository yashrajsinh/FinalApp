export const getMovies = async () => {
  try {
    //calling an API
    const response = await fetch(
      'https://api.tvmaze.com/search/shows?q=batman',
    );
    //store response in JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data', error);
    throw error;
  }
};
