import * as Yup from 'yup'


const arr = ["student","admin"]

export const userValidation = Yup.object({
username : Yup.string().max(20).matches(/^[a-z]+/,"only small cap").required("Username Required"),
    email: Yup.string().email().required("Email Required"),
    mobilenumber : Yup.string().max(10).matches(/^[6-9]{1}[0-9]{9}/, "Indian numbers are valid").required("Mobile number Required"),
    password : Yup.string().required("Password Required"),
    usertype : Yup.string().oneOf(arr).required("Usertype Required")
})