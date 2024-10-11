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
function storageValidation(LS_name){
    // 1) Get content of local-storage
    const ls = localStorage.getItem(LS_name)

    // 2) If null: Create New Local-Storage
    if (!ls){
        localStorage.setItem(LS_name, "[]")
        console.warn(`[INFO][create][local-storage]: ${LS_name}`)

    }
}