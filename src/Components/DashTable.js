import React, { useMemo } from 'react'
import UseAuth from '../hooks/UseAuth'
import { useEffect, useState } from 'react'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import { FaCheck, FaTimes } from 'react-icons/fa'

import { useMediaQuery } from 'react-responsive'
import { Link, useNavigate } from 'react-router-dom'
import TerminalBill from './TerminalBill'
import { FaSearch } from 'react-icons/fa'

// import ViewFees from './ViewFees'

const DashTable = () => {
  const [Term, setTerm2] = useState([])
  const { socket } = UseAuth()
  const Navigate = useNavigate()
  const [update3] = useState(false)
  const [search, setSearch] = useState('')
  const [searchFResult, setSearchResult] = useState([])
  const isPhone = useMediaQuery({ maxWidth: 899 })
  const isDesktop = useMediaQuery({ minWidth: 900 })
  const GET_FEES = '/Fees'
  const axiosprivate = UseAxiosPrivate()
  const [getFee, setGetFee] = useState([])

  useEffect(() => {
    let Ismounted = true
    const controller = new AbortController()
    const getAllFees = async () => {
      const response = await axiosprivate.get(GET_FEES, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      Ismounted && setGetFee(response.data)
      setSearchResult(response.data)
      console.log(response.data.Message)
    }
    getAllFees()
    const interval = setInterval(getAllFees, 3000)
    return () => {
      Ismounted = false
      controller.abort()
      clearInterval(interval)
    }
  }, [axiosprivate])

  useEffect(() => {
    const result = getFee?.filter(
      (fee) =>
        fee.student_name.toLowerCase().includes(search.toLowerCase()) ||
        fee.student_id.includes(search) ||
        fee.student_class.toLowerCase().includes(search.toLowerCase())
    )
    setSearchResult(result)
  }, [getFee, search])

  //fetchTerm

  const Handleroam = (id2) => {
    Navigate(`ViewFees/${id2}`)
  }
  // highlight

  const Updatehighlight = async (id) => {
    await axiosprivate.patch(`Fees/${id}`, JSON.stringify({ update3, Term }), {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
  }
  // socket.on('message', (msg) => {
  //   console.log(msg)
  // })
  // const sort2 = getFee.sort((a, b) =>
  //   a.student_id > b.student_id ? 0 : a.student_id < b.student_id ? -1 : 1
  // )

  useEffect(() => {
    const GetTerm = async () => {
      try {
        const response = await axiosprivate.get('/term')
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

  const data = useMemo(() => searchFResult, [searchFResult])
  // console.log(data)
  // const totalfee = 10000
  const data2 = data?.filter((data) => data.term === Term)
  const getmain = data2?.sort((a, b) =>
    a.student_class > b.student_class
      ? 1
      : a.student_class < b.student_class
      ? -1
      : 0
  )
  console.log(getmain)
  // console.log(data)
  const GetMediaQuery = () => {
    if (isPhone) {
      return (
        <table className='Original_table'>
          <thead className='main_table_head'>
            <tr id='table_row'>
              <th className='table_head'>ID</th>
              <th className='table_head'>NAME</th>
              <th className='table_head'>CLASS</th>
              <th className='table_head'>Last PAYMENT MADE</th>
              <th className='table_head'>TOTAL PAYMENT MADE</th>
              <th className='table_head'>Balance</th>
            </tr>
          </thead>
          <tbody className='main_table_body'>
            {getmain.map((fee) => (
              <tr
                key={fee.student_id}
                className='table_row'
                onClick={() => Handleroam(fee.student_id)}
                // onMouseDown={() => Updatehighlight(fee.student_id)}z
              >
                <td className={fee.update2 ? 'highlight' : ''}>
                  {fee.student_id}
                </td>
                <td className={fee.update2 ? 'highlight' : ''}>
                  {fee.student_name}
                </td>
                <td className={fee.update2 ? 'highlight' : ''}>
                  {fee.student_class}
                </td>
                <td className={fee.update2 ? 'highlight' : ''}>{fee.Ghc}</td>
                <td
                  className={fee.update2 ? 'highlight' : ''}
                >{`GHC ${fee.total_payment_made}`}</td>
                <td className={fee.update2 ? 'highlight' : ''}>
                  {`GHC ${fee.Balance}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    } else if (isDesktop) {
      return (
        <table className='Original_table'>
          <thead className='main_table_head'>
            <tr id='table_row'>
              <th className='table_head'>ID</th>
              <th className='table_head'>STUDENT NAME</th>
              <th className='table_head'>CLASS</th>
              <th className='table_head'>LAST PAYMENT MADE</th>
              <th className='table_head'>TOTAL PAYMENT MADE</th>
              <th className='table_head'>TOTAL FEES</th>
              <th className='table_head'>BALANCE</th>
              <th className='table_head'>ARREARS FROM LAST TERM/YEAR</th>
              <th className='table_head'>COMPLETED</th>
            </tr>
          </thead>
          <tbody className='main_table_body'>
            {getmain.map((fee) => (
              <tr
                key={fee.student_id}
                // className={fee.update2 ? 'highlight' : 'table_row'}
                className='table_row'
                onClick={() => Handleroam(fee.student_id)}
                onMouseDown={() => Updatehighlight(fee.student_id)}
              >
                <td
                  className={fee.update2 ? 'highlight' : ''}
                  onClick={() => Updatehighlight(fee.student_id)}
                >
                  {fee.student_id}
                </td>
                <td className={fee.update2 ? 'highlight' : ''}>
                  {fee.student_name}
                </td>
                <td className={fee.update2 ? 'highlight' : ''}>
                  {fee.student_class}
                </td>
                <td className={fee.update2 ? 'highlight' : ''}>{fee.Ghc}</td>
                <td
                  className={fee.update2 ? 'highlight' : ''}
                >{`GHC ${fee.total_payment_made}`}</td>
                <td
                  className={fee.update2 ? 'highlight' : ''}
                >{`GHC ${fee.Totalfee}`}</td>
                <td
                  className={fee.update2 ? 'highlight' : ''}
                >{`GHC ${fee.Balance}`}</td>
                <td className={fee.update2 ? 'highlight' : ''}>
                  {` ${fee.arrears2}`}
                </td>
                <td className={fee.update2 ? 'highlight' : ''}>
                  {fee.Balance === 0 && fee.arrears2 === 'GHC 0' ? (
                    <FaCheck className='valid2' />
                  ) : fee.Balance === 0 && fee.arrears2 > 'GHC 0' ? (
                    <p>
                      <FaCheck className='valid2' />
                      <br />
                      Arrears + Current fee cleared
                    </p>
                  ) : fee.Balance === 0 && fee.arrears2 !== 'GHC 0' ? (
                    <p>
                      <FaCheck className='valid2' />
                      <br />
                      Current fee cleared
                    </p>
                  ) : fee.Balance < 0 ||
                    (fee.Balance < 0 && fee.arrears2 > 'GHC 0') ? (
                    <p>
                      <FaCheck className='valid2' />
                      <br />
                      Balance will be deducted from Next Term fee
                    </p>
                  ) : fee.Balance > 0 ||
                    (fee.Balance > 0 && fee.arrears2 > 'GHC 0') ? (
                    <p>
                      <FaTimes className='invalid2' />
                      <br />
                      Balance will be added to next term Fees
                    </p>
                  ) : (
                    <FaTimes className='invalid2' />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )
    }
  }

  return (
    <>
      <h1 className='termview'>
        CURRENT VIEW:<h3 className='terminal'> {Term} </h3>
      </h1>

      <div className='search_div'>
        <button className='searchbtn'>
          <FaSearch />
        </button>
        <input
          type='text'
          placeholder='search'
          className='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <GetMediaQuery />
      {/* <TerminalBill /> */}
    </>
  )
}

export default DashTable
