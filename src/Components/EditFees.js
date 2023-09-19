import { useState, useEffect, useRef } from 'react'
import SignaturePad from 'react-signature-canvas'
import { useParams } from 'react-router-dom'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import UseAuth from '../hooks/UseAuth'

const FeesForm = () => {
  const [studentname, setStudentName] = useState('')
  const [Received_From, setReceived_From] = useState('')
  const [last_payment_made, setLast_Payment_Made] = useState('')
  const [Being, setBeing] = useState('')
  const [GHC, setGHC] = useState(0)
  const [arrears, setArrears] = useState()
  const [Signature, setSignature] = useState('')
  const [Receipt_Cheque_No, setReceipt_Cheque_No] = useState()
  const [student_class, setStudent_Class] = useState('')
  const [term, setTerm] = useState('')
  const [getFees, setGetFees] = useState([])
  const [errorMsg, setErrMsg] = useState('')
  const FEES_POST = '/Fees'
  const ErrRef = useRef()
  const axiosPrivate = UseAxiosPrivate()
  const { student_id } = useParams()
  const [update2] = useState(true)
  const [Term, setGetterm] = useState([])

  //signature start 1
  const SignaturePadRef = useRef()
  useEffect(() => {
    const GetAllFees = async () => {
      try {
        const response = await axiosPrivate.get(FEES_POST, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        })

        //     // console.log(response.data)
        setGetFees(response.data)

        //     // console.log(getFees)
        //     // const message = 'hello server'
        //     // socket.emit('message', message)
      } catch (err) {
        console.log(err)
      }
    }
    GetAllFees()
  }, [axiosPrivate])
  useEffect(() => {
    const GetAllTerm = async () => {
      try {
        const response = await axiosPrivate.get('/term')
        setGetterm(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    GetAllTerm()
    const Interval = setInterval(GetAllTerm, 3000)
    return () => {
      clearInterval(Interval)
    }
  }, [axiosPrivate])
  const editrecordterm = getFees.filter((fees) => fees.term === Term.Term)
  const EditRecord = editrecordterm.find(
    (fees) => fees.student_id === student_id
  )

  useEffect(() => {
    setStudent_Class(EditRecord?.student_class)
    setStudentName(EditRecord?.student_name)
    setArrears(EditRecord?.arrears2)
    setBeing(EditRecord?.Being)
    setGHC(EditRecord?.Ghc)
    setReceipt_Cheque_No(EditRecord?.Receipt_Cheque_No)
    setReceived_From(EditRecord?.Received_From)
    setSignature(EditRecord?.Signature)
    setLast_Payment_Made(EditRecord?.last_payment_made)
    setTerm(EditRecord?.term)
  }, [
    EditRecord?.student_class,
    EditRecord?.Being,
    EditRecord?.arrears2,
    EditRecord?.Ghc,
    EditRecord?.last_payment_made,
    EditRecord?.Signature,
    EditRecord?.Received_From,
    EditRecord?.Receipt_Cheque_No,
    EditRecord?.student_name,
    EditRecord?.term,
  ])
  const ParentsGuardianSignaturePadComponent = () => {
    const ClearSignature = () => {
      SignaturePadRef.current.clear()
    }

    const SaveSignature = () => {
      const SignatureDataURL = SignaturePadRef.current.toDataURL()
      setSignature(SignatureDataURL)
    }
    return (
      <div className='signature-container'>
        <SignaturePad
          ref={SignaturePadRef}
          canvasProps={{
            width: 400,
            height: 200,

            className: 'signature-canvas',
          }}
        />
        <div className='btndiv'>
          <button className='clear' onClick={ClearSignature}>
            Clear
          </button>
          <button className='save' onClick={SaveSignature}>
            save
          </button>
        </div>

        {Signature && (
          <div>
            <h2>Signature Preview:</h2>
            <img src={Signature} alt='signature Preview' />
          </div>
        )}
      </div>
    )
  }
  const filterterm = Term.Term

  const handleSubmmit = async (id) => {
    try {
      const response = await axiosPrivate.patch(
        `Fees/${id}`,
        JSON.stringify({
          studentname,
          Received_From,
          last_payment_made,
          Being,
          GHC,
          arrears,
          Signature,
          update2,
          Term: filterterm,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
          new: true,
        }
      )
      const response2 = response.data.message
      alert(response2)
    } catch (err) {
      if (!err.response) {
        setErrMsg('No Server Response')
      } else if (err?.response?.status === 400) {
        setErrMsg('Payment Failed')
      } else {
        setErrMsg('Please Check Network Service')
      }
      console.log(err)
      ErrRef.current.focus()
    }
  }
  const handleReference = async (e) => {
    e.preventDefault()
    const response = await axiosPrivate.post(
      '/reference',
      JSON.stringify({
        student_id,
        student_name: studentname,
        Received_From,
        GHC,
        term,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    )
    alert(response.data.message)
  }

  useEffect(() => {
    setErrMsg('')
  }, [
    studentname,
    Received_From,
    last_payment_made,
    Being,
    GHC,
    arrears,
    Signature,
    Receipt_Cheque_No,
  ])
  useEffect(() => {
    ErrRef.current.focus()
  }, [errorMsg])
  return (
    <>
      <section className='fees_form'>
        <p ref={ErrRef} className={errorMsg ? 'error' : null}>
          {errorMsg}
        </p>
        <div className='fees_header_edit'>
          <div className='Header_edit_2'>
            <h1 className='header2'>Trinity Christian School</h1>
            <h2 className='fees_h2'>
              Student School Fees Payment
              <span
                style={{
                  color: 'red',
                  fontFamily: 'monospace',
                  fontSize: '20px',
                }}
              >
                Editting
              </span>
              Form
            </h2>
          </div>
        </div>
        <div className='fees_form_2'>
          <form onSubmit={handleReference}>
            <label htmlFor='id'>STUDENT ID :</label>
            <p>{EditRecord?.student_id}</p>
            <br />
            <label htmlFor='term'>TERM:</label>
            <p>{term}</p>
            <br />
            <label htmlFor='id'>STUDENT Class :</label>
            <br />
            <p>{EditRecord?.student_class}</p>
            <br />
            <label htmlFor='Student_name'>Student Name: </label>
            <br />
            <p>{EditRecord?.student_name}</p>
            <br />

            <label htmlFor='The_Sum_Of'>last Payment Made: </label>
            <br />
            <input
              className='input'
              type='text'
              required
              id='The_Sum_Of'
              value={last_payment_made}
              onChange={(e) => setLast_Payment_Made(e.target.value)}
            />
            <br />
            <label htmlFor='GHC'>GHC: </label>
            <br />
            <input
              className='input'
              type='number'
              required
              id='GHC'
              value={GHC}
              onChange={(e) => setGHC(e.target.value)}
            />
            <br />
            <label htmlFor='Being'>Being: </label>
            <br />
            {EditRecord?.Being}
            <br />

            <label htmlFor='Received_From'>Received_From: </label>
            <br />
            <input
              className='input'
              type='text'
              required
              id='Received_From'
              value={Received_From}
              onChange={(e) => setReceived_From(e.target.value)}
            />
            <br />
            <label htmlFor='Balance'>Arrears: </label>
            <br />
            <p>{EditRecord?.arrears2}</p>
            <br />
            <ParentsGuardianSignaturePadComponent />
            <br />
            <label htmlFor='Receipt_Cheque_No'>Receipt_Cheque_No: </label>
            <br />
            <p>{EditRecord?.Receipt_Cheque_No}</p>
            <br />
            <button
              className='btn'
              onClick={() => handleSubmmit(EditRecord?.student_id)}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default FeesForm
