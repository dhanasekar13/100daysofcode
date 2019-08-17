import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import axios from "axios"
function Second() {
    const { loading, error, data } = useQuery(gql`
    {
    rates(currency:"USD") {
        currency
        name
        rate
    }
}
    `);
    if(loading) return <p>Loading ..........</p>
    if(error) return <p>Error</p>
    return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ));
}
function Third1() {
     const { loading, error, data } = useQuery(gql`
        
     `)
     console.log(data,'----------the fival')
     if(loading) return <p>Loading..............1111</p>
     if(error) return <p>Error</p>
     return (
         <div>
             <p>{data.hello}</p>
        </div>
     )
}
class Four extends React.Component{
    state ={
        value:""
    }
    componentDidMount(){
        axios({
            url:"http://localhost:1212/graphql",
            method:"POST",
            data:{
                query: `
                {
                    hello
                }
                `
            }
        }).then((result)=>{
            console.log(result)
            this.setState({
                value:result.data.data
            })
        })
    }
    render(){
        return (
            <div>
                <h2>Hi dhansekar12</h2>
                <p>{this.state.value.hello}</p>
                </div>
        )
    }
}
class Third extends React.Component{
    state = {
        currencydata :{}
    }

    componentDidMount(){
        const {loading,error,data} = useQuery(gql`
        {
            rates(currency:"USD"){
                currency
                name
                rate
            }
        }
        `)
        this.setState({
            currencydata: data.rates
        },()=> console.log(this.state))
    }
    render(){
        let currency = this.state.currencydata
         console.log(currency,'----------currnec')
        return (
                <div>
                    {/* { currency ?
                       currency.map(({ currency, rate }) => (
                        <div key={currency}>
                          <p>
                            {currency}: {rate}
                          </p>
                        </div>
                      ))
                    : 
                           <div>
                               <p>Loading .....</p>
                               </div>  
                    } */}
                    hi dhanasekar
                    </div>
        )
    }
}

export default Four