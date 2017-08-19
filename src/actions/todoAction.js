export function add(value){

    return function(dispatch){
            fetch("https://cursoreact.000webhostapp.com/api/insert.php?nome=" + value)
            .then(Response => {return Response.text()})
            .then(() => {
                return dispatch({
                    type: "SET_TODO",
                    payload: {name: value}
            });       
        });
    };
}

export function remove(id){
    return function(dispatch){
            fetch("https://cursoreact.000webhostapp.com/api/delete.php?id=" + id)            
            .then(() => {
                return dispatch({
                    type: "REMOVE_TODO",
                    payload: {id}
            });       
        });
    };
}

export function update(id, newName){
        return function(dispatch){
            fetch("https://cursoreact.000webhostapp.com/api/edit.php?id=" + id + "&nome=" + newName)            
            .then(() => {
                return dispatch({
                    type: "UPDATE_TODO",
                    payload: {id,newName}
            });       
        });
    };

        
}

export function getAll(){
    return function(dispatch){
        fetch("https://cursoreact.000webhostapp.com/api/data.php")
        .then(response => response.json())
        .then((json) => {
            return dispatch({
                type: "SET_ALL",
                payload: json.records
            });
        });
    };  
}