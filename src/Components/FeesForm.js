import { useState, useEffect, useRef } from 'react'
import SignaturePad from 'react-signature-canvas'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import { useMediaQuery } from 'react-responsive'
const FeesForm = () => {
  const [student_name, setStudentName] = useState('')
  const [term, setTerm] = useState('')
  const [Received_From, setReceivedFrom] = useState('')
  const [last_payment_made, setLast_Payment_Made] = useState('')
  const [Being, setBeing] = useState('')
  const [GHC, setGHC] = useState()
  const [Signature, setSignature] = useState('')
  const [Receipt_Cheque_No, setReceiptChequeNo] = useState()
  const [student_id, setStudentId] = useState()
  const [student_class, setStudent_Class] = useState('')
  const [arrears, setArrears] = useState()
  const [totalfee, setTotalFee] = useState()

  const [errorMsg, setErrMsg] = useState('')
  const FEES_POST = '/Fees'
  const ErrRef = useRef()
  const axiosPrivate = UseAxiosPrivate()
  //signature start 1
  const SignaturePadRef = useRef()

  const isLaptop = useMediaQuery({ minWidth: 900 })

  useEffect(() => {
    const GetReference = async () => {
      try {
        const response = await axiosPrivate.get('/reference')
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    GetReference()
  }, [])
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

  const handleSubmmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axiosPrivate.post(
        FEES_POST,
        JSON.stringify({
          student_id,
          student_class,
          term,
          student_name,
          Received_From,
          Being,
          totalfee,
          GHC,
          Signature,
          Receipt_Cheque_No,
          arrears,
          last_payment_made,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
      alert(response.data.message)
    } catch (err) {
      if (err?.response) {
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

  const handleReference = async () => {
    await axiosPrivate.post(
      '/reference',
      JSON.stringify({
        student_id,
        student_name,
        term,
        Received_From,
        GHC,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    )
    // console.log(response.data.message)
  }

  useEffect(() => {
    setErrMsg('')
  }, [
    student_name,
    Received_From,
    student_class,
    last_payment_made,
    Being,
    GHC,
    Signature,
    Receipt_Cheque_No,
    student_id,
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
        <div className='fees_header'>
          <h1 className='header2'>Trinity Christian School</h1>
          {isLaptop ? (
            <h3>
              P.O.BOX 229,NSOATRE,
              <br />
              BONO-GHANA
            </h3>
          ) : (
            ''
          )}

          <h2 className='fees_h2'>Student School Fees Payment Form</h2>
        </div>

        <form onSubmit={handleSubmmit} className='fee_form'>
          <div className='fees_payment_form1'>
            <label htmlFor='id'>STUDENT ID :</label>
            <br />
            <input
              className='input'
              type='number'
              id='id'
              value={student_id}
              onChange={(e) => setStudentId(e.target.value)}
            />
            <br />
            <label htmlFor='id'>STUDENT Class :</label>
            <br />
            <input
              className='input'
              type='text'
              id='id'
              value={student_class}
              onChange={(e) => setStudent_Class(e.target.value)}
            />
            <br />
            <label htmlFor='Student_name'>Student Name: </label>
            <br />
            <input
              className='input'
              type='text'
              required
              id='Student_name'
              value={student_name}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor='term'>Term: </label>
            <br />
            <input
              className='input'
              type='text'
              required
              id='term'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <br />

            <label htmlFor='The_Sum_Of'>Last Payment Made: </label>
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
            <label htmlFor='The_Sum_Of'>Total Fees: </label>
            <br />
            <input
              className='input'
              type='text'
              required
              id='totalfee'
              value={totalfee}
              onChange={(e) => setTotalFee(e.target.value)}
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
            <label htmlFor='Received_From'>Received_From: </label>
            <br />
            <input
              className='input'
              type='text'
              required
              id='Received_From'
              value={Received_From}
              onChange={(e) => setReceivedFrom(e.target.value)}
            />
            <br />
            <label htmlFor='Being'>Being: </label>
            <br />
            <input
              className='input'
              type='text'
              required
              id='Being'
              value={Being}
              onChange={(e) => setBeing(e.target.value)}
            />
            <br />
            <label htmlFor='Being'>Arrears: </label>
            <br />
            <input
              className='input'
              type='Number'
              id='Arrears'
              value={arrears}
              onChange={(e) => setArrears(e.target.value)}
            />
            <br />

            <ParentsGuardianSignaturePadComponent />
            <br />

            <label htmlFor='Receipt_Cheque_No'>Receipt_Cheque_No: </label>
            <br />
            <input
              className='input'
              type='number'
              required
              id='Receipt_Cheque_No'
              value={Receipt_Cheque_No}
              onChange={(e) => setReceiptChequeNo(e.target.value)}
            />
            <br />
            <button className='btn' onClick={handleReference}>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default FeesForm
