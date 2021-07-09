import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCrews } from '../../store/actions';
import { CrewSelector } from '../../store/selectors/AuthSelector';

const Crew = ({ setCurrentPage, incidentId }) => {

    const dispatch = useDispatch();
    const [crewId,setCrewId] = useState(0);
    const Crews = useSelector(CrewSelector);

    useEffect(() => {
        dispatch(GetCrews())
    },[])

    const renderCrewOptions = Crews.map(crew => {
        return <option value={crew.Id} key={crew.Id}> {crew.NazivEkipe} </option>
    })

    return <div>
        <h3> Assign a crew to resolve this Incident </h3>

        <select className="ui dropdown" onChange={(e) => setCrewId(e.target.value)} style={{ width: 200, marginTop: 30 }}>
            {renderCrewOptions}
        </select>

        <button className="ui primary inverted button" type="button" style={{ marginLeft: 30 }}> Save crew </button>

    </div>
}

export default Crew;