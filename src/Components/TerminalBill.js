import { useState, useEffect } from 'react'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import DateComponent from './DateComponent'
const TerminalBill = () => {
  // const [Pupilsname, setPupilsname] = useState('')
  // const [Term, setTerm] = useState('')
  const [Fees, setGetFees] = useState([])
  const [term, setGetTerm] = useState([])
  const [Bill, setBill] = useState([])
  const [student_class, setStudent_Class] = useState('')
  const [Basic, setBasic] = useState('')
  const axiosprivate = UseAxiosPrivate()
  useEffect(() => {
    const getFees = async () => {
      try {
        const response = await axiosprivate.get('/Fees')
        setGetFees(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getFees()
  }, [])
  const stuffs = Fees.reduce((acc, curr) => {
    const id = curr.student_id
    // console.log(id)
    return id
  }, {})
  console.log(stuffs)
  // const check = stuffs.filter((stuf) => {})
  useEffect(() => {
    const getTerm = async () => {
      const response = await axiosprivate.get('/term')
      setGetTerm(response.data.Term)
    }
    const Interval = setInterval(() => {
      getTerm()
    }, 5000)
    return () => {
      clearInterval(Interval)
    }
  }, [])
  // const term2 = '1st 2023'
  //do stuffs with fees
  const filterprops = Fees.filter((fees) => fees.term === term)
  const filterFeesClass = filterprops.filter(
    (fees) => fees.student_class === student_class
  )
  console.log(filterFeesClass)

  const getArrears = () => {
    const getArrears = filterFeesClass.map((fee) => {
      return fee.arrears2
    })
    return getArrears
  }
  //do stuffs with fees Ends

  const PostBasic = async () => {
    try {
      await axiosprivate.post(
        'TerminalBill',
        JSON.stringify({
          Basic,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const GetTerminaBill = async () => {
      try {
        const response = await axiosprivate.get('TerminalBill')
        console.log(response.data)
        setBill(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    const Interval = setInterval(GetTerminaBill, 5000)
    return () => {
      clearInterval(Interval)
    }
  }, [axiosprivate])
  const calculateBill = () => {
    let Bill2
    if (Basic === 'CRECHE' || Basic === 'NURSERY' || Basic === 'KG') {
      Bill2 =
        Bill.tuition_fee +
        Bill.p_t_a_dues +
        Bill.toiletries +
        Bill.maintenance_fee +
        Bill.disposable_spoons +
        Bill.examination_fees +
        Bill.first_aid
    } else if (Basic === 'PRIMARY') {
      Bill2 =
        Bill.tuition_fee +
        Bill.p_t_a_dues +
        Bill.toiletries +
        Bill.stationary +
        Bill.disposable_spoons +
        Bill.examination_fees +
        Bill.first_aid
    }
    return Bill2
  }
  const TableBodySpecific = () => {
    if (Basic === 'CRECHE' || Basic === 'NURSERY' || Basic === 'KG') {
      return (
        <tbody>
          <tr>
            <td className='bill'>TUITION FEE(SCHOOL FEES)</td>
            <td className='bill'>{Bill.tuition_fee}</td>
          </tr>
          <tr>
            <td className='bill'>P.T.A DUES</td>
            <td className='bill'>{Bill.p_t_a_dues}</td>
          </tr>
          <tr>
            <td className='bill'>TOILETRIES (COMPULSORY)</td>
            <td className='bill'>{Bill.toiletries}</td>
          </tr>
          <tr>
            <td className='bill'> MAINTENANCE FEES</td>
            <td className='bill'>{Bill.maintenance_fee}</td>
          </tr>
          <tr>
            <td className='bill'>DISPOSABLE SPOON</td>
            <td className='bill'>{Bill.disposable_spoons}</td>
          </tr>
          <tr>
            <td className='bill'>EXAMINATION FEES</td>
            <td className='bill'>{Bill.examination_fees}</td>
          </tr>
          <tr>
            <td className='bill'>FIRST AID</td>
            <td className='bill'>{Bill.first_aid}</td>
          </tr>
          <tr>
            <td className='bill'>
              <h1>TOTAL</h1>
            </td>
            <td className='bill'>
              <h1>{calculateBill()}</h1>
            </td>
          </tr>
        </tbody>
      )
    } else if (Basic === 'PRIMARY') {
      return (
        <tbody>
          <tr className='bill_border'>
            <td className='bill'>TUITION FEE(SCHOOL FEES)</td>
            <td className='bill'>{Bill.tuition_fee}</td>
          </tr>
          <tr className='bill_border'>
            <td className='bill'>P.T.A DUES</td>
            <td className='bill'>{Bill.p_t_a_dues}</td>
          </tr>
          <tr className='bill_border'>
            <td className='bill'>TOILETRIES (COMPULSORY)</td>
            <td className='bill'>{Bill.toiletries}</td>
          </tr>
          <tr className='bill_border'>
            <td className='bill'>STATIONARY</td>
            <td className='bill'>{Bill.stationary}</td>
          </tr>
          <tr className='bill_border'>
            <td className='bill'>DISPOSABLE SPOON</td>
            <td className='bill'>{Bill.disposable_spoons}</td>
          </tr>
          <tr className='bill_border'>
            <td className='bill'>EXAMINATION FEES</td>
            <td className='bill'>{Bill.examination_fees}</td>
          </tr>
          <tr className='bill_border'>
            <td className='bill'>FIRST AID</td>
            <td className='bill'>{Bill.first_aid}</td>
          </tr>
          <tr className='bill_border'>
            <td className='bill'>
              <h1>TOTAL</h1>
            </td>
            <td className='bill'>{calculateBill()}</td>
          </tr>
        </tbody>
      )
    }
  }
  const PrintBTN = () => {
    window.print()
  }

  return (
    <>
      <div className='Bill_heading'>
        <label className='Bill_label'>Enter Basic</label>
        <br />
        <input
          className='Bill_input'
          type='text'
          value={Basic}
          onChange={(e) => setBasic(e.target.value)}
        />
        <br />
        <label className='Bill_label'>Enter Class</label>
        <br />
        <input
          className='Bill_input'
          type='text'
          value={student_class}
          onChange={(e) => setStudent_Class(e.target.value)}
        />
        <br />
        <button type='button' onClick={PostBasic} className='post_basic'>
          Send
        </button>
      </div>
      <div className='Bill_contsiner'>
        {filterFeesClass.map((fee) => {
          // console.log(fee)
          return (
            <>
              <section key={fee.student_id}>
                <div className='bill_border3'>
                  <div className='bill_border3'>
                    <h2 className='Bill_head'>
                      TRINITY MISSION SCHOOL NSOATRE
                    </h2>
                    <h2>{`PUPIL TERMINAL BILL FOR ${Basic}`}</h2>
                  </div>
                  <div className='Bill_main'>
                    <h2>Student ID:{fee.student_id}</h2>
                    <h2>Pupil's Name: {fee.student_name}</h2>
                    <h2>Pupil's CLASS: {fee.student_class}</h2>
                    <h2>Term: {term}</h2>
                    <h3>
                      DATE PREPARED: <DateComponent />
                    </h3>
                  </div>
                  <br />

                  <table className='bill_border2'>
                    <thead>
                      <tr className='bill_border'>
                        <th className='bill'>
                          <h1>PARTICULARS</h1>
                        </th>
                        <th>
                          <h1 className='bill'>COST</h1>
                        </th>
                      </tr>
                    </thead>
                    <TableBodySpecific />
                    <tr className='bill_border'>
                      <td className='bill'>ARREARS FROM LAST TERM</td>

                      <td className='bill'>{fee.Balance}</td>
                    </tr>
                    <tr className='bill_border'>
                      <td className='bill'>
                        <h1>Total Payment Due</h1>
                      </td>
                      <td className='bill'>
                        <h1>{fee.Balance + calculateBill()}</h1>
                      </td>
                    </tr>
                    <br />
                  </table>
                  <br />
                  <br />
                  <br />
                </div>
              </section>
            </>
          )
        })}
        <button className='print_Bill' onClick={PrintBTN}>
          Print
        </button>
      </div>
    </>
  )
}

export default TerminalBill
