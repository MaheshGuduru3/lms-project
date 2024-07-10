import * as Yup from 'yup'


const courseArr = ["fullstackwebdeveloper","datascience","machinelearning","digitalmarketing","java","python"]

const arrNum = [8,12]
export const batchValidation = Yup.object({
       batch : Yup.string().required("Required Field."),
       coursename: Yup.string().oneOf(courseArr).required("Required Field."),
       instructorname : Yup.string().max(10).required("Required Field."),
       mentorname:Yup.string().max(10).required("Required Field."),
       duration : Yup.number().oneOf(arrNum).required("Required Field."),
       startdate: Yup.date().required("Required Field."),
       enddate : Yup.date().required("Required Field.")
})


export const batchValidation1 = Yup.object({
       batch : Yup.string().required("Required Field."),
       coursename: Yup.string().oneOf(courseArr).required("Required Field."),
       weeksubno : Yup.string().max(7).required("Required Field."),
       instructorname:Yup.string().max(10).required("Required Field."),
       topicname : Yup.string().max(50).required("Required Field."),
       sessiondate: Yup.date().required("Required Field."),
})