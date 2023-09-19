import { useState, useEffect } from 'react'
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
function Dashtoggle() {
  const [Term, setTerm] = useState('')
  const [students, setStudents] = useState([])
  const [fees, setFees] = useState([])
  const [getTerm, setGetTerm] = useState([])
  const [arrowOn, setArrowOn] = useState(false)
  const isPhone = useMediaQuery({ maxWidth: 900 })
  const isDesktop = useMediaQuery({ minWidth: 900 })
  const axiosprivate = UseAxiosPrivate()

  const ShowTerm = async () => {
    try {
      const response = await axiosprivate.post(
        '/term',
        JSON.stringify({ Term }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  const Arrowspecific = () => {
    if (isPhone) {
      return arrowOn ? (
        <FaArrowLeft
          className='arrows_left'
          onClick={() => setArrowOn(!arrowOn)}
        />
      ) : (
        <FaArrowRight
          className='arrows_Right'
          onClick={() => setArrowOn(!arrowOn)}
        />
      )
    }

    if (isDesktop) {
      return arrowOn ? (
        <FaArrowDown
          className='arrow_Down'
          onClick={() => setArrowOn(!arrowOn)}
        />
      ) : (
        <FaArrowUp className='arrow_Up' onClick={() => setArrowOn(!arrowOn)} />
      )
    }
  }

  //getStudentsrecord
  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await axiosprivate.get('/register')
        setStudents(response.data.length)
      } catch (err) {
        console.log(err)
      }
    }
    getAllStudents()
  }, [])
  //getAllFeesRecord
  useEffect(() => {
    const getAllStudents = async () => {
      try {
        const response = await axiosprivate.get('/Fees')
        setFees(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getAllStudents()
  }, [])
  console.log(fees)
  //getTerm
  useEffect(() => {
    const GetAllFees = async () => {
      try {
        const response = await axiosprivate.get('/term')
        setGetTerm(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    GetAllFees()
    const Interval = setInterval(GetAllFees, 3000)
    return () => {
      clearInterval(Interval)
    }
  }, [])
  console.log(getTerm)
  useEffect(() => {
    setTerm(getTerm?.Term)
  }, [getTerm?.Term])
  console.log(fees)
  //calculations
  //extraction
  const sieve = fees.filter((fee) => fee.term === getTerm.Term)
  //total fees to receive
  const allfees = sieve.reduce((acc, curr) => acc + curr.Totalfee, 0)
  console.log(allfees)
  //total fees payed
  const getTotal = sieve.reduce((acc, curr) => acc + curr.total_payment_made, 0)
  console.log(getTotal)
  return (
    <>
      <Arrowspecific />
      <section className={arrowOn ? 'fixed_nav' : 'random'}>
        <div className='delecate'>
          <div className='changeinfo1'>
            <p>Number of students</p>
            <p>{students}</p>
          </div>
          <div className='changeinfo1'>
            <p> payed students</p>
            <p>{sieve.length}</p>
          </div>
          <br />
          <div className='changeinfo1'>
            <p>Total fees to receive</p>
            <p>{`GHC ${allfees}`}</p>
          </div>
          <br />
          <div className='changeinfo1'>
            <p>fees received</p>
            <p>{`GHC ${getTotal}`}</p>
          </div>
        </div>

        <div className='changeinfo'>
          <label htmlFor='term' className='term'>
            {isPhone ? 'Term' : ' Enter Term'}
          </label>
          <br />
          <div className='makeit'>
            <input
              id='term'
              type='text'
              className='term_input'
              value={Term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <button className='view' onClick={ShowTerm} type='button'>
              View
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashtoggle
