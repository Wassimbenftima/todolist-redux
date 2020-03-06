import {ADD_ITEM,DELETE_ITEM,COMPLETE_ITEM,EDIT_ITEM} from "../const/actionTypes";
export const addItem=(payload)=>{
    return{
        type: ADD_ITEM,
        payload
    }
};
export const deleteItem=(payload)=>{
    return{
        type: DELETE_ITEM,
        payload
    }
};
export const completeItem=(payload)=>{
    return{
        type: COMPLETE_ITEM,
        payload
    }
};
export const editItem=(payload)=>{
    return{
        type: EDIT_ITEM,
        payload
    }
}