import React from "react";
import MyBookStore from "./myBookstore";
const data =React.createContext();

function DataofBook() {
    return(
        <>
         <data.Provider value={<MyBookStore/>}>
            <Getdata />
        </data.Provider>
        </>
    )
}


function Getdata() {
    return(
        <>

            <h2>My Books Store</h2>
        <table border={1} width="auto" cellPadding={10}  >
        <tbody>
          <tr>
            <th>Sr.No</th>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        <data.Consumer>
            {  value=>
            MyBookStore.length < 1 ? (
               <tr>
                  <td colSpan={4}>No available Books in the Store </td>
                  </tr>
              ) : (
            
                MyBookStore.map((info, ind)=> {
                return(
                    <tr key={info.id}>
                        {/* here we must we use key unique value like we use a id of books and also we can use index of this array like ind */}
                  <td>{ind+1}</td>
                  <td>{info.id}</td>
                  <td>{info.title}</td>
                  <td>{info.price}</td>
                </tr>
                )
            })
             )
             }
        </data.Consumer>
        </tbody>
         </table>
        </>
    )
}

export default DataofBook;