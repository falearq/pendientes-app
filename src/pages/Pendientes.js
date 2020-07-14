import React,{useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Btn from '../components/Btn'



const Pendientes =  () => {
    useEffect(() => {
        const URL= 'http://localhost:3001'
        
        axios.get(URL)
        .then(async function response(response) {
          // handle success
          var data = response.data.data
          var dataMap = data.map((item)=>{
            console.log(item)
        })
        
          
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function (response) {
          // always executed
        
        });
    }, [])
    
    return (<>
     <Btn></Btn>
    </>
        )
}

export default Pendientes

const AllWrap = styled.section`
padding-top: 2em;
display: flex;
flex-wrap:wrap;
justify-content: space-between;


`