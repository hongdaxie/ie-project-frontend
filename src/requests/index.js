import axios from "axios"

const service = axios.create({
    // baseURL: "http://api.age50vaccine.ml"
    baseURL: "http://localhost:8080"
})


//get hospitals by suburb
export const getHospitalsBySuburb = (suburb) =>{
    return service.get(`/hospital/findBySuburb/${suburb}`)
}

export const getSuburbList = () => {
    return service.get(`/hospital/findAllSuburb`)
}

export const loginRequest = (userInfo) => {
    return service.post('/user/login', userInfo,{
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const registerRequest = (userRegisterInfo) => {
    return service.post('/user/register', userRegisterInfo, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const addNewGrandparent = (grandparentInfo) => {
    return service.post('/grandparent/addNewGrandparent', grandparentInfo, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const getAllGrandparentsById = (userid) =>{
    return service.get(`/grandparent/findByUserid/${userid}`)
}

export const deleteGrandparentById = (id) => {
    return service.delete(`/grandparent/deleteGrandparentById/${id}`)
}

export const getGrandparentById = (id) => {
    return service.get(`/grandparent/${id}`)
}

export const updateGrandparent = (newGrandparentInfo) =>{
    return service.put('/grandparent/updateGrandparent', newGrandparentInfo, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const sendNotificationById = (id) =>{
    return service.get(`/grandparent/sendNotification/${id}`)
}