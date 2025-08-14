import { useEffect, useState } from "react";

import TrainerRow from "./TrainerRow";
import TrainerCreator from "./TrainerCreator";

import "./SportClub.css";
import TrainerReport from "./TainerReport";


function SportClub() {
    const [globalId, setGlobalId] = useState(2);
    const [trainers, setTrainers] = useState([
        {
            id: 0,
            fullname: "Test trainer",
            phone: "098 *** ** **",
            private: true,
            yoga: false,
            zumba: false,
            fly_yoga: true
        },
        {
            id: 1,
            fullname: "Test trainer 2",
            phone: "097 *** ** **",
            private: false,
            yoga: true,
            zumba: false,
            fly_yoga: false
        }
    ]);
    const [searchTrainerData, setSearchTrainerData] = useState({
        fullname: "",
        phone: "",
        private: false,
        yoga: false,
        zumba: false,
        fly_yoga: false
    });

    const addTrainer = (trainerData) => {
        setTrainers(prevTrainers => {
            const newTrainer = {...trainerData, id: globalId };
            const newTrainersList = [...prevTrainers, newTrainer];

            setGlobalId(id => ++id);
            return newTrainersList;
        })
    }
    
    const rows = [];

    const testStrings = (first, second) => {
        const value1 = first.toLowerCase().replace(" ", "");
        const value2 = second.toLowerCase().replace(" ", "");
        return value1.includes(value2);
    }

    const renderTrainersTable = () => {
        for (let i = 0; i < trainers.length; i++)
        {
            const trainer = trainers[i];
            if (searchTrainerData.fullname && !testStrings(trainer.fullname, searchTrainerData.fullname))
                continue;
            if (searchTrainerData.phone && !testStrings(trainer.phone, searchTrainerData.phone))
                continue;
            if (searchTrainerData.private && !trainer.private)
                continue;
            if (searchTrainerData.yoga && !trainer.yoga)
                continue;
            if (searchTrainerData.fly_yoga && !trainer.fly_yoga)
                continue;
            if (searchTrainerData.zumba && !trainer.zumba)
                continue;


            rows.push(
                <TrainerRow trainerData={trainers[i]} setTrainers={setTrainers} key={i}></TrainerRow>
            );
        }
    }

    useEffect(
        () => {
            renderTrainersTable();
        }, [trainers, searchTrainerData]
    )
    renderTrainersTable();

    return <div className="sport-club-container">
            <TrainerCreator 
                title="Found trainers" 
                text="Search" 
                onSubmit={setSearchTrainerData} 
                isRequired={false} 
                clearOnSubmit={false}/>
            <div className="trainers-table-container">
                {rows.length > 0 ? rows : <p>No trainers found.</p>}
            </div>
            <TrainerCreator 
                title="Add trainer" 
                onSubmit={addTrainer} 
                text="Add trainer"/>
            <TrainerReport trainers={trainers}></TrainerReport>
        </div>
}

export default SportClub;