import { resolve } from "path"

const apiKey: string = 'fa814a2443c9aa4c04ce7354846166a7'
const page: string = '&page=1'
const language: string = '&language=es'



export function getMovies({ query = "" }: { query: string }): Promise<Movie[]> {
    const fullUrl: string = query == ""
        ? 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + language + page
        : 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + language + page + '&query=' + query
    //console.log(fullUrl)
    return fetch(fullUrl)
        .then(res => res.json())
        .then(response => {
            const movies = response.results.map((image: Movie) => {
                if (image.poster_path != null) {
                    const {
                        backdrop_path,
                        original_title,
                        overview,
                        poster_path,
                        title,
                        vote_average,
                        id } = image;
                    return {
                        backdrop_path,
                        original_title,
                        overview,
                        poster_path,
                        title,
                        vote_average,
                        id
                    };
                } else {
                    return null;
                }
            });
            return movies.filter((movie: Movie) => movie != null);
        });

}

export function downloadMovie({ code = "" }: { code: string }): Promise<Tier[]> {
    const fullUrl: string =
        'https://api.themoviedb.org/3/movie/' + code + '?api_key=' + apiKey

    let imdb_id = new Promise(function (resolve) {
        fetch(fullUrl)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch IMDB ID');
                }
                return res.json();
            })
            .then(response => {
                resolve(response.imdb_id ?? "")
            })
            .catch((error) => {
                console.error(error);
                resolve("");
            });
    });

    let downloadLink = new Promise<Tier[]>(function (resolve) {
        imdb_id.then(result => {
            try {
                fetch('https://yts.mx/api/v2/movie_details.json?imdb_id=' + result)
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Failed to fetch movie details');
                        }
                        return res.json();
                    })
                    .then(response => {
                        resolve(response.data.movie.torrents)
                    })
                    .catch((error) => {
                        console.error(error);
                        resolve([]);
                    });
            } catch (error) {
                resolve([])
            }
        });
    });

    return downloadLink.then(
        result => {
            if (result === undefined) {
                return [];
            } else {
                return result;
            }
        },
    );

}

