const API = "https://api.themoviedb.org/3";

const get = (path) => {
    return fetch(API + path, {
        headers: { 
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDEzNTBmYmI2YmVlZjUyMjY2ODgyZjZhOGRmZjE0NiIsInN1YiI6IjYzNmEzMDkzY2FhY2EyMDA3ZGQxMjU5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lDGI28gOGr0yMnDmUxaCjaau68ZHXdO2Koto8n1shHE",
            "Content-Type": "application/json; charset=utf-8",
        }, 
    }).then((result) => result.json());
}

export default get;