import React, { useMemo } from 'react';

const Paginator = ({ incidentsPerPage, totalIncidents, changePage }) => {

    const paginatorNums = useMemo(() => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalIncidents / incidentsPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers; // eslint-disable-next-line
    },[totalIncidents])

    return (<div className="ui raised container segment" style={{width: 400, height: 80}}>
        <ul style={{overflow: 'hidden'}}>
            {paginatorNums.map(num => {
                return (<li key={num} style={{float: 'left'}}>
                    <button className="ui secondary button" type="button" onClick={() => changePage(num)}> {num} </button>
                </li>)
            })}
        </ul>
    </div>)

}

export default Paginator;