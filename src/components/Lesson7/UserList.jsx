import { useEffect, useState } from "react";


export default function UserList() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let ignore = false;
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            if (!ignore) {
                setUsers(data);
            }
        })
        .catch(e => {
            if (!ignore) {
                setError(e.message);
            }
        })
        .finally(() => {
            if (!ignore) {
                setLoading(false);
            }
        });
        
        return () => {
            ignore = true;
        }
    }, []);

    if (loading)
        return <p>Loading...</p>;
    
    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div className="users-list">
            {
            users.map(u => (
                    <div className="user-card" key={ u.id }>
                        <div className="user-card-content">
                            <section>
                                <h2 className="section-header">Деталі</h2>
                                <ul className="data-list">
                                    <li className="data-item">
                                        <span className="data-label">Ім'я:</span>
                                        <span className="data-value">{ u.name }</span>
                                    </li>
                                    <li className="data-item">
                                        <span className="data-label">Псевдонім:</span>
                                        <span className="data-value">{ u.username }</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="section-header">Контакти</h2>
                                <ul className="data-list">
                                    <li className="data-item">
                                        <span className="data-label">Email:</span>
                                        <span className="data-value">
                                            <a href="mailto:Sincere@april.biz">{ u.email }</a>
                                        </span>
                                    </li>
                                    <li className="data-item">
                                        <span className="data-label">Телефон:</span>
                                        <span className="data-value">{ u.phone }</span>
                                    </li>
                                    <li className="data-item">
                                        <span className="data-label">Веб-сайт:</span>
                                        <span className="data-value">
                                            <a href="http://hildegard.org" target="_blank">{ u.website }</a>
                                        </span>
                                    </li>
                                </ul>
                            </section>
                            
                            <section>
                                <h2 className="section-header">Адреса</h2>
                                <ul className="data-list">
                                    <li className="data-item">
                                        <span className="data-label">Вулиця:</span>
                                        <span className="data-value">{ u.address.street }, { u.address.suite }</span>
                                    </li>
                                    <li className="data-item">
                                        <span className="data-label">Місто:</span>
                                        <span className="data-value">{ u.address.city }</span>
                                    </li>
                                    <li className="data-item">
                                        <span className="data-label">Індекс:</span>
                                        <span className="data-value">{ u.address.zipcode }</span>
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="section-header">Компанія</h2>
                                <ul className="data-list">
                                    <li className="data-item">
                                        <span className="data-label">Назва:</span>
                                        <span className="data-value font-medium text-gray-900">{ u.company.name }</span>
                                    </li>
                                    <li className="data-item">
                                        <span className="data-label">Гасло:</span>
                                        <span className="data-value">{ u.company.catchPhrase }</span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>)
                )}
        </div>
    )
}