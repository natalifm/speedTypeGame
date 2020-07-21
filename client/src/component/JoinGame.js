import React, { useState } from "react";
import socket from "../socketConfig";


export const JoinGame = (props) => {

    const [userInput, setUserInput] = useState({gameID: '', userName: ""});
    const onChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(userInput)
        socket.emit('join-game', userInput)
    }
    return (
        <div className="row">
            <div className="col-sm-8">
                <h1 className="text-center">Join Game</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Enter Game ID</label>
                        <input type="text" name="gameID" value={userInput.gameID}
                               onChange={onChange}
                               placeholder='Enter Game ID'
                               className='form-control'
                        />

                        <label>Enter UserName</label>
                        <input type="text" name="userName" value={userInput.userName}
                               onChange={onChange}
                               placeholder='Enter User Name'
                               className='form-control'
                        />
                        <br/>
                        <button className='btn-btn-primary' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
