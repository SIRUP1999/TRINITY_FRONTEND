import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import UseAuth from '../hooks/UseAuth'
import allowedRoles from '../config/AllowedRoles'

const ViewStudentForm = () => {
  const { auth } = UseAuth()
  const Location = useLocation()
  const axiosPrivate = UseAxiosPrivate()
  //All students start
  const GET_ALL_STUDENTS = '/register'
  const [students, setStudents] = useState([])
  const { student_id } = useParams()

  const Navigate = useNavigate()
  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()
    const getAllStudents = async () => {
      try {
        const response = await axiosPrivate.get(GET_ALL_STUDENTS, {
          signal: controller.signal,
        })
        setStudents(response.data)

        // setLoading(false)
      } catch (err) {
        if (!auth?.accesstoken) {
          Navigate('/', { state: { from: Location }, replace: true })
        }
        console.log(err)
      }
    }
    getAllStudents()

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [axiosPrivate])
  //All students ends***************
  // console.log(students)
  const ViewForm = students.find(
    (person) => person.student_id === parseInt(student_id)
  )
  console.log(ViewForm)

  const DisplayLink = () => {
    if (
      auth?.roles?.find(
        (role) => role === allowedRoles.Admin || role === allowedRoles.Manager
      )
    ) {
      return (
        <button className='editstudentbutton'>
          <Link className='editstudentlink' to={`EditStudent/${student_id}`}>
            Edit Student
          </Link>
        </button>
      )
    }
  }
  return (
    <section className='View_single'>
      <header className='record_header'>
        <div className='division'>
          <div className='division1'>
            <h1 className='bold'>Trinity Christian School</h1>
            <h3>P.O.BOX 229,NSOATRE,BONO-GHANA</h3>
            <h4>Student registeration record</h4>
            <DisplayLink />
          </div>
          {ViewForm ? (
            <img
              src={`http://localhost:3500/${ViewForm?.photo?.fileName}`}
              alt='student'
              className='viewform_image'
            />
          ) : (
            ''
          )}
        </div>
      </header>

      {ViewForm ? (
        <section className='main_views'>
          <h1 className='student'>Details of pupil</h1>
          <div className='details_of_student'>
            <div className='records'>
              <h1 className='record_title'>
                <span className='record_name'>Firstname:</span>
                {ViewForm.firstname}
              </h1>

              <h1 className='record_title'>
                <span className='record_name'>Surname:</span> {ViewForm.Surname}
              </h1>

              <h1 className='record_title'>
                <span className='record_name'>Gender:</span> {ViewForm.Gender}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Date Of Birth:</span>
                {ViewForm.Date_Of_Birth}
              </h1>

              <h1 className='record_title'>
                <span className='record_name'>Place Of Birth:</span>
                {ViewForm.Place_Of_Birth}
              </h1>

              <h1 className='record_title'>
                <span className='record_name'>Mothers Tongue:</span>
                {ViewForm.Mother_Tongue}
              </h1>

              <h1 className='record_title'>
                <span className='record_name'>Religion & Denomination:</span>
                {ViewForm.Religion_And_Denomination}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Ghanaian Language Spoken:</span>
                {ViewForm.Ghanaian_Language_Spoken}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Home Town:</span>
                {ViewForm.Home_Town}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Nationality:</span>
                {ViewForm.Nationality}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Region:</span>
                {ViewForm.Region}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>
                  Year In Which Admission Is Sought:
                </span>
                {ViewForm.Year_In_Which_Admission_Is_Sought}
              </h1>
            </div>
          </div>
          {/* previouse School Attended */}
          <h1 className='student'>Previouse School Attended</h1>
          <div className='details_of_student'>
            <div className='records'>
              <h1 className='record_title'>
                <span className='record_name'>Name Of School:</span>
                {ViewForm.Name_Of_School}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Admittion Details:</span>
                {ViewForm.Admittion_details}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Last Attendance Date:</span>
                {ViewForm.Last_Attendance_Date}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>
                  How Did You Hear About Trinity Christian Mission School:
                </span>
                {
                  ViewForm.How_Did_You_Hear_About_Trinity_Christian_Mission_School
                }
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>
                  What Are Your Reasons For Leaving Your Previous School:
                </span>
                {
                  ViewForm.What_Are_Your_Reasons_For_Leaving_Your_Previous_School
                }
              </h1>
            </div>
          </div>
          {/* //Other significant data */}

          <h1 className='student'>Other Significant Data</h1>
          <br />
          <div className='records'>
            <div className='childlives'>
              <h1 className='bold1'>Child Lives with</h1>
              <span className='bold1span'>Both parents</span>
              {ViewForm.Both_Parents ? (
                <FaCheck className='valid' />
              ) : (
                <FaTimes className='invalid' />
              )}
              <span className='bold1span'>Mother</span>
              {ViewForm.Mother ? (
                <FaCheck className='valid' />
              ) : (
                <FaTimes className='invalid' />
              )}
              <span className='bold1span'>Father</span>
              {ViewForm.Father ? (
                <FaCheck className='valid' />
              ) : (
                <FaTimes className='invalid' />
              )}
              <span className='bold1span'>Guardian</span>
              {ViewForm.Guardian ? (
                <FaCheck className='valid' />
              ) : (
                <FaTimes className='invalid' />
              )}
              <span className='bold1span'>Other person</span>
              {ViewForm.Other_Person ? (
                <FaCheck className='valid' />
              ) : (
                <FaTimes className='invalid' />
              )}
            </div>

            <div className='Number_of_children'>
              <h1 className='bold1000'>
                Number Of Other Children Living In The House
              </h1>
              <h1 className='older'>
                Older Children:{ViewForm.Older_Children}
              </h1>
              <h1 className='older'>
                Younger Children:{ViewForm.Younger_Children}
              </h1>
            </div>
            <h1 className='bold3'>
              If Child Lives With Other Person,Please Give Details Of The
              Relationship Of That Person To The Child :
              <h1 className='akwaaba'>
                {
                  ViewForm.Details_Of_Persons_Relationship_To_The_Child_Living_with
                }
              </h1>
            </h1>
          </div>
          {/* //details of father */}
          <h1 className='student'>Details Of Father</h1>
          <div className='details_of_student'>
            <div className='records'>
              <h1 className='record_title'>
                <span className='record_name'> Firstname:</span>
                {ViewForm.fathers_Firstname}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Surname:</span>
                {ViewForm.fathers_surname}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Occupation:</span>
                {ViewForm.fathers_Occupation}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Nationality:</span>
                {ViewForm.fathers_Nationality}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Education Level:</span>
                {ViewForm.fathers_Education_level}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Religion:</span>
                {ViewForm.fathers_Religion}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>
                  Name And Address Of Place Of Work(Direction):
                </span>
                {ViewForm.fathers_Name_And_Adress_Of_Place_Of_Work}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Home Address(Direction):</span>
                {ViewForm.fathers_Home_Address}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Tel Number(Office):</span>
                {ViewForm.fathers_Tel_Number_Office}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Tel Number(Mobile):</span>
                {ViewForm.fathers_Tel_Number_Mobile}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Email Address:</span>
                {ViewForm.fathers_Email_Address}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Number Of Wifes:</span>
                {ViewForm.fathers_Number_Of_Wifes}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>
                  If Deceased State Date Of Death:
                </span>
                {ViewForm.fathers_If_Deceased_State_Date_Of_Death}
              </h1>
            </div>
          </div>
          {/* ******hEALTH dEATILS****** */}
          <h1 className='student'>Health Details</h1>
          <br />
          <div className='records'>
            <div className='record_title'>
              <h1 className='bold4'>
                diseases against which the child is vaccinated from
              </h1>
              <div className='decission'>
                <span>Smallpox</span>
                {ViewForm.Smallpox ? (
                  <FaCheck className='valid' />
                ) : (
                  <FaTimes className='invalid' />
                )}
                &nbsp; &nbsp;
                <span>Diptheria</span>
                {ViewForm.Diptheria ? (
                  <FaCheck className='valid' />
                ) : (
                  <FaTimes className='invalid' />
                )}
                &nbsp;
                <span>Whooping_Cou</span>
                {ViewForm.Whooping_Cou ? (
                  <FaCheck className='valid' />
                ) : (
                  <FaTimes className='invalid' />
                )}
                &nbsp;
                <span>Teta</span>
                {ViewForm.Teta ? (
                  <FaCheck className='valid' />
                ) : (
                  <FaTimes className='invalid' />
                )}
                &nbsp;
                <span>Measles</span>
                {ViewForm.Measles ? (
                  <FaCheck className='valid' />
                ) : (
                  <FaTimes className='invalid' />
                )}
                &nbsp;
                <span>Polio</span>
                {ViewForm.Polio ? (
                  <FaCheck className='valid' />
                ) : (
                  <FaTimes className='invalid' />
                )}
                &nbsp;
                <span>Tuberculosis</span>
                {ViewForm.Tuberculosis ? (
                  <FaCheck className='valid' />
                ) : (
                  <FaTimes className='invalid' />
                )}
              </div>
            </div>
            {/* details */}
            <div>
              <h1 className='record_title'>
                <span className='record_name'>
                  is there anything you would like us to know about your childs
                  health:
                </span>
                {ViewForm.Futher_details_About_the_Childs_Health}
              </h1>
            </div>
            <div>
              <h1 className='record_title'>
                <span className='record_name'>
                  Incase of sudden illness at school please indicate what should
                  be done
                </span>
                {
                  ViewForm.In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done
                }
              </h1>
            </div>
          </div>
          {/* ************Details of mother******** */}
          <h1 className='student'>Details of mother</h1>
          <div className='details_of_student'>
            <div className='records'>
              <h1 className='record_title'>
                <span className='record_name'> Firstname:</span>
                {ViewForm.Mother_Firstname}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Surname:</span>
                {ViewForm.Mother_surname}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Occupation:</span>
                {ViewForm.Mother_Occupation}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Nationality:</span>
                {ViewForm.Mother_Nationality}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Education Level:</span>
                {ViewForm.Mother_Education_level}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Religion:</span>
                {ViewForm.Mother_Religion}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>
                  Name And Address Of Place Of Work(Direction):
                </span>
                {ViewForm.Mother_Name_And_Address_Of_Place_Of_Work}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Home Address(Direction):</span>
                {ViewForm.Mother_Home_Adress}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Tel Number(Office):</span>
                {ViewForm.Mother_Tel_Number_Office}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Tel Number(Mobile):</span>
                {ViewForm.Mother_Tel_Number_Mobile}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Email Address:</span>
                {ViewForm.Mother_Email_Address}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>
                  If Deceased State Date Of Death:
                </span>
                {ViewForm.Mother_If_Deceased_State_Date_Of_Death}
              </h1>
            </div>
          </div>
          {/* ***************Details of Guaadddian&********* */}
          <h1 className='student'>Details Of Guardian</h1>
          <div className='details_of_student'>
            <div className='records'>
              <h1 className='record_title'>
                <span className='record_name'> Firstname:</span>
                {ViewForm.Guardian_Firstname}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Surname:</span>
                {ViewForm.Guardian_surname}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Occupation:</span>
                {ViewForm.Guardian_Occupation}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Nationality:</span>
                {ViewForm.Guardian_Nationality}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'> Education Level:</span>
                {ViewForm.Guardian_Education_level}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Religion:</span>
                {ViewForm.Guardian_Religion}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>
                  Name And Address Of Place Of Work(Direction):
                </span>
                {ViewForm.Guardian_Name_And_Address_Of_Place_Of_Work}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Home Address(Direction):</span>
                {ViewForm.Guardian_Home_Address}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Tel Number(Office):</span>
                {ViewForm.Guardian_Tel_Number_Office}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Tel Number(Mobile):</span>
                {ViewForm.Guardian_Tel_Number_Mobile}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Email Address:</span>
                {ViewForm.Guardian_Email_Address}
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>
                  Number Of Wifes(if Applicable):
                </span>
                {ViewForm.Guardian_Number_Of_Wifes}
              </h1>
            </div>
          </div>
          {/* **************confirmation*********** */}
          <h1 className='student'>Confirmation</h1>
          <br />
          <div className='records2'>
            <div className='record_title1'>
              <h1 className='bold5'>
                i confirm that to the best of my knowledge ,the information
                supplied on this form is accurate and i agree to abide by the
                school/s rules and regulations
              </h1>
              <h1 className='record_title'>
                <span className='record_name'>Signature:</span>
                <div>
                  <img
                    src={ViewForm.Parents_or_guardian_signature}
                    alt='signature'
                  />
                  <h1 className='bold5'>
                    Signed By: {ViewForm.ParentsignedBy}
                  </h1>
                </div>
              </h1>
            </div>
          </div>
          <br />
          <h1 className='student5'>For Office Use Only</h1>
          <div className='records'>
            <h1 className='record_title'>
              <span className='record_name'>Correspondence No:</span>
              {ViewForm.correspondence_No}
            </h1>
            <h1 className='record_title'>
              <span className='record_name'>Admittion:</span>
              {ViewForm.Admission}
            </h1>

            <h1 className='record_title'>
              <span className='record_name'>
                Date for receipt of admittion form:
              </span>
              {ViewForm.Date_For_Receipt_Of_Admission_Form}
            </h1>
            <br />
            <br />
            <div className='inspection'>
              <div className='records3'>
                <div className='record_title10'>
                  <h1 className='bold4'>Documents Received And Inspected</h1>
                  <div className='decission'>
                    <h1 className='documents_received'>Birth Certificate</h1>
                    <h1 className='documents_received'>Health Certificate</h1>
                    <h1 className='documents_received'>
                      two passport size photgraphs
                    </h1>
                    <h1 className='documents_received'>
                      returned signed declaration form
                    </h1>
                  </div>
                </div>
                {/* ///alrrignth */}
                <div className='record_title'>
                  <div className='insp'>
                    <span className='record_name'>Inspected</span>
                    <h1
                      className={
                        ViewForm.Birth_CertificateI ? 'valid' : 'invalid'
                      }
                    >
                      {ViewForm.Birth_CertificateI ? <FaCheck /> : <FaTimes />}
                    </h1>
                    <h1
                      className={
                        ViewForm.Health_CertificateI ? 'valid' : 'invalid'
                      }
                    >
                      {ViewForm.Health_CertificateI ? <FaCheck /> : <FaTimes />}
                    </h1>
                    <h1
                      className={
                        ViewForm.Two_Passport_Size_PhotographsI
                          ? 'valid'
                          : 'invalid'
                      }
                    >
                      {ViewForm.Two_Passport_Size_PhotographsI ? (
                        <FaCheck />
                      ) : (
                        <FaTimes />
                      )}
                    </h1>
                    <h1
                      className={
                        ViewForm.Returned_Signed_Declaration_FormsI
                          ? 'valid'
                          : 'invalid'
                      }
                    >
                      {ViewForm.Returned_Signed_Declaration_FormsI ? (
                        <FaCheck />
                      ) : (
                        <FaTimes />
                      )}
                    </h1>
                  </div>
                </div>
              </div>
              {/* inspected ends */}
              <div className='record_title'>
                <div className='retain'>
                  <span className='record_name2'>Copy Retained</span>
                  <h1
                    className={
                      ViewForm.Birth_CertificateC ? 'valid' : 'invalid'
                    }
                  >
                    {ViewForm.Birth_CertificateC ? <FaCheck /> : <FaTimes />}
                  </h1>
                  <h1
                    className={
                      ViewForm.Health_CertificateC ? 'valid' : 'invalid'
                    }
                  >
                    {ViewForm.Health_CertificateC ? <FaCheck /> : <FaTimes />}
                  </h1>
                  <h1
                    className={
                      ViewForm.Two_Passport_Size_PhotographsC
                        ? 'valid'
                        : 'invalid'
                    }
                  >
                    {ViewForm.Two_Passport_Size_PhotographsC ? (
                      <FaCheck />
                    ) : (
                      <FaTimes />
                    )}
                  </h1>
                  <h1
                    className={
                      ViewForm.Returned_Signed_Declaration_FormsC
                        ? 'valid'
                        : 'invalid'
                    }
                  >
                    {ViewForm.Returned_Signed_Declaration_FormsC ? (
                      <FaCheck />
                    ) : (
                      <FaTimes />
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className='records2'>
            <div className='record_title1'>
              <h1 className='bold5'>Head teacher's signature</h1>
              <h1 className='record_title'>
                <span className='record_name'>Signature:</span>
                <div>
                  <img src={ViewForm.headmaster_Signature} alt='signature' />
                  <h1 className='bold5'>
                    Signed By: {ViewForm.head_Teacher_signed_by}
                  </h1>
                </div>
              </h1>
              <br />
              <h1 className='record_title'>
                <span className='record_name'>Comment(Office Use Only):</span>
                {ViewForm.Comment}
              </h1>
            </div>
          </div>
        </section>
      ) : (
        <BeatLoader size={'40px'} color='red' />
      )}
    </section>
  )
}

export default ViewStudentForm
