import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AssignCrew, GetCrewForIncident, GetCrews } from '../../store/actions';
import { CrewSelector, CurrentCrewSelector } from '../../store/selectors/AuthSelector';

const Crew = ({ setCurrentPage, incidentId, headerPosted }) => {

    const dispatch = useDispatch();
    const [crewId,setCrewId] = useState(0);

    const CurrentCrew = useSelector(CurrentCrewSelector);
    const Crews = useSelector(CrewSelector);

    useEffect(() => {
        dispatch(GetCrewForIncident(incidentId));
        dispatch(GetCrews())
    },[])

    const onCrewAssign = () => {
        if (!headerPosted) {
            alert('You have to enter basic information first!')
            return;
        }
        dispatch(AssignCrew({ IncidentId: incidentId, CrewId: crewId }))
    }

    const renderCrewOptions = Crews.map(crew => {
        return <option value={crew.Id} key={crew.Id}> {crew.NazivEkipe} </option>
    })

    return <div>
        <h3> Assign a crew to resolve this Incident </h3>

        <select className="ui dropdown" defaultValue={CurrentCrew === null ? 1 : CurrentCrew.Id} onChange={(e) => setCrewId(e.target.value)} style={{ width: 200, marginTop: 30 }}>
            {renderCrewOptions}
        </select>

        <button className="ui primary inverted button" type="button" style={{ marginLeft: 30 }} onClick={() => onCrewAssign()}> Save crew </button>

    </div>
}

export default Crew;