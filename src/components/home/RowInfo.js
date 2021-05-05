

const RowInfo = ({index,row,render})=>{

 return(
    <tr>
        <th scope="row">{index+1}</th>
        <td>{row.fecha}</td>
        {render()}
    </tr>

 );


}

export default RowInfo;