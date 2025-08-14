
import { useState } from "react";

function TrainerCreator({ onSubmit, title = "", text = "Submit", isRequired = true, clearOnSubmit = true }) {
    const [newTrainer, setNewTrainer] = useState({
        fullname: "",
        phone: "",
        private: false,
        yoga: false,
        zumba: false,
        fly_yoga: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTrainer(prevTrainer => ({
            ...prevTrainer,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setNewTrainer(prevTrainer => ({
            ...prevTrainer,
            [name]: checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(newTrainer);
        if (clearOnSubmit)
            setNewTrainer({
                fullname: "",
                phone: "",
                private: false,
                yoga: false,
                zumba: false,
                fly_yoga: false
            });
    };

    return (
        <form className="trainer-creator-form" onSubmit={handleSubmit}>
            <h3>{ title }</h3>
            <label>
                Full Name:
                <input
                    type="text"
                    name="fullname"
                    value={newTrainer.fullname}
                    onChange={handleInputChange}
                    required={isRequired}
                />
            </label>
            <label>
                Phone:
                <input
                    type="text"
                    name="phone"
                    value={newTrainer.phone}
                    onChange={handleInputChange}
                    required={isRequired}
                />
            </label>
            <label>
                <input
                    type="checkbox"
                    name="private"
                    checked={newTrainer.private}
                    onChange={handleCheckboxChange}
                />
                Private Trainer
            </label>
            <label>
                <input
                    type="checkbox"
                    name="yoga"
                    checked={newTrainer.yoga}
                    onChange={handleCheckboxChange}
                />
                Yoga Trainer
            </label>
            <label>
                <input
                    type="checkbox"
                    name="zumba"
                    checked={newTrainer.zumba}
                    onChange={handleCheckboxChange}
                />
                Zumba Trainer
            </label>
            <label>
                <input
                    type="checkbox"
                    name="fly_yoga"
                    checked={newTrainer.fly_yoga}
                    onChange={handleCheckboxChange}
                />
                Fly Yoga Trainer
            </label>
            <button type="submit">{text}</button>
        </form>
    );
}

export default TrainerCreator;