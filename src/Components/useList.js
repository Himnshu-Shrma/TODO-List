import { useState } from "react"

const useList=()=>{
    const [list, setList]=useState([])
    const push =(ele)=>{
        if(ele===""){
            <h3>Please type Something...</h3>
        }else{
            const newList =list.concat(ele)
        
        setList(newList)
        }
    }
    const pull=(ind)=>{
        const newList=list.filter((listItem,listInd)=>{
            return listInd!==ind
        })
        setList(newList)
    }
    return {
        list,
        push,
        pull
    }
         
}
export default useList