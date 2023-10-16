

import { commonAPI } from "./CommonAPI"
import { serverURL } from "./ServerURL"


// upload a video
export const uploadVideo = async (reqBody) => {
    // Make a post http request to http://localhost:4000/videos to add video in json server and return response to add component
    return await commonAPI("POST", `${serverURL}/videos`, reqBody)
}

// get all video form json server
export const getAllVideos = async () => {
    // Make get  http request to http://localhost:4000/videos to get all video from json server and return response to View component
    return await commonAPI("GET", `${serverURL}/videos`, "")
}


// get a video form json server
export const getAVideo = async (id) => {
    // Make a post http request to http://localhost:4000/videos/id  to add videofrom json server and return response to VideoCard  component
    return await commonAPI("GET", `${serverURL}/videos/${id}`, "")
}

// delete  a video form json server
export const deleteAvideo = async (id) => {
    // Make a DELETE http request to http://localhost:4000/videos/id  to remove  video from json server and return response to VideoCard  component
    return await commonAPI("DELETE", `${serverURL}/videos/${id}`, {})
}







// store watching video history to json server

export const addToHistory = async (videoDetails) => {
    //make post  http  request to http://localhost:4000/history to add video history in json server andreturn response to video card

    return await commonAPI("POST", `${serverURL}/history`, videoDetails)
}

// get all  watching video history from  json server


export const getAllHistory = async () => {
    //make get  http  request to http://localhost:4000/history to get video history from json server and return response to watch history component

    return await commonAPI("GET", `${serverURL}/history`, "")
}

// delete  watching history  form json server
export const deleteHistory = async (id) => {
    // Make a DELETE http request to http://localhost:4000/history/id  to delete  video history  from json server and return response to watchHistory   component
    return await commonAPI("DELETE", `${serverURL}/history/${id}`, {})
}









// Adding category
export const addCategory = async (reqBody) => {
    // make post http  request to http://localhost:4000/categories to add category in json server and response to category component

    return await commonAPI("POST", `${serverURL}/categories`, reqBody)
}

// Adding category
export const getAllcategory = async () => {
    // make get  http  request to http://localhost:4000/categories to get all  category in json server and return  response to category component

    return await commonAPI("GET", `${serverURL}/categories`, "")
}


// delete a  category from json server
export const deleteCategory = async (id) => {
    // make Delete  http  request to http://localhost:4000/categories to delete particular category from  json server and return response to category component

    return await commonAPI("DELETE", `${serverURL}/categories/${id}`, {})
}


// update  a category from json server 
export const updateCategory = async (id,body) => {
    //make put   http  request to http://localhost:4000/categories/id  to update particular categoryb from json server and return response to category component

    return await commonAPI("PUT", `${serverURL}/categories/${id}`,body)
}






