import React, {useEffect, useMemo} from "react";
import { EmployeeType } from "../App";
import '../App.css'

type PropsType = {
    months: string[]
    chosenEmployees: EmployeeType[]
}


export const BirthdaysBlock: React.FC<PropsType> = ({months, chosenEmployees}) => {

    const monthsWithUsers = useMemo(() => {
        return months.map((month, idx) => ({
            title: month,
            users: chosenEmployees.filter((user) => new Date(user.dob).getMonth() === idx)
        }))
    }, [chosenEmployees]);

    useEffect(() => {
        localStorage.setItem('monthsWithUsers', JSON.stringify(monthsWithUsers))
    },[monthsWithUsers])

    const properArr: { title: string, users: EmployeeType[] }[] = (JSON.parse(localStorage.getItem('monthsWithUsers') || ''))



    return (
        <div className={'birthdays'}>
            <h2>Birthdays</h2>
            <div>
                {properArr.map(({title, users}) => (
                    <div key={title}>
                        <h3>{title}</h3>
                        <div>{users.map(({lastName,firstName, dob }) => (
                            <div>{`${lastName} ${firstName} - ${new Date(dob).toDateString()}`}</div>
                        ))}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

