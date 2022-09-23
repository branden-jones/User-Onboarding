import React from "react";

const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, tos } = props.values

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newVal = type === 'checkbox' ? checked : value;
        change( name, newVal )
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }


    return (
        <div>
            <h1>Whats up Anna!!</h1>
            <h2>Ya Boys Doin' Stuff</h2>
            <p className="error">{errors.username}</p>
            <p className="error">{errors.password}</p>
            <p className="error">{errors.email}</p>
            <p className="error">{errors.tos}</p>
            <form onSubmit={onSubmit}>
                <label>Name
                    <input 
                        placeholder='Create New Username'
                        type='text'
                        name="username"
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                        placeholder='Enter Your Preferred Email'
                        type='email'
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                        placeholder='Create a New Password'
                        type='password'
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input 
                        placeholder='Agreement Terms'
                        type='checkbox'
                        name="tos"
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input type='submit' value='Create a Friend' />
            </form>
        </div>
    )

}

export default Form