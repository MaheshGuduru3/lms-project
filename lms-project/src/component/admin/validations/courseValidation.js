import * as Yup from 'yup'


const courseArr = ["fullstackwebdeveloper","datascience","machinelearning","digitalmarketing","java","python"]

export const courseValidation = Yup.object({
      coursename : Yup.string().oneOf(courseArr).required("Required Field."),
      email : Yup.string().email().required("Required Field."),
      batch : Yup.string().max(15).required("Required Field."),
})