// import UseAuth from '../hooks/UseAuth'
import { Link } from 'react-router-dom'
// import image2 from '../assets/main.jpg'
import { useEffect, useState } from 'react'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import allowedRoles from '../config/AllowedRoles'
import { FaTrash } from 'react-icons/fa'
import UseAuth from '../hooks/UseAuth'
import { BeatLoader } from 'react-spinners'
const DisplayStudent = () => {
  const { auth } = UseAuth()
  const [update3] = useState(false)
  const [Term, setTerm2] = useState([])

  const axiosPrivate = UseAxiosPrivate()
  //All students start
  const GET_ALL_STUDENTS = '/register'
  const [students, setStudents] = useState([])

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()
    const getAllStudents = async () => {
      try {
        const response = await axiosPrivate.get(GET_ALL_STUDENTS, {
          signal: controller.signal,
          withCredentials: true,
        })
        isMounted && setStudents(response.data)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAllStudents()
    const Interval = setInterval(getAllStudents, 5000)
    return () => {
      isMounted = false
      controller.abort()
      clearInterval(Interval)
    }
  }, [axiosPrivate])

  //All students ends***************
  useEffect(() => {
    const GetTerm = async () => {
      try {
        const response = await axiosPrivate.get('/term')
        // console.log(response.data.Term)
        setTerm2(response.data.Term)
      } catch (err) {
        console.log(err)
      }
    }
    GetTerm()
    const Interval = setInterval(GetTerm, 3000)
    return () => {
      clearInterval(Interval)
    }
  }, [])
  const Updatehighlight = async (id) => {
    const response = await axiosPrivate.patch(
      `Fees/${id}`,
      JSON.stringify({ update3, Term }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    )
    console.log(response)
  }

  console.log('patched')

  //delete Student
  const handleDelete = async (id) => {
    console.log(id)
    try {
      await axiosPrivate.delete('/register', { data: { id: id } })
      // console.log(JSON.stringify(response.data))
    } catch (err) {
      console.log(err)
    }
  }

  // if (students?.length === '') {
  //   return <BeatLoader />
  // }

  return (
    <>
      <div className='displayHeader'>
        <div className='wrapper2'>
          <h1 className='bold'>Trinity Christian School</h1>
          <h3>
            P.O.BOX 229,NSOATRE,
            <br />
            BONO-GHANA
          </h3>
          <h4 className='display_yes'>Registered Students</h4>
        </div>
      </div>

      {students ? (
        students?.map((student) => {
          const DetailLink = () => {
            if (auth?.roles?.find((role) => role === allowedRoles.Admin)) {
              return (
                <>
                  <details className='details'>
                    <Link
                      to={`ViewFees/${student.student_id}`}
                      className='Link'
                      onClick={() => Updatehighlight(student.student_id)}
                    >
                      View Fees Record
                    </Link>
                    <br />
                    <Link
                      to={`viewStudents/${student.student_id}`}
                      className='Link'
                    >
                      Registeration records
                    </Link>
                  </details>
                </>
              )
            } else if (
              auth?.roles?.find((role) => role === allowedRoles.Employee)
            ) {
              return (
                <details className='details'>
                  <Link
                    to={`viewStudents/${student.student_id}`}
                    className='Link'
                  >
                    Registeration records
                  </Link>
                </details>
              )
            }
            if (auth?.roles?.find((role) => role === allowedRoles.Manager)) {
              return (
                <>
                  <details className='details'>
                    <Link
                      to={`ViewFees/${student.student_id}`}
                      className='Link'
                    >
                      View Fees Record
                    </Link>
                    <br />
                    <Link
                      to={`viewStudents/${student.student_id}`}
                      className='Link'
                    >
                      Registeration records
                    </Link>
                  </details>
                </>
              )
            }
          }
          return (
            <section className='main_section1' key={student.id}>
              <div className='display_container'>
                <div className='top_level'>
                  <img
                    className='display_image'
                    src={`http://localhost:3500/${student.photo.fileName}`}
                    alt='student_image'
                  />

                  <div className='block_main'>
                    <p className='student_id'>ID: {student.student_id}</p>
                  </div>
                </div>
                <br />

                {auth?.roles?.find((role) => role === allowedRoles.Admin) ? (
                  <FaTrash
                    className='deletebtn'
                    onClick={() => handleDelete(student.student_id)}
                  />
                ) : null}
                <h3 className='name_card'>
                  <span className='hmm'>STUDENT NAME: </span>
                  <span className='hmm2'>
                    {student.firstname}
                    {student.Surname}
                  </span>
                </h3>

                <h3 className='name_card'>
                  <span className='hmm'>GENDER: </span>

                  <span className='hmm2'>{student.Gender}</span>
                </h3>

                <div />
                <DetailLink />
              </div>
            </section>
          )
        })
      ) : (
        <BeatLoader color='red' />
      )}
    </>
  )
}

export default DisplayStudent
