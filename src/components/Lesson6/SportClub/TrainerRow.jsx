

function TrainerRow({ trainerData, setTrainers }) {

    function changeParametr(key, value) {
        setTrainers(trainers => 
            trainers.map(t => 
                t.id === trainerData.id ? {...t, [key]: value} : t
            )
        )
    }

    return <>
        <div className="trainerRow">
            <input type="text" value={trainerData.fullname} onChange={e => { changeParametr("fullname", e.target.value) }}/>
            <input type="text" value={trainerData.phone} onChange={e => { changeParametr("phone", e.target.value) }}/>
            <label>Private trainer</label>
            <input type="checkbox" checked={trainerData.private} onChange={e => {changeParametr("private", e.target.checked)}}/>
            <input type="checkbox" checked={trainerData.yoga} onChange={e => {changeParametr("yoga", e.target.checked)}}/>
            <input type="checkbox" checked={trainerData.zumba} onChange={e => {changeParametr("zumba", e.target.checked)}}/>
            <input type="checkbox" checked={trainerData.fly_yoga} onChange={e => {changeParametr("fly_yoga", e.target.checked)}}/>
            <button onClick={e => { setTrainers(trainers => trainers.filter(t => t.id != trainerData.id)); }}>Delete</button>
        </div>
    </>
    
};

export default TrainerRow;