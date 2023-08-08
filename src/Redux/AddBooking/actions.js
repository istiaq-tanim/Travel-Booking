import { ADD, DELETE } from "./actiontypes"
export const add = (value) =>
{
    return {
        type: ADD,
        payload:value
    }
}

export const deleteItem= (id) =>
{
    return {
        type:DELETE,
        payload:id
    }
}