import React, {useEffect, useState} from 'react';
import './App.css';
import { BirthdaysBlock } from './components/BirthdaysBlock';
import {EmployeesBlock} from "./components/EmployeesBlock";


export type EmployeeType = {
    id: string
    firstName: string
    lastName: string
    dob: string
}

const alphabet = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z",
]

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
]

const App: React.FC = () => {


    const [users, setUsers] = useState<EmployeeType[]>([])

    const [chosenEmployees, setChosenEmployees] = useState<EmployeeType[]>([])


    useEffect(() => {
        fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            });
    }, []);



    return (
        <div className={'wrapper'}>

            <EmployeesBlock alphabet={alphabet} users={users} setUsers={setUsers} chosenEmployees={chosenEmployees}
                            setChosenEmployees={setChosenEmployees}
            />
            <BirthdaysBlock months={months} chosenEmployees={chosenEmployees}/>

        </div>)


}
export default App;


