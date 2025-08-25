import { useState } from "react"
const Admin = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/api/admin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user, pass})
            })
            if(!response.ok) {
                throw new Error ('admin post response failed')
            }
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div id = 'admin'>
            <h1>Admin</h1>
            <form id = 'admin-form' onSubmit = {handleSubmit}>
            <input type = 'text' placeholder = 'Username...' required value = {user} onChange = {(e) => setUser(e.target.value)}/>
            <input type = 'password' placeholder = 'Password...' required value = {pass} onChange = {(e) => setPass(e.target.value)}/>
            <button type = 'submit'>Submit</button>
            </form>
        </div>
    )
}

export default Admin