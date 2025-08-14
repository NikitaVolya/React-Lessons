import { useEffect, useState } from "react";


function TrainerReport({ trainers }) {

    const [reportField, setReportField] = useState([]);

    const specializationsCount = (trainer) => {
        return trainer.private + trainer.yoga + trainer.zumba + trainer.fly_yoga;
    }

    useEffect(() => {
        
        setReportField(
            <div className="trainer-report-container">
                <p>No trainers available to generate a report.</p>
            </div>
        );

        if (trainers.length <= 0)
            return;

        let trainersCopy = [...trainers];
        trainersCopy.sort(
            (a, b) => specializationsCount(a) - specializationsCount(b)
        )

        let mostSpecializedTrainer = trainersCopy[trainersCopy.length - 1];
        let lowerSpecializedTrainer = trainersCopy[0];
        let avgSpecializedTrainer = trainersCopy[Math.floor(trainersCopy.length / 2)];

        setReportField(
                <div className="trainer-report-container">
                    <div className="report-item">
                        <span className="report-item-label">The trainer with the largest number of specializations:</span>
                        <span className="report-item-value">{mostSpecializedTrainer.fullname} ({mostSpecializedTrainer.phone})</span>
                    </div>
                    <div className="report-item">
                        <span className="report-item-label">The trainer with the lower number of specializations:</span>
                        <span className="report-item-value">{lowerSpecializedTrainer.fullname} ({lowerSpecializedTrainer.phone})</span>
                    </div>
                    <div className="report-item">
                        <span className="report-item-label">The trainer with the avg number of specializations:</span>
                        <span className="report-item-value">{avgSpecializedTrainer.fullname} ({avgSpecializedTrainer.phone})</span>
                    </div>
            </div>
            );

    },[trainers])


    return <div> { reportField } </div>
}


export default TrainerReport;