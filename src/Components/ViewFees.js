import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaHandshake } from 'react-icons/fa'
import { BeatLoader } from 'react-spinners'
import DateComponent from './DateComponent'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
const ViewFees = () => {
  const [getterm, setGetterm] = useState([])
  const [getFees, setGetFees] = useState([])
  const GET_FEES = '/Fees'
  const axiosPrivate = UseAxiosPrivate()
  const { student_id } = useParams()
  const [getRef, setGetRef] = useState([])
  const [err, setErr] = useState('')

  //GETTING FEES RECORDS FROM THE DATABESE
  useEffect(() => {
    const GetAllFees = async () => {
      try {
        const response = await axiosPrivate.get(GET_FEES, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        })

        setGetFees(response.data)
      } catch (err) {
        console.log(err)
        if (err?.response?.status === 403) {
          setErr('No Id found')
        }
      }
    }

    GetAllFees()
  }, [axiosPrivate])
  //GETTING FEES RECORDS FROM THE DATABESE ENDS

  // getting reference from the databse starts
  useEffect(() => {
    const GetReference = async () => {
      try {
        const response = await axiosPrivate.get('/reference')

        // console.log(response.data)
        setGetRef(response.data)
      } catch (err) {
        console.log(err)
        if (err?.response?.status === 403) {
          setErr('No Id found')
        }
      }
    }
    GetReference()
    const Interval = setInterval(GetReference, 5000)
    return () => {
      clearInterval(Interval)
    }
  }, [])
  // const data2 = getRef.forEach((element) => {
  //   console.log(element)
  // })

  // getting reference from the databse starts ENDS

  //getting term from the database
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
      if (err?.response?.status === 403) {
        setErr('No Id found')
      }
    }
  }, [axiosPrivate])
  //getting term from the database ends******

  const handlePrint = () => {
    window.print()
  }

  const getSpecific = getFees.filter((fee) => fee.term === getterm.Term)
  const ViewFees = getSpecific?.find((fees) => fees.student_id === student_id)
  console.log(getSpecific)

  // console.log(ViewFees)
  // console.log(ViewFees)

  const Remaining_fee = ViewFees?.Totalfee - ViewFees?.total_payment_made
  // const main = getRef.push(id2)
  // console.log(main)
  const GetRefView = getRef?.filter((ref) => ref.student_id === student_id)
  const viewFilter = GetRefView?.filter((ref) => ref.term === getterm.Term)
  // console.log(viewFilter)

  const getdata = viewFilter.map((view) => {
    if (view.student_id === student_id) {
      return (
        <tr key={view.id}>
          {/* <tr>{number}</tr> */}
          <td>{view.Payment_made_by}</td>
          <td>{view.student_name}</td>
          <td>{view.GHC}</td>
          <td>
            {view.Date} {view.time}
          </td>
          <td>{view.term}</td>
        </tr>
      )
    }
  })
  // console.log(student_id)
  // console.log(GetRefView)
  // console.log(viewFilter.length)

  return (
    <section className='fess_boundary'>
      <section className='fees_record'>
        <h1 className='bold'>Trinity Christian School</h1>
        <h4 className='nsoatre'>Nsoatre</h4>
        <div className='address'>
          tel:0205712349/0207364504/0243652399
          <br />
          Email:nsoatretrinitychristian@gmail.com
        </div>
        <div className='receipt'>
          <h5>offical receipt</h5>
          {ViewFees ? <h1>ID: {ViewFees.student_id}</h1> : null}
          {ViewFees?.term}
          <h5 style={{ color: '#fff' }}>Date:{<DateComponent />}</h5>
          {ViewFees ? (
            <button className='editFee'>
              <Link to={`editFee/${ViewFees.student_id}`} className='feeedit2'>
                Edit Fee
              </Link>
            </button>
          ) : null}
        </div>
      </section>

      {ViewFees ? (
        <div className='Fees_records' key={ViewFees.id}>
          <h2 className='fees_header2'>
            <span className='fees_data'>Student Name: </span>
            {ViewFees.student_name}
          </h2>

          <h2 className='fees_header2'>
            <span className='fees_data'> Last payment made:</span>
            {ViewFees.last_payment_made}
          </h2>
          <h2 className='fees_header2'>
            <span className='fees_data'>GHC:</span>
            {ViewFees.Ghc}
          </h2>
          <h2 className='fees_header2'>
            <span className='fees_data'>Received From:</span>
            {ViewFees.Received_From}
          </h2>

          <h2 className='fees_header2'>
            <span className='fees_data'>Total Payment Made:</span>
            {ViewFees.total_payment_made}
          </h2>
          <h2 className='fees_header2'>
            <span className='fees_data'>Total Fees:</span>
            {ViewFees.Totalfee}
          </h2>
          <h2 className='fees_header2'>
            <span className='fees_data'>Remaining Fees:</span>
            {ViewFees.Balance < 0
              ? `Need A Balance ${ViewFees.Balance}`
              : ViewFees.Balance}
          </h2>
          <h2 className='fees_header2'>
            <span className='fees_data'>Arrears:</span> {ViewFees.arrears2}
          </h2>
          <h2 className='fees_header2'>
            <span className='fees_data'>RECEIPT/CHEQUE NO:</span>
            {ViewFees.Receipt_Cheque_No}
          </h2>
          <br />
          <div className='sign10'>
            <h1>signature</h1>
            <img
              src={`${ViewFees.Signature}`}
              alt='signature'
              className='sign1'
            />
          </div>
          <div className='congrats'>
            <h3 className='h3'>
              thank <span>you</span>{' '}
            </h3>
            <FaHandshake className='handshake' />
          </div>
          <button className='printbtn' onClick={handlePrint}>
            Print
          </button>

          <div className='reference0'>
            <p className='reference'>Reference</p>
            <div className='contain'>
              <table className='display_table'>
                <thead className='display_table_head'>
                  <tr className='display_table_row'>
                    {/* <th className='display_table_row_small'>refNum</th> */}
                    <th className='display_table_row_small'>Payment made by</th>
                    <th className='display_table_row_small'>student_Name</th>
                    <th className='display_table_row_small'>Amount Payed</th>
                    <th className='display_table_row_small'>Date of payment</th>
                    <th className='display_table_row_small'>TERM</th>
                  </tr>
                </thead>
                <tbody className='display_table_ body'>
                  {getdata ? getdata : <p>No Reference to review</p>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className='nofees'>
          <BeatLoader color='black' size={'100px'} />
          <br />
          <p>This Student Has No Fees Record</p>
        </div>
      )}
    </section>
  )
}

export default ViewFees
