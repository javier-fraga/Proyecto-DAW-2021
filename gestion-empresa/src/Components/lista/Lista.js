import DataTable from 'react-data-table-component';
import './lista.scss'

const Lista = ({ columns, datos })=>{
    console.log(columns);
    console.log(datos);

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px',
               // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };

    return(
        <div className='lista'>
            <DataTable 
            columns = { columns}
            data = { datos }
            pagination  fixedHeader
            customStyles = {customStyles}
            responsive= 'true'
            />
        </div>
    )
} 

export default Lista;