import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AssignUserToCrew, GetClans, GetCrews } from '../../store/actions';
import { ClanoviSelector, CrewSelector } from '../../store/selectors/AuthSelector';

const CrewComponent = () => {

    const dispatch = useDispatch();
    const crews = useSelector(CrewSelector);
    const clanovi = useSelector(ClanoviSelector);

    const [selectedCrew,setSelectedCrew] = useState(1);
    const [selectedClan,setSelectedClan] = useState(1);

    const onAssignCrew = () => {
        if (selectedClan === 1) {
            alert('You have to select a Crew member!')
            return;
        }
        const payload = { CrewId: selectedCrew, UserId: selectedClan }
        dispatch(AssignUserToCrew(payload)); // eslint-disable-next-line
    }

    useEffect(() => {
        dispatch(GetCrews());
        dispatch(GetClans());
    },[])

    const renderedCrews = crews.map(c => {
        const word = selectedCrew === c.Id ? 'active' : '';
        return <button key={c.Id} className={`ui green button item ${word}`} onClick={() => setSelectedCrew(c.Id)}> {c.NazivEkipe} </button>
    })

    const renderedClanovi = clanovi.map(clan => {
        const word = selectedClan === clan.Id ? 'active' : '';
        return <button key={clan.Id} className={`ui green button item ${word}`} onClick={() => setSelectedClan(clan.Id)}> {clan.Username} </button>
    })

    return <div style={{marginLeft: 150, height: 550}}>
        <div className="ui container segment" style={{paddingLeft: 20,marginTop: 80, position: 'fixed', width: 920, right: 1, left: 90, height: 510}}>

            <h3 style={{ marginLeft: 200 }} > Select crew and crew member to add to this crew. </h3>

            <div style={{ overflow: 'hidden', marginTop: 80, marginLeft: 140 }}>
                <h4 style={{ marginLeft: 30 }}> Crews </h4>
                <div className="ui vertical pointing menu" style={{ width: 125, float: 'left' }}>
                    {renderedCrews}
                </div>

                <div className="ui vertical pointing menu" name="usi" style={{ width: 125, float: 'left', marginLeft: 100 }}>
                    {clanovi.length > 0 ? renderedClanovi : <div> No available crew members </div>}
                </div>

                <button className="ui inverted green button" type="button" style={{ marginLeft: 110, marginTop: 80 }} onClick={() => onAssignCrew()}> Assign </button>

            </div>

            

        </div>
    </div>
}

export default CrewComponent;