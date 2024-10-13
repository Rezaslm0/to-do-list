export function add(LS_name, value){
    // 0) Check the local-storage
    storageValidation(LS_name)

    // 1) Get content of ls, and pars it to json
    let ls = JSON.parse(localStorage.getItem(LS_name))

    // 2) Add new value to local-storage
    ls.push(value)

    // 3) Stringify data, and send data to local-storage
    localStorage.setItem(LS_name, JSON.stringify(ls))

}

export function get(LS_name){
    // 0) Check the local-storage
    storageValidation(LS_name)

    // 1) Get content of ls, and pars it to json, then return it
    return JSON.parse(localStorage.getItem(LS_name))

}

export function remove(LS_name, id){
    // 0) Check the local-storage
    storageValidation(LS_name)

    // 1) GEt all data from local-storage
    const ls = get(LS_name)

    // 2) 
    ls.forEach(
        function(eachTask, indexNumber){
            if (eachTask.id === id){
                ls.splice(indexNumber, 1)
                return

            }
        }
    );

    // 3) Send data to local-storage
    localStorage.setItem(LS_name, JSON.stringify(ls))

}

export function toggleCompleted(LS_name, id){
    // 0) Check the local-storage
    storageValidation(LS_name)

    // 1) Get content of ls, and pars it to json
    let ls = JSON.parse(localStorage.getItem(LS_name))

    // 2) Add new value to local-storage
    ls.forEach(function(element, index){
        if(element.id === id){
            switch (element.status) {
                case 'completed':
                    element.status = null
                    break;
                    
                case null:
                    element.status = 'completed'
                    break;
            
                default:
                    console.error(`[ERROR][status][local-storage]: Unexpected Status Value: (${element.status})`)
                    break;
            }

        }
    })

    // 3) Stringify data, and send data to local-storage
    localStorage.setItem(LS_name, JSON.stringify(ls))

}

function storageValidation(LS_name){
    // 1) Get content of local-storage
    const ls = localStorage.getItem(LS_name)

    // 2) If null: Create New Local-Storage
    if (!ls){
        localStorage.setItem(LS_name, "[]")
        console.warn(`[INFO][create][local-storage]: ${LS_name}`)

    }
}