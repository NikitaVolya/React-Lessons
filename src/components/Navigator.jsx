import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigator.css";


class Navigator extends React.Component {

    render() {
        return <>
            <nav className="navbar">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/lesson6" className="nav-link">
                            Урок 6
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/lesson7" className="nav-link">
                            Урок 7
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/lesson9" className="nav-link">
                            Урок 9
                        </NavLink>
                    </li>
                    <li className="dropdown">
                        <span className="nav-link">Урок 10, Модуль 13 ▾</span>
                        <ul className="dropdown-menu">
                            <li className="dropdown">
                                <span className="nav-link">Художник ▾</span>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to="/lesson10/painter/bio" className="nav-link">
                                            Біо
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/lesson10/painter/famous-paint" className="nav-link">
                                            Гайвідоміша картина
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/lesson10/painter/gallery" className="nav-link">
                                            Галерея
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <span className="nav-link">Чуда світу ▾</span>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to="/lesson10/wonders/pyramid" className="nav-link">
                                            Піраміда Хеопса
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/lesson10/wonders/zeus" className="nav-link">
                                            Статуя Зевса
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/lesson10/wonders/artemis" className="nav-link">
                                            Храм Артеміди
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/lesson10/wonders/mausoleum" className="nav-link">
                                            Мавзолей у Галікарнасі
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/lesson10/wonders/colossus" className="nav-link">
                                            Колос Родоський
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/lesson10/wonders/lighthouse" className="nav-link">
                                            Олександрійський маяк
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/lesson10/wonders/gardens" className="nav-link">
                                            Висячі сади
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    }
}

export default Navigator;