import React, {useEffect, useState} from 'react';
// import './App.css';
// import { BirthdaysBlock } from './components/BirthdaysBlock';
// import {EmployeesBlock} from "./components/EmployeesBlock";
//
//
// export type EmployeeType = {
//     id: string
//     firstName: string
//     lastName: string
//     dob: string
// }
//
// const alphabet = [
//     "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
//     "W", "X", "Y", "Z",
// ]
//
// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
//     'September', 'October', 'November', 'December'
// ]
//
// const curDate = new Date().getMonth()
//
// const curDateMonthName = months[curDate]
//
//
//
// const App: React.FC = () => {
//
//
//     const [users, setUsers] = useState<EmployeeType[]>([])
//
//     const [chosenEmployees, setChosenEmployees] = useState<EmployeeType[]>([])
//
//     // const [activeValue, setActiveValue] = useState<string>('')
//
//     // const activeUsersId = useMemo(( ) => {
//     //     return chosenEmployees.map(({id}) => id)
//     // },[chosenEmployees])
//
//     useEffect(() => {
//         fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 setUsers(data);
//             });
//     }, []);
//
//
//     // const removeChosenEmployee = (id: string) => {
//     //
//     //     const filteredEmployees = chosenEmployees.filter(u => u.id !== id)
//     //     setChosenEmployees(filteredEmployees)
//     // }
//
//     // const userEqualsLetter = (user: EmployeeType, letter: string) => {
//     //     if (user.lastName[0] === letter) return user
//     // }
//
//     // const activeEmployee = users.find(u => u.id === activeValue)
//
//     // const monthsWithUsers = useMemo(() => {
//     //     return months.map((month, idx) => ({
//     //         title: month,
//     //         users: chosenEmployees.filter((user) => new Date(user.dob).getMonth() === idx)
//     //     }))
//     // }, [chosenEmployees]);
//     //
//     // // const sortedDates = chosenEmployees.sort((a, b) => new Date(b.dob) - new Date(a.dob))
//     //
//     // useEffect(() => {
//     //     localStorage.setItem('monthsWithUsers', JSON.stringify(monthsWithUsers))
//     // },[monthsWithUsers])
//     //
//     // const properArr: { title: string, users: EmployeeType[] }[] = (JSON.parse(localStorage.getItem('monthsWithUsers') || ''))
//
//     return (
//         <div className={'wrapper'}>
//
//
//             <EmployeesBlock alphabet={alphabet} users={users} setUsers={setUsers} chosenEmployees={chosenEmployees}
//                             setChosenEmployees={setChosenEmployees}
//             />
//
//
//             <BirthdaysBlock months={months} chosenEmployees={chosenEmployees}/>
//
//         </div>)
//
// //                 <div className="table">
// //                     {alphabet.map((letter) => (
// //                         <div key={letter} className={'column'}>{letter}
// //                             <div className={'employee-list'}>
// //                                 {users.filter((u) => userEqualsLetter(u, letter)
// //                                 ).length ? users.filter((u) => userEqualsLetter(u, letter)
// //                                 ).map((u) => {
// //
// //                                         const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// //                                             if (e.currentTarget.value === 'active') {
// //                                                 setChosenEmployees([u, ...chosenEmployees])
// //                                                 console.log(chosenEmployees)
// //                                                 // setActiveValue(u.id)
// //                                                 console.log(curDateMonthName)
// //                                             } else {
// //                                                 // setActiveValue('')
// //                                                 removeChosenEmployee(u.id)
// //                                                 console.log(chosenEmployees)
// //                                             }
// //                                         }
// //
// //                                         return <div>
// //                                             <div
// //                                                 className={activeUsersId.includes(u.id) ? 'active' : ''}>{u.lastName} {u.firstName}</div>
// //                                             <div className={'radio-group'}>
// //                                                 <label>
// //                                                     <input type={'radio'} value={'not active'} defaultChecked={true}
// //                                                            name={u.firstName}
// //                                                            onChange={onChangeHandler}/>Not active
// //                                                 </label>
// //                                                 <label>
// //                                                     <input type={'radio'} value={'active'} name={u.firstName}
// //                                                            onChange={onChangeHandler}/>Active
// //                                                 </label>
// //                                             </div>
// //                                         </div>
// //                                     }
// //                                 ) : <div> No employees </div>}
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //                 <div className={'birthdays'}>
// //                     <h2>Birthdays</h2>
// //                     <div>
// //                         {properArr.map(({title, users}) => (
// //                             <div key={title}>
// //                                 <h3>{title}</h3>
// //                                 <div>{users.map(({lastName,firstName, dob }) => (
// //                                     <div>{`${lastName} ${firstName} - ${new Date(dob).toDateString()}`}</div>
// //                                 ))}</div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                     {/*<div>{*/}
// //                     {/*    chosenEmployees.map(u =>*/}
// //                     {/*        <div>{`${u.lastName} ${u.firstName} - ${new Date(u?.dob).toDateString()}`}</div>)*/}
// //                     {/*}</div>*/}
// //                 </div>
// //         </div>
// //     );
// // }
// }
// export default App;
//
//
// import React, {ChangeEvent, useMemo} from "react";
// import { EmployeeType } from "../App";
// import '../App.css'
//
// type PropsType = {
//     alphabet: string[]
//     users: EmployeeType[]
//     setUsers: (users: EmployeeType[]) => void
//     chosenEmployees: EmployeeType[]
//     setChosenEmployees: (users: EmployeeType[]) => void
// }
//
// export const EmployeesBlock: React.FC<PropsType> = ({alphabet, users, setUsers,
//                                                         chosenEmployees, setChosenEmployees,
//                                                     }) => {
//
//     const activeUsersId = useMemo(( ) => {
//         return chosenEmployees.map(({id}) => id)
//     },[chosenEmployees])
//
//     const userEqualsLetter = (user: EmployeeType, letter: string) => {
//         if (user.lastName[0] === letter) return user
//     }
//
//     const removeChosenEmployee = (id: string) => {
//         const filteredEmployees = chosenEmployees.filter(u => u.id !== id)
//         setChosenEmployees(filteredEmployees)
//     }
//
//
//     return (
//         <div className="table">
//             {alphabet.map((letter) => (
//                 <div key={letter} className={'column'}>{letter}
//                     <div className={'employee-list'}>
//                         {users.filter((u) => userEqualsLetter(u, letter)
//                         ).length ? users.filter((u) => userEqualsLetter(u, letter)
//                         ).map((u) => {
//
//                                 const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//                                     if (e.currentTarget.value === 'active') {
//                                         setChosenEmployees([u, ...chosenEmployees])
//                                         console.log(chosenEmployees)
//                                         // setActiveValue(u.id)
//                                     } else {
//                                         // setActiveValue('')
//                                         removeChosenEmployee(u.id)
//                                         console.log(chosenEmployees)
//                                     }
//                                 }
//
//                                 return <div>
//                                     <div
//                                         className={activeUsersId.includes(u.id) ? 'active' : ''}>{u.lastName} {u.firstName}</div>
//                                     <div className={'radio-group'}>
//                                         <label>
//                                             <input type={'radio'} value={'not active'} defaultChecked={true}
//                                                    name={u.firstName}
//                                                    onChange={onChangeHandler}/>Not active
//                                         </label>
//                                         <label>
//                                             <input type={'radio'} value={'active'} name={u.firstName}
//                                                    onChange={onChangeHandler}/>Active
//                                         </label>
//                                     </div>
//                                 </div>
//                             }
//                         ) : <div> No employees </div>}
//                     </div>
//                 </div>
//             ))}
//         </div>)
//
//
//
//     import React, {useEffect, useMemo} from "react";
//     import { EmployeeType } from "../App";
//     import '../App.css'
//
//     type PropsType = {
//         months: string[]
//         chosenEmployees: EmployeeType[]
//     }
//
//
//     export const BirthdaysBlock: React.FC<PropsType> = ({months, chosenEmployees}) => {
//
//         const monthsWithUsers = useMemo(() => {
//             return months.map((month, idx) => ({
//                 title: month,
//                 users: chosenEmployees.filter((user) => new Date(user.dob).getMonth() === idx)
//             }))
//         }, [chosenEmployees]);
//
//         useEffect(() => {
//             localStorage.setItem('monthsWithUsers', JSON.stringify(monthsWithUsers))
//         },[monthsWithUsers])
//
//         const properArr: { title: string, users: EmployeeType[] }[] = (JSON.parse(localStorage.getItem('monthsWithUsers') || ''))
//
//
//
//         return (
//             <div className={'birthdays'}>
//                 <h2>Birthdays</h2>
//                 <div>
//                     {properArr.map(({title, users}) => (
//                         <div key={title}>
//                             <h3>{title}</h3>
//                             <div>{users.map(({lastName,firstName, dob }) => (
//                                 <div>{`${lastName} ${firstName} - ${new Date(dob).toDateString()}`}</div>
//                             ))}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         )
//     }
//
