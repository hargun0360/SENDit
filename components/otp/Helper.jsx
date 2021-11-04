import {useEffect} from 'react'

export const result = [];

export function storage(store){

   localStorage.setItem('tokendata',store);
    
}