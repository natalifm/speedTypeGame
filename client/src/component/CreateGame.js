import React, { useState } from "react";
import socket from "../socketConfig";
export const CreateGame = () => {
    const [userName, setUserName] = useState("");
    const onChange = (e) => {
        setUserName(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        socket.emit('create-game', userName)
    }
    return (
        <div className="row">
            <div className="col-sm-8">
                <h1 className="text-center">Create Game</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" name="userName" value={userName}
                               onChange={onChange}
                               placeholder='UserName'
                               className='form-control'
                        />
                        <button className='btn-btn-primary mt-3' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
