import axios from "axios"
import { useState } from "react"
import * as Yup from "yup"
import { Link } from "react-router-dom"

function SignupPage() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const EmailValidationSchemna = Yup.object().shape({
        password: Yup.string().min(6).required(),
        email: Yup.string().email().required()
    })

    function register(e) {
        e.preventDefault()
        EmailValidationSchemna.validate({
            email: email,
            password: password
        }).then(() => {
            axios.post("http://localhost:3000/api/users/add", {
                email: email,
                password: password
            }).then(res => {
                console.log(res)
            }).catch(e => {
                if (e.response.data.code) {
                    console.error("Email already exists")
                }
                console.log(e)
            })
        }).catch(e => {
            console.log(e)
        })
    }


    return (
        <>
            {/* <!-- component --> */}
            <section class="flex justify-center items-center h-screen bg-gray-100">
                <form onSubmit={register} class="max-w-md w-full bg-white rounded p-6 space-y-4">
                    <div class="mb-4">
                        <p class="text-gray-600">Sign Up</p>
                        <h2 class="text-xl font-bold">Join our community</h2>
                    </div>
                    <div>
                        <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" onClick={register} class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Sign Up</button>
                    </div>
                    <div class="flex items-center justify-end">
                        {/* <div class="flex flex-row items-center">
                            <input type="checkbox" class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                            <label for="comments" class="ml-2 text-sm font-normal text-gray-600">Remember me</label>
                        </div> */}
                        <div>
                            <Link to={""} class="text-sm text-blue-600 hover:underline" href="#">Already have an account?</Link>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default SignupPage