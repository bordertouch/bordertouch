import React, {ChangeEvent, useMemo} from "react";
import { EmployeeType } from "../App";
import '../App.css'

type PropsType = {
    alphabet: string[]
    users: EmployeeType[]
    setUsers: (users: EmployeeType[]) => void
    chosenEmployees: EmployeeType[]
    setChosenEmployees: (users: EmployeeType[]) => void
}

export const EmployeesBlock: React.FC<PropsType> = ({alphabet, users, setUsers,
                                                    chosenEmployees, setChosenEmployees,
                                                    }) => {

    const activeUsersId = useMemo(( ) => {
        return chosenEmployees.map(({id}) => id)
    },[chosenEmployees])

    const userEqualsLetter = (user: EmployeeType, letter: string) => {
        if (user.lastName[0] === letter) return user
    }

    const removeChosenEmployee = (id: string) => {
        const filteredEmployees = chosenEmployees.filter(u => u.id !== id)
        setChosenEmployees(filteredEmployees)
    }


return (
        <div className="table">
            {alphabet.map((letter) => (
                <div key={letter} className={'column'}>{letter}
                    <div className={'employee-list'}>
                        {users.filter((u) => userEqualsLetter(u, letter)
                        ).length ? users.filter((u) => userEqualsLetter(u, letter)
                        ).map((u) => {

                                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                    if (e.currentTarget.value === 'active') {
                                        setChosenEmployees([u, ...chosenEmployees])
                                        console.log(chosenEmployees)
                                        // setActiveValue(u.id)
                                    } else {
                                        // setActiveValue('')
                                        removeChosenEmployee(u.id)
                                        console.log(chosenEmployees)
                                    }
                                }

                                return <div>
                                    <div
                                        className={activeUsersId.includes(u.id) ? 'active' : ''}>{u.lastName} {u.firstName}</div>
                                    <div className={'radio-group'}>
                                        <label>
                                            <input type={'radio'} value={'not active'} defaultChecked={true}
                                                   name={u.firstName}
                                                   onChange={onChangeHandler}/>Not active
                                        </label>
                                        <label>
                                            <input type={'radio'} value={'active'} name={u.firstName}
                                                   onChange={onChangeHandler}/>Active
                                        </label>
                                    </div>
                                </div>
                            }
                        ) : <div> No employees </div>}
                    </div>
                </div>
            ))}
        </div>)
}