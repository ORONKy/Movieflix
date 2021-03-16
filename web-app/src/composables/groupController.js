const url = "localhost:3000/group/create"

const createNewGroup = () => {
    var result = 0
    var err = null
    const load = ()=>{
        fetch(url, {
            method:"POST"
        })
        .then(result => result.json)
        .then(data => {
            console.log(data)
            return data.id
        })
        .catch(error => err = error)
    }

    return{load, result, err}

}

export default createNewGroup 