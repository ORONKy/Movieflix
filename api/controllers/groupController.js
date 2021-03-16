
const films =[
    {
        title: "hary potter",
        id: 1,
        img: "none",
        votes: parseInt(0)
    },
    {
        title: "aschenpudel",
        id: 2,
        img: "none",
        votes: parseInt(0)
    }
]

var gorupFilms = new Map()

gorupFilms.set(1, [...films])
gorupFilms.set(2, [...films])



const get_films_group = (req, res) =>{
    var films = gorupFilms.get(parseInt(req.params.id))
    
    if(films != null){
        res.json(JSON.stringify(films))
    }
    res.status(404).send()
}

const post_films_group = (req, res) =>{
    var votes = req.body.films
    var serverfilms = gorupFilms.get(parseInt(req.params.id))
    for(var i = 0; i < serverfilms.length; i++){
        if(votes[i] != null && votes[i].vote == true){
            serverfilms[i].votes += 1
            console.log(serverfilms)
        }
    }
    res.send()
}

const get_result_group = (req, res) => {
    res.send(gorupFilms.get(parseInt(req.params.id)))
}

const post_create_newgroup = (req, res) => {
    var films = createRandomFilms()
    var groupid = createRandomGroupid()
    console.log(req);
    gorupFilms.set(groupid, [...films])
    res.json(JSON.stringify({id: groupid, films}))
}

const createRandomFilms = () => {
    return films
}

const createRandomGroupid = () => {
    var random = 0
    do {
        random = Math.floor(Math.random() * (1000 - 1) + 1 )
    }while(gorupFilms.has(random))
    return random
}

module.exports = {
    get_films_group,
    post_films_group,
    get_result_group,
    post_create_newgroup
}