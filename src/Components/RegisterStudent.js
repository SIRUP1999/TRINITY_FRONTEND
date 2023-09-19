import { useRef, useState } from 'react'
import SignaturePad from 'react-signature-canvas'
import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import UseAuth from '../hooks/UseAuth'
import allowedRoles from '../config/AllowedRoles'
// import axios from '../Api/axios'

const RegisterStudent = () => {
  // const { auth } = UseAuth()
  const REGISTERSTUDENT_URL = '/register'
  const [firstname, setFirstname] = useState('')
  const [Surname, setSurname] = useState('')
  const [Gender, setGender] = useState('')
  const [Date_Of_Birth, setDate_Of_Birth] = useState('')
  const [Place_Of_Birth, setplace_Of_Birth] = useState('')
  const [Mother_Tongue, setMother_Tongue] = useState('')
  const [Religion_And_Denomination, setReligion_And_Denomination] = useState('')
  const [Ghanaian_Language_Spoken, setGhanaian_Language_Spoken] = useState('')
  const [Home_Town, setHome_Town] = useState('')
  const [Nationality, setNationality] = useState('')
  const [Region, setRegion] = useState('')
  const [
    Year_In_Which_Admission_Is_Sought,
    setYear_In_Which_Admission_Is_Sought,
  ] = useState('')
  const [Name_Of_School, setName_Of_School] = useState('')
  const [Admittion_details, setAdmittion_details] = useState('')
  const [Last_Attendance_Date, setLast_Attendance_Date] = useState('')
  const [
    How_Did_You_Hear_About_Trinity_Christian_Mission_School,
    setHow_Did_You_Hear_About_Trinity_Christian_Mission_School,
  ] = useState('')
  const [
    What_Are_Your_Reasons_For_Leaving_Your_Previous_School,
    setWhat_Are_Your_Reasons_For_Leaving_Your_Previous_School,
  ] = useState('')
  const [Both_Parents, setBoth_Parents] = useState(false)
  const [Mother, setMother] = useState(false)
  const [Father, setFather] = useState(false)
  const [Other_Person, setOther_Person] = useState(false)
  const [Guardian, setGuardian] = useState(false)
  const [Older_Children, setOlder_Children] = useState('')
  const [Younger_Children, setYounger_Children] = useState('')
  const [
    Details_Of_Persons_Relationship_To_The_Child_Living_with,
    setDetails_Of_Persons_Relationship_To_The_Child_Living_with,
  ] = useState('')
  const [fathers_Firstname, setfathers_Firstname] = useState('')
  const [fathers_surname, setfathers_surname] = useState('')
  const [fathers_Occupation, setfathers_Occupation] = useState('')
  const [fathers_Nationality, setfathers_Nationality] = useState('')
  const [fathers_Education_level, setfathers_Education_level] = useState('')
  const [fathers_Religion, setfathers_Religion] = useState('')
  const [
    fathers_Name_And_Adress_Of_Place_Of_Work,
    setfathers_Name_And_Adress_Of_Place_Of_Work,
  ] = useState('')
  const [fathers_Home_Address, setfathers_Home_Address] = useState('')
  const [fathers_Tel_Number_Office, setfathers_Tel_Number_Office] = useState('')
  const [fathers_Tel_Number_Mobile, setfathers_Tel_Number_Mobile] = useState('')
  const [fathers_Email_Address, setfathers_Email_Address] = useState('')
  const [fathers_Number_Of_Wifes, setfathers_Number_Of_Wifes] = useState('')
  const [
    fathers_If_Deceased_State_Date_Of_Death,
    setfathers_If_Deceased_State_Date_Of_Death,
  ] = useState('')
  const [Smallpox, setSmallpox] = useState(false)
  const [Diptheria, setDiptheria] = useState(false)
  const [Whooping_Cou, setWhooping_Cou] = useState(false)
  const [Teta, setTeta] = useState(false)
  const [Measles, setMeasles] = useState(false)
  const [Polio, setPolio] = useState(false)
  const [Tuberculosis, setTuberculosis] = useState(false)
  const [
    Futher_details_About_the_Childs_Health,
    setFuther_details_About_the_Childs_Health,
  ] = useState('')
  const [
    In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done,
    setIn_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done,
  ] = useState('')
  const [Mother_Firstname, setMother_Firstname] = useState('')
  const [Mother_surname, setMother_surname] = useState('')
  const [Mother_Occupation, setMother_Occupation] = useState('')
  const [Mother_Nationality, setMother_Nationality] = useState('')
  const [Mother_Education_level, setMother_Education_level] = useState('')
  const [Mother_Religion, setMother_Religion] = useState('')
  const [
    Mother_Name_And_Address_Of_Place_Of_Work,
    setMother_Name_And_Address_Of_Place_Of_Work,
  ] = useState('')
  const [Mother_Home_Adress, setMother_Home_Adress] = useState('')
  const [Mother_Tel_Number_Office, setMother_Tel_Number_Office] = useState('')
  const [Mother_Tel_Number_Mobile, setMother_Tel_Number_Mobile] = useState('')
  const [Mother_Email_Address, setMother_Email_Address] = useState('')
  const [
    Mother_If_Deceased_State_Date_Of_Death,
    setMother_If_Deceased_State_Date_Of_Death,
  ] = useState('')
  const [Guardian_Firstname, setGuardian_Firstname] = useState('')
  const [Guardian_surname, setGuardian_surname] = useState('')
  const [Guardian_Occupation, setGuardian_Occupation] = useState('')
  const [Guardian_Nationality, setGuardian_Nationality] = useState('')
  const [Guardian_Education_level, setGuardian_Education_level] = useState('')
  const [Guardian_Religion, setGuardian_Religion] = useState('')
  const [
    Guardian_Name_And_Address_Of_Place_Of_Work,
    setGuardian_Name_And_Address_Of_Place_Of_Work,
  ] = useState('')
  const [Guardian_Home_Address, setGuardian_Home_Address] = useState('')
  const [Guardian_Tel_Number_Office, setGuardian_Tel_Number_Office] =
    useState('')
  const [Guardian_Tel_Number_Mobile, setGuardian_Tel_Number_Mobile] =
    useState('')
  const [Guardian_Email_Address, setGuardian_Email_Address] = useState('')
  const [Guardian_Number_Of_Wifes, setGuardian_Number_Of_Wifes] = useState('')
  const [Parents_or_guardian_signature, setParents_or_guardian_signature] =
    useState('')
  const [ParentsignedBy, setParentSignedBy] = useState('')
  const [correspondence_No, setcorrespondence_No] = useState('')
  const [Admission, setAdmission] = useState('')
  const [
    Date_For_Receipt_Of_Admission_Form,
    setDate_For_Receipt_Of_Admission_Form,
  ] = useState('')
  const [Birth_CertificateI, setBirth_CertificateI] = useState(false)
  const [Birth_CertificateC, setBirth_CertificateC] = useState(false)
  const [Health_CertificateI, setHealth_CertificateI] = useState(false)
  const [Health_CertificateC, setHealth_CertificateC] = useState(false)
  const [Two_Passport_Size_PhotographsI, setTwo_Passport_Size_PhotographsI] =
    useState(false)
  const [Two_Passport_Size_PhotographsC, setTwo_Passport_Size_PhotographsC] =
    useState(false)
  const [
    Returned_Signed_Declaration_FormsI,
    setReturned_Signed_Declaration_FormsI,
  ] = useState(false)
  const [
    Returned_Signed_Declaration_FormsC,
    setReturned_Signed_Declaration_FormsC,
  ] = useState(false)
  const [headmaster_Signature, setHeadmasterssignature] = useState('')
  const [head_Teacher_signed_by, sethead_Teacher_signed_by] = useState('')
  const [Comment, setComment] = useState('')
  /********end of states */
  const [errMsg, setErrMsg] = useState('')
  const axiosPrivate = UseAxiosPrivate()
  const fileInputRef = useRef()

  const handleSubmmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append('avatar', fileInputRef.current.files[0])
    const jsondata = {
      firstname,
      Surname,
      Gender,
      Date_Of_Birth,
      Place_Of_Birth,
      Mother_Tongue,
      Religion_And_Denomination,
      Ghanaian_Language_Spoken,
      Home_Town,
      Nationality,
      Region,
      Year_In_Which_Admission_Is_Sought,
      Name_Of_School,
      Admittion_details,
      Last_Attendance_Date,
      How_Did_You_Hear_About_Trinity_Christian_Mission_School,
      What_Are_Your_Reasons_For_Leaving_Your_Previous_School,
      Both_Parents,
      Mother,
      Father,
      Other_Person,
      Guardian,
      Older_Children,
      Younger_Children,
      Details_Of_Persons_Relationship_To_The_Child_Living_with,
      fathers_Firstname,
      fathers_surname,
      fathers_Occupation,
      fathers_Nationality,
      fathers_Education_level,
      fathers_Religion,
      fathers_Name_And_Adress_Of_Place_Of_Work,
      fathers_Home_Address,
      fathers_Tel_Number_Office,
      fathers_Tel_Number_Mobile,
      fathers_Email_Address,
      fathers_Number_Of_Wifes,
      fathers_If_Deceased_State_Date_Of_Death,
      Smallpox,
      Diptheria,
      Whooping_Cou,
      Teta,
      Measles,
      Polio,
      Tuberculosis,
      Futher_details_About_the_Childs_Health,
      In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done,
      Mother_Firstname,
      Mother_surname,
      Mother_Occupation,
      Mother_Nationality,
      Mother_Education_level,
      Mother_Religion,
      Mother_Name_And_Address_Of_Place_Of_Work,
      Mother_Home_Adress,
      Mother_Tel_Number_Office,
      Mother_Tel_Number_Mobile,
      Mother_Email_Address,
      Mother_If_Deceased_State_Date_Of_Death,
      Guardian_Firstname,
      Guardian_surname,
      Guardian_Occupation,
      Guardian_Nationality,
      Guardian_Education_level,
      Guardian_Religion,
      Guardian_Name_And_Address_Of_Place_Of_Work,
      Guardian_Home_Address,
      Guardian_Tel_Number_Office,
      Guardian_Tel_Number_Mobile,
      Guardian_Email_Address,
      Guardian_Number_Of_Wifes,
      Parents_or_guardian_signature,
      ParentsignedBy,
      correspondence_No,
      Admission,
      Date_For_Receipt_Of_Admission_Form,
      Birth_CertificateI,
      Birth_CertificateC,
      Health_CertificateI,
      Health_CertificateC,
      Two_Passport_Size_PhotographsI,
      Two_Passport_Size_PhotographsC,
      Returned_Signed_Declaration_FormsI,
      Returned_Signed_Declaration_FormsC,
      headmaster_Signature,
      head_Teacher_signed_by,
      Comment,
    }
    formdata.append('jsondata', JSON.stringify(jsondata))

    try {
      const response = await axiosPrivate.post(
        REGISTERSTUDENT_URL,
        formdata,

        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      )
      console.log(response.data)
    } catch (err) {
      console.log(err.respons)
      if (!err.response) {
        setErrMsg('No server Response')
      } else if (err.response?.status === 409) {
        setErrMsg('User already Exist')
      } else {
        setErrMsg('Registration Failed')
      }
    }
    console.log({
      formdata,
      firstname,
      Surname,
      Gender,

      Date_Of_Birth,
      Place_Of_Birth,
      Mother_Tongue,
      Religion_And_Denomination,
      Ghanaian_Language_Spoken,
      Home_Town,
      Nationality,
      Region,
      Year_In_Which_Admission_Is_Sought,

      Name_Of_School,
      Admittion_details,
      Last_Attendance_Date,
      How_Did_You_Hear_About_Trinity_Christian_Mission_School,
      What_Are_Your_Reasons_For_Leaving_Your_Previous_School,

      Both_Parents,
      Mother,
      Father,
      Other_Person,
      Guardian,

      Older_Children,
      Younger_Children,

      Details_Of_Persons_Relationship_To_The_Child_Living_with,

      fathers_Firstname,
      fathers_surname,
      fathers_Occupation,
      fathers_Nationality,
      fathers_Education_level,

      fathers_Religion,
      fathers_Name_And_Adress_Of_Place_Of_Work,
      fathers_Home_Address,

      fathers_Tel_Number_Office,
      fathers_Tel_Number_Mobile,

      fathers_Email_Address,
      fathers_Number_Of_Wifes,
      fathers_If_Deceased_State_Date_Of_Death,

      Smallpox,
      Diptheria,
      Whooping_Cou,
      Teta,
      Measles,
      Polio,
      Tuberculosis,
      Futher_details_About_the_Childs_Health,
      In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done,
      Mother_Firstname,
      Mother_surname,
      Mother_Occupation,
      Mother_Nationality,
      Mother_Education_level,

      Mother_Religion,
      Mother_Name_And_Address_Of_Place_Of_Work,
      Mother_Home_Adress,

      Mother_Tel_Number_Office,
      Mother_Tel_Number_Mobile,

      Mother_Email_Address,
      Mother_If_Deceased_State_Date_Of_Death,

      Guardian_Firstname,
      Guardian_surname,
      Guardian_Occupation,
      Guardian_Nationality,
      Guardian_Education_level,
      Guardian_Religion,
      Guardian_Name_And_Address_Of_Place_Of_Work,
      Guardian_Home_Address,

      Guardian_Tel_Number_Office,
      Guardian_Tel_Number_Mobile,

      Guardian_Email_Address,
      Guardian_Number_Of_Wifes,
      Parents_or_guardian_signature,
      ParentsignedBy,
      correspondence_No,
      Admission,
      Date_For_Receipt_Of_Admission_Form,

      Birth_CertificateI,
      Birth_CertificateC,
      Health_CertificateI,
      Health_CertificateC,
      Two_Passport_Size_PhotographsI,
      Two_Passport_Size_PhotographsC,
      Returned_Signed_Declaration_FormsI,
      Returned_Signed_Declaration_FormsC,
      headmaster_Signature,
      head_Teacher_signed_by,
      Comment,
    })
  }
  //signature start 1
  const parentsSignaturePadRef = useRef()

  const ParentsGuardianSignaturePadComponent = () => {
    const ClearSignature = () => {
      parentsSignaturePadRef.current.clear()
    }

    const SaveSignature = () => {
      const SignatureDataURL = parentsSignaturePadRef.current.toDataURL()
      setParents_or_guardian_signature(SignatureDataURL)
      console.log(Parents_or_guardian_signature)
    }

    return (
      <div className='signature-container'>
        <SignaturePad
          ref={parentsSignaturePadRef}
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

        {Parents_or_guardian_signature && (
          <div>
            <h2>Signature Preview:</h2>
            <img src={Parents_or_guardian_signature} alt='signature Preview' />
          </div>
        )}
      </div>
    )
  }
  //signature end 1

  //signature start 2
  const HeadMasterSignaturePadRef = useRef()

  const HeadMaterSignaturePadComponent = () => {
    const ClearSignature = () => {
      HeadMasterSignaturePadRef.current.clear()
    }

    const SaveSignature = () => {
      const SignatureDataURL = HeadMasterSignaturePadRef.current.toDataURL()
      setHeadmasterssignature(SignatureDataURL)
      console.log(headmaster_Signature)
    }

    return (
      <div className='signature-container'>
        <SignaturePad
          ref={HeadMasterSignaturePadRef}
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

        {headmaster_Signature && (
          <div>
            <h2>Signature Preview:</h2>
            <img src={headmaster_Signature} alt='signature Preview' />
          </div>
        )}
      </div>
    )
  }
  //signature end 1

  return (
    <section className='section1'>
      <p>{errMsg}</p>
      <div className='registeration_form'>
        <div className='division001'>
          <h1 className='bold'>Trinity Christian Mission School</h1>
          <h3>P.O.BOX 229,NSOATRE,BONO-GHANA</h3>
          <h4>Student Registeration Form</h4>
        </div>
      </div>
      <form onSubmit={handleSubmmit}>
        {/* DETAILS OF PUPIL */}
        <div className='div1'>
          <h1 className='header2'> DETAILS OF PUPIL</h1>
          <br />
          <label htmlFor='photo'>Upload Image :</label>
          <input type='file' id='photo' name='avatar' ref={fileInputRef} />
          <br />
          <br />
          <label htmlFor='firstname'>Firstname :</label>
          <input
            className='Input'
            type='text'
            id='firstname'
            placeholder='Student firstName'
            value={firstname}
            required
            onChange={(e) => setFirstname(e.target.value)}
          />
          <br />
          <label htmlFor='Surname'>Surname :</label>
          <input
            className='Input'
            type='text'
            id='Surname'
            placeholder='Student Surname'
            value={Surname}
            required
            onChange={(e) => setSurname(e.target.value)}
          />
          <br />
          <label htmlFor='Gender'>Gender :</label>
          <input
            className='Input'
            type='text'
            id='Gender'
            placeholder='Gender'
            value={Gender}
            required
            onChange={(e) => setGender(e.target.value)}
          />
          <br />
          <label htmlFor='Date_Of_Birth'>Date Of Birth(Month Day Year) :</label>
          <input
            className='Input'
            type='Date'
            id='Date_Of_Birth'
            placeholder='Date_Of_Birth'
            value={Date_Of_Birth}
            required
            onChange={(e) => setDate_Of_Birth(e.target.value)}
          />
          <br />
          <label htmlFor='Place_Of_Birth'>Place Of Birth :</label>
          <input
            className='Input'
            type='text'
            id='Place_Of_Birth'
            placeholder='Place_Of_Birth'
            value={Place_Of_Birth}
            required
            onChange={(e) => setplace_Of_Birth(e.target.value)}
          />
          <br />
          <label htmlFor='Mother_Tongue'>Mother Tongue :</label>
          <input
            className='Input'
            type='text'
            id='Mother_Tongue'
            placeholder='Mother_Tongue'
            value={Mother_Tongue}
            required
            onChange={(e) => setMother_Tongue(e.target.value)}
          />
          <br />
          <label htmlFor='Religion_And_Denomination'>
            Religion & Denomination:
          </label>
          <input
            className='Input'
            type='text'
            id='Religion_And_Denomination'
            placeholder='Religion_And_Denomination'
            value={Religion_And_Denomination}
            required
            onChange={(e) => setReligion_And_Denomination(e.target.value)}
          />
          <br />
          <label htmlFor='Ghanaian_Language_Spoken'>
            Ghanaian Language(s) Spoken:
          </label>
          <input
            className='Input'
            id='Ghanaian_Language_Spoken'
            type='text'
            placeholder='Ghanaian_Language_Spoken'
            value={Ghanaian_Language_Spoken}
            required
            onChange={(e) => setGhanaian_Language_Spoken(e.target.value)}
          />
          <br />
          <label htmlFor='Home_Town'>Home Town:</label>
          <input
            className='Input'
            type='text'
            id='Home_Town'
            placeholder='Home_Town'
            value={Home_Town}
            required
            onChange={(e) => setHome_Town(e.target.value)}
          />
          <br />
          <label htmlFor='Nationality'>Nationality:</label>
          <input
            className='Input'
            type='text'
            id='Nationality'
            placeholder='Nationality'
            value={Nationality}
            required
            onChange={(e) => setNationality(e.target.value)}
          />
          <br />
          <label htmlFor='Region'>Region:</label>
          <input
            className='Input'
            type='text'
            id='Region'
            placeholder='Region'
            value={Region}
            required
            onChange={(e) => setRegion(e.target.value)}
          />
          <br />
          <label htmlFor='Year_In_Which_Admission_Is_Sought'>
            Year In Which Admission Is Sought:
          </label>
          <input
            className='Input'
            type='number'
            id='Year_In_Which_Admission_Is_Sought'
            placeholder='Year_In_Which_Admission_Is_Sought'
            value={Year_In_Which_Admission_Is_Sought}
            required
            onChange={(e) =>
              setYear_In_Which_Admission_Is_Sought(e.target.value)
            }
          />
        </div>
        <br />
        <br />
        {/* Previouse School Attended */}
        <div className='div2'>
          <h1 className='header2'>Previouse School Attended :</h1>
          <br />
          <label htmlFor='Name_Of_School'>Name Of School:</label>
          <br />
          <input
            className='Input'
            type='text'
            id='Name_Of_School'
            placeholder='Name_Of_School'
            value={Name_Of_School}
            required
            onChange={(e) => setName_Of_School(e.target.value)}
          />
          <br />
          <label htmlFor='Admittion_details'>Admission Details :</label>
          <br />
          <textarea
            type='text'
            className='textareas'
            id='Admittion_details'
            placeholder='Admittion_details'
            value={Admittion_details}
            required
            onChange={(e) => setAdmittion_details(e.target.value)}
          />
          <br />
          <label htmlFor='Last_Attendance_Date'>
            Last Attendance Date(mm-dd-yyyy):
          </label>
          <br />
          <input
            className='Input'
            type='date'
            id='Last_Attendance_Date'
            placeholder='Last_Attendance_Date'
            value={Last_Attendance_Date}
            required
            onChange={(e) => setLast_Attendance_Date(e.target.value)}
          />
          <br />
          <label htmlFor='How_Did_You_Hear_About_Trinity_Christian_Mission_School'>
            How Did You Hear About Trinity Christian Mission School? :
          </label>
          <br />
          <textarea
            className='textareas'
            type='text'
            id='How_Did_You_Hear_About_Trinity_Christian_Mission_School'
            placeholder='How_Did_You_Hear_About_Trinity_Christian_Mission_School'
            value={How_Did_You_Hear_About_Trinity_Christian_Mission_School}
            required
            onChange={(e) =>
              setHow_Did_You_Hear_About_Trinity_Christian_Mission_School(
                e.target.value
              )
            }
          />

          <br />
          <label htmlFor='What_Are_Your_Reasons_For_Leaving_Your_Previous_School'>
            What are Your Reasons For Leaving Your Previouse School? :
          </label>
          <br />
          <textarea
            className='textareas'
            type='text'
            id='What_Are_Your_Reasons_For_Leaving_Your_Previous_School'
            placeholder='What_Are_Your_Reasons_For_Leaving_Your_Previous_School'
            value={What_Are_Your_Reasons_For_Leaving_Your_Previous_School}
            required
            onChange={(e) =>
              setWhat_Are_Your_Reasons_For_Leaving_Your_Previous_School(
                e.target.value
              )
            }
          />
        </div>
        <br />
        <br />
        {/* Other Significant Data */}
        <div className='secondDiv'>
          <h1 className='header2'>Other Significant Data :</h1>
          <br />
          <br />

          <h2>Child Lives With? :</h2>

          <label htmlFor='Both_Parents' className='checklabel'>
            Both Parents:
          </label>
          <input
            type='checkbox'
            className='check'
            id='Both_Parents'
            checked={Both_Parents}
            onChange={() => setBoth_Parents(!Both_Parents)}
          />

          <label htmlFor='Mother' className='checklabel'>
            Mother:
          </label>
          <input
            className='check'
            type='checkbox'
            id='Mother'
            checked={Mother}
            onChange={() => setMother(!Mother)}
          />

          <label htmlFor='Father' className='checklabel'>
            Father:
          </label>
          <input
            className='check'
            type='checkbox'
            id='Father'
            checked={Father}
            onChange={() => setFather(!Father)}
          />

          <label htmlFor='Other_Person' className='checklabel'>
            Other Person:
          </label>
          <input
            className='check'
            type='checkbox'
            id='Other_Person'
            checked={Other_Person}
            onChange={() => setOther_Person(!Other_Person)}
          />

          <label htmlFor='Guardian' className='checklabel'>
            Guardian:
          </label>
          <input
            className='check'
            type='checkbox'
            id='Guardian'
            checked={Guardian}
            onChange={() => setGuardian(!Guardian)}
          />
          <br />
          <br />
          <br />
          <br />
          <h2>Number Of Other Children Living In The House</h2>
          <label htmlFor='Older_Children'>Older Children: </label>

          <input
            className='Number1'
            type='number'
            id='Older_Children'
            placeholder='Older_Children'
            value={Older_Children}
            onChange={(e) => setOlder_Children(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Younger_Children'>Younger Children: </label>
          <input
            className='Number1'
            type='number'
            id='Younger_Children'
            placeholder='Younger_Children'
            value={Younger_Children}
            onChange={(e) => setYounger_Children(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Details_Of_Persons_Relationship_To_The_Child_Living_with'>
            If Child Lives With Other Person,Please Give Details Of That Person
            To The Child :
          </label>
          <br />
          <input
            className='Input'
            type='text'
            id='Details_Of_Persons_Relationship_To_The_Child_Living_with'
            name='Details_Of_Persons_Relationship_To_The_Child_Living_with'
            placeholder='Details_Of_Persons_Relationship_To_The_Child_Living_with'
            value={Details_Of_Persons_Relationship_To_The_Child_Living_with}
            onChange={(e) =>
              setDetails_Of_Persons_Relationship_To_The_Child_Living_with(
                e.target.value
              )
            }
          />
        </div>

        <br />
        <br />
        <div className='div3'>
          <h1 className='header2'>Details Of Father </h1>
          <br />
          <label className='fathers_Firstname'>
            Father's Name (Title/First Names) :
          </label>
          <input
            type='text'
            required
            className='Input'
            placeholder='fathers_Firstname'
            value={fathers_Firstname}
            onChange={(e) => setfathers_Firstname(e.target.value)}
          />
          <br />
          <label className='fathers_surname'>Surname : </label>
          <input
            type='text'
            required
            className='Input'
            placeholder='fathers_surname'
            value={fathers_surname}
            onChange={(e) => setfathers_surname(e.target.value)}
          />
          <br />
          <label className='fathers_Occupation'>Occupation :</label>
          <input
            type='text'
            required
            className='Input'
            placeholder='fathers_Occupation'
            value={fathers_Occupation}
            onChange={(e) => setfathers_Occupation(e.target.value)}
          />
          <br />
          <label className='fathers_Nationality'>Nationality :</label>
          <input
            type='text'
            required
            className='Input'
            placeholder='fathers_Nationality'
            value={fathers_Nationality}
            onChange={(e) => setfathers_Nationality(e.target.value)}
          />
          <br />
          <label className='fathers_Education_level'>Education Level :</label>
          <input
            type='text'
            required
            className='Input'
            placeholder='fathers_Education_level'
            value={fathers_Education_level}
            onChange={(e) => setfathers_Education_level(e.target.value)}
          />
          <br />
          <label className='fathers_Religion'>Religion :</label>
          <input
            type='text'
            className='Input'
            placeholder='fathers_Religion'
            value={fathers_Religion}
            onChange={(e) => setfathers_Religion(e.target.value)}
          />
          <br />
          <label className='fathers_Name_And_Adress_Of_Place_Of_Work'>
            Name And Address Of Place Of Work(Direction) :
          </label>
          <br />
          <textarea
            type='text'
            required
            className='textareas'
            placeholder='fathers_Name_And_Adress_Of_Place_Of_Work'
            value={fathers_Name_And_Adress_Of_Place_Of_Work}
            onChange={(e) =>
              setfathers_Name_And_Adress_Of_Place_Of_Work(e.target.value)
            }
          />
          <br />
          <br />
          <label className='fathers_Home_Address'>
            Home Address(Direction) :
          </label>
          <br />
          <textarea
            type='text'
            required
            className='textareas'
            placeholder='fathers_Home_Address'
            value={fathers_Home_Address}
            onChange={(e) => setfathers_Home_Address(e.target.value)}
          />

          <br />
          <br />
          <h2>Tell Number</h2>
          <br />
          <label htmlFor='fathers_Tel_Number_Office'>Office :</label>
          <br />
          <input
            type='tel'
            id='fathers_Tel_Number_Office'
            placeholder='Office'
            value={fathers_Tel_Number_Office}
            onChange={(e) => setfathers_Tel_Number_Office(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='fathers_Tel_Number_Mobile'>Mobile :</label>
          <br />
          <input
            type='tel'
            id='fathers_Tel_Number_Mobile'
            placeholder='Mobile'
            value={fathers_Tel_Number_Mobile}
            onChange={(e) => setfathers_Tel_Number_Mobile(e.target.value)}
          />

          <br />
          <br />

          <label className='' htmlFor='fathers_Email_Address'>
            Fathers Email :
          </label>
          <br />
          <input
            className='Input'
            type='email'
            id='fathers_Email_Address'
            placeholder='email'
            value={fathers_Email_Address}
            onChange={(e) => setfathers_Email_Address(e.target.value)}
          />
          <br />
          <br />
          <label className='' htmlFor='fathers_Number_Of_Wifes'>
            Fathers Number Of Wifes :
          </label>
          <br />
          <input
            type='Number'
            className='Input'
            id='fathers_Number_Of_Wifes'
            placeholder='Number of wifes'
            value={fathers_Number_Of_Wifes}
            onChange={(e) => setfathers_Number_Of_Wifes(e.target.value)}
          />
          <br />
          <br />
          <label className='' htmlFor='fathers_If_Deceased_State_Date_Of_Death'>
            If deceased State Date Of Death(mm/dd/yyyy):
          </label>
          <br />
          <input
            type='Date'
            className='Input'
            id='fathers_If_Deceased_State_Date_Of_Death'
            value={fathers_If_Deceased_State_Date_Of_Death}
            onChange={(e) =>
              setfathers_If_Deceased_State_Date_Of_Death(e.target.value)
            }
          />
        </div>
        <br />
        <br />
        <br />
        <div className='div4'>
          <h1 className='header2'>Health Details</h1>
          <br />
          <h2>
            Please Tick The Diseases Against Which the Child Has Been Vaccinated
          </h2>
          <br />
          <label htmlFor='Smallpox'>Smallpox: </label>
          <input
            type='checkbox'
            className='check'
            id='Smallpox'
            value={Smallpox}
            onChange={() => setSmallpox(!Smallpox)}
          />
          &nbsp; &nbsp;
          <label htmlFor='Diptheria'>Diptheria: </label>
          <input
            type='checkbox'
            className='check'
            id='Diptheria'
            value={Diptheria}
            onChange={() => setDiptheria(!Diptheria)}
          />
          &nbsp;&nbsp;
          <label htmlFor='Whooping_Cou'>Whooping Cou: </label>
          <input
            type='checkbox'
            className='check'
            id='Whooping_Cou'
            value={Whooping_Cou}
            onChange={() => setWhooping_Cou(!Whooping_Cou)}
          />
          &nbsp;&nbsp;&nbsp;
          <label htmlFor='Teta'>Teta: </label>
          <input
            type='checkbox'
            className='check'
            id='Teta'
            value={Teta}
            onChange={() => setTeta(!Teta)}
          />
          &nbsp;&nbsp;
          <label htmlFor='Measles'>Measles: </label>
          <input
            type='checkbox'
            className='check'
            id='Measles'
            value={Measles}
            onChange={() => setMeasles(!Measles)}
          />
          <br />
          <label htmlFor='Polio'>Polio: </label>
          <input
            type='checkbox'
            className='check'
            id='Polio'
            value={Polio}
            onChange={() => setPolio(!Polio)}
          />
          &nbsp;&nbsp;&nbsp;
          <label htmlFor='Tuberculosis'>Tuberculosis: </label>
          <input
            type='checkbox'
            className='check'
            id='Tuberculosis'
            value={Tuberculosis}
            onChange={() => setTuberculosis(!Tuberculosis)}
          />
          <br />
          <br />
          <label htmlFor='Futher_details_About_the_Childs_Health'>
            Is There Anything You Would Like Us To Know About Your Childs
            Health?(Asthmatic,sickle cell condition.epilepsy):
          </label>
          <br />
          <textarea
            id='Futher_details_About_the_Childs_Health'
            typeof='Text'
            placeholder='Futher_details_About_the_Childs_Health'
            className='textareas'
            value={Futher_details_About_the_Childs_Health}
            onChange={(e) =>
              setFuther_details_About_the_Childs_Health(e.target.value)
            }
          />
          <br />
          <label htmlFor='In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done'>
            Incase Of Sudden Illness At School,Please Indicate What Should Be
            Done.:
          </label>
          <br />
          <input
            id='In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done'
            typeof='Text'
            placeholder='In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done'
            className='textareas'
            value={
              In_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done
            }
            onChange={(e) =>
              setIn_Case_Of_Sudden_Illness_At_School_Please_State_What_Should_Be_Done(
                e.target.value
              )
            }
          />
        </div>
        <br />
        <br />
        <br />
        <div>
          <h1 className='header2'>Details Of Mother</h1>
          <br />
          <br />
          <label className='Mother_Firstname'>
            Mother's Name (Title/First Names) :
          </label>
          <input
            type='text'
            required
            className='Input'
            placeholder='Mother_Firstname'
            value={Mother_Firstname}
            onChange={(e) => setMother_Firstname(e.target.value)}
          />
          <br />
          <label className='Mother_surname'>Surname : </label>
          <input
            type='text'
            required
            className='Input'
            placeholder='Mother_surname'
            value={Mother_surname}
            onChange={(e) => setMother_surname(e.target.value)}
          />
          <br />
          <label className='Mother_Occupation'>Occupation :</label>
          <input
            type='text'
            required
            className='Input'
            placeholder='Mother_Occupation'
            value={Mother_Occupation}
            onChange={(e) => setMother_Occupation(e.target.value)}
          />
          <br />
          <label className='Mother_Nationality'>Nationality :</label>
          <input
            type='text'
            required
            className='Input'
            placeholder='Mother_Nationality'
            value={Mother_Nationality}
            onChange={(e) => setMother_Nationality(e.target.value)}
          />
          <br />
          <label className='Mother_Education_level'>Education Level :</label>
          <input
            type='text'
            required
            className='Input'
            placeholder='Mother_Education_level'
            value={Mother_Education_level}
            onChange={(e) => setMother_Education_level(e.target.value)}
          />
          <br />
          <label className='Mother_Religion'>Religion :</label>
          <input
            type='text'
            className='Input'
            placeholder='Mother_Religion'
            value={Mother_Religion}
            onChange={(e) => setMother_Religion(e.target.value)}
          />
          <br />
          <label className='Mother_Name_And_Address_Of_Place_Of_Work'>
            Name And Address Of Place Of Work(Direction) :
          </label>
          <br />
          <textarea
            type='text'
            required
            className='textareas'
            placeholder='Mother_Name_And_Address_Of_Place_Of_Work'
            value={Mother_Name_And_Address_Of_Place_Of_Work}
            onChange={(e) =>
              setMother_Name_And_Address_Of_Place_Of_Work(e.target.value)
            }
          />
          <br />
          <br />
          <label className='Mother_Home_Adress'>
            Home Address(Direction) :
          </label>
          <br />
          <textarea
            type='text'
            required
            className='textareas'
            placeholder='Mother_Home_Adress'
            value={Mother_Home_Adress}
            onChange={(e) => setMother_Home_Adress(e.target.value)}
          />

          <br />
          <br />
          <h2>Tell Number</h2>
          <br />
          <label htmlFor='Mother_Tel_Number_Office'>Office :</label>
          <br />
          <input
            type='tel'
            id='Mother_Tel_Number_Office'
            placeholder='Office'
            value={Mother_Tel_Number_Office}
            onChange={(e) => setMother_Tel_Number_Office(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Mother_Tel_Number_Mobile'>Mobile :</label>
          <br />
          <input
            type='tel'
            id='Mother_Tel_Number_Mobile'
            placeholder='Mobile'
            value={Mother_Tel_Number_Mobile}
            onChange={(e) => setMother_Tel_Number_Mobile(e.target.value)}
          />

          <br />
          <br />

          <label className='' htmlFor='Mother_Email_Address'>
            Mother's Email :
          </label>
          <br />
          <input
            className='Input'
            type='email'
            id='Mother_Email_Address'
            placeholder='email'
            value={Mother_Email_Address}
            onChange={(e) => setMother_Email_Address(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor='Mother_If_Deceased_State_Date_Of_Death'>
            If deceased State Date Of Death(mm/dd/yyyy):
          </label>
          <br />
          <input
            type='Date'
            className='Input'
            id='Mother_If_Deceased_State_Date_Of_Death'
            value={Mother_If_Deceased_State_Date_Of_Death}
            onChange={(e) =>
              setMother_If_Deceased_State_Date_Of_Death(e.target.value)
            }
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <h1 className='header2'>Details Of Guardian</h1>
          <br />
          <br />
          <br />
          <label className='Guardian_Firstname'>
            Guardian Name (Title/First Names) :
          </label>
          <input
            type='text'
            className='Input'
            placeholder='Guardian_Firstname'
            value={Guardian_Firstname}
            onChange={(e) => setGuardian_Firstname(e.target.value)}
          />
          <br />
          <label className='Guardian_surname'>Surname : </label>
          <input
            type='text'
            className='Input'
            placeholder='Guardian_surname'
            value={Guardian_surname}
            onChange={(e) => setGuardian_surname(e.target.value)}
          />
          <br />
          <label className='Guardian_Occupation'>Occupation :</label>
          <input
            type='text'
            className='Input'
            placeholder='Guardian_Occupation'
            value={Guardian_Occupation}
            onChange={(e) => setGuardian_Occupation(e.target.value)}
          />
          <br />
          <label className='Guardian_Nationality'>Nationality :</label>
          <input
            type='text'
            className='Input'
            placeholder='Guardian_Nationality'
            value={Guardian_Nationality}
            onChange={(e) => setGuardian_Nationality(e.target.value)}
          />
          <br />
          <label className='Guardian_Education_level'>Education Level :</label>
          <input
            type='text'
            className='Input'
            placeholder='Guardian_Education_level'
            value={Guardian_Education_level}
            onChange={(e) => setGuardian_Education_level(e.target.value)}
          />
          <br />
          <label className='Guardian_Religion'>Religion :</label>
          <input
            type='text'
            className='Input'
            placeholder='Guardian_Religion'
            value={Guardian_Religion}
            onChange={(e) => setGuardian_Religion(e.target.value)}
          />
          <br />
          <label className='Guardian_Name_And_Address_Of_Place_Of_Work'>
            Name And Address Of Place Of Work(Direction) :
          </label>
          <br />
          <textarea
            type='text'
            className='textareas'
            placeholder='Guardian_Name_And_Address_Of_Place_Of_Work'
            value={Guardian_Name_And_Address_Of_Place_Of_Work}
            onChange={(e) =>
              setGuardian_Name_And_Address_Of_Place_Of_Work(e.target.value)
            }
          />
          <br />
          <br />
          <label className='Guardian_Home_Address'>
            Home Address(Direction) :
          </label>
          <br />
          <textarea
            type='text'
            className='textareas'
            placeholder='Guardian_Home_Address'
            value={Guardian_Home_Address}
            onChange={(e) => setGuardian_Home_Address(e.target.value)}
          />

          <br />
          <br />
          <h2>Tell Number</h2>
          <br />
          <label htmlFor='Guardian_Tel_Number_Office'>Office :</label>
          <br />
          <input
            type='tel'
            id='Guardian_Tel_Number_Office'
            placeholder='Office'
            value={Guardian_Tel_Number_Office}
            onChange={(e) => setGuardian_Tel_Number_Office(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Guardian_Tel_Number_Mobile'>Mobile:</label>
          <br />
          <input
            type='tel'
            id='Guardian_Tel_Number_Mobile'
            placeholder='Mobile'
            value={Guardian_Tel_Number_Mobile}
            onChange={(e) => setGuardian_Tel_Number_Mobile(e.target.value)}
          />
          <br />
          <br />

          <label className='' htmlFor='Guardian_Email_Address'>
            Email :
          </label>
          <br />
          <input
            className='Input'
            type='email'
            id='Guardian_Email_Address'
            placeholder='email'
            value={Guardian_Email_Address}
            onChange={(e) => setGuardian_Email_Address(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Guardian_Number_Of_Wifes'>Number Of Wifes</label>
          <br />
          <input
            type='number'
            className='Input'
            placeholder='Guardian_Number_Of_Wifes'
            id='Guardian_Number_Of_Wifes'
            value={Guardian_Number_Of_Wifes}
            onChange={(e) => setGuardian_Number_Of_Wifes(e.target.value)}
          />
        </div>
        <br />
        <br />
        <br />

        <div>
          <h1 className='header2'>Confirmation</h1>
          <br />
          <h2>
            I confirm that,to the best of my knowledge,the information supplied
            on this form is accurate and i agree to abide by the school/s Rules
            and Regulations.
          </h2>
          <br />
          <h2 className='bold'>Parents/Guardian/Mother Signature</h2>
          <br />
          <h3 className='sign'>signed</h3>
          <ParentsGuardianSignaturePadComponent />
          <br />

          <br />
          <label htmlFor='signed_By'>Signed By:</label>
          <input
            id='signed_By'
            className='Input'
            type='string'
            placeholder='signed_By'
            value={ParentsignedBy}
            onChange={(e) => setParentSignedBy(e.target.value)}
          />
        </div>

        <br />
        <br />
        <br />
        <div>
          <h1 className='header10'>For office use Only</h1>
          <br />
          <label htmlFor='correspondence_No'>Corespondence No: </label>
          <input
            type='number'
            disabled
            id='correspondence_No'
            value={correspondence_No}
            onChange={(e) => setcorrespondence_No(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Admission'>Admission:</label>
          <input
            type='Number'
            id='Admission'
            disabled
            value={Admission}
            onChange={(e) => setAdmission(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Date_For_Receipt_Of_Admission_Form '>
            Date for receipt of Admission
          </label>
          <input
            type='date'
            id='Date_For_Receipt_Of_Admission_Form'
            value={Date_For_Receipt_Of_Admission_Form}
            onChange={(e) =>
              setDate_For_Receipt_Of_Admission_Form(e.target.value)
            }
          />
          <br />
          <br />
          <br />
          <h1 className='bold'>Documents Received And Inspected</h1>
          <br />
          <h1 className='bold'>Inspected</h1>
          <label htmlFor='Birth_CertificateI'>Birthday Cetificate :</label>
          <input
            type='checkbox'
            id='Birth_CertificateI'
            className='check'
            value={Birth_CertificateI}
            onChange={() => setBirth_CertificateI(!Birth_CertificateI)}
          />
          <br />
          <label htmlFor='Health_CertificateI'>Health Cetificate :</label>
          <input
            type='checkbox'
            id='Health_CertificateI'
            className='check'
            value={Health_CertificateI}
            onChange={() => setHealth_CertificateI(!Health_CertificateI)}
          />
          <br />
          <label htmlFor='Two_Passport_Size_PhotographsI'>
            Two Passport Size Photographs :
          </label>
          <input
            type='checkbox'
            id='Two_Passport_Size_PhotographsI'
            className='check'
            value={Two_Passport_Size_PhotographsI}
            onChange={() =>
              setTwo_Passport_Size_PhotographsI(!Two_Passport_Size_PhotographsI)
            }
          />
          <br />
          <label htmlFor='Returned_Signed_Declaration_FormsI'>
            Returned Signed Declaration Forms :
          </label>
          <input
            type='checkbox'
            id='Returned_Signed_Declaration_FormsI'
            className='check'
            value={Returned_Signed_Declaration_FormsI}
            onChange={() =>
              setReturned_Signed_Declaration_FormsI(
                !Returned_Signed_Declaration_FormsI
              )
            }
          />
          <br />
          <br />
          <br />
          <br />
          <h2 className='bold'>Copy Retained</h2>
          <br />
          <label htmlFor='Birth_CertificateC'>Birthday Certificate</label>
          <input
            id='Birth_CertificateC'
            type='checkbox'
            className='check'
            value={Birth_CertificateC}
            onChange={() => setBirth_CertificateC(!Birth_CertificateC)}
          />
          <br />
          <label htmlFor='Health_CertificateC'>Health Certificate</label>
          <input
            id='Health_CertificateC'
            type='checkbox'
            className='check'
            value={Health_CertificateC}
            onChange={() => setHealth_CertificateC(!Health_CertificateC)}
          />
          <br />
          <label htmlFor='Two_Passport_Size_PhotographsC'>
            Two passport Sized Photographs
          </label>
          <input
            id='Two_Passport_Size_PhotographsC'
            type='checkbox'
            className='check'
            value={Two_Passport_Size_PhotographsC}
            onChange={() =>
              setTwo_Passport_Size_PhotographsC(!Two_Passport_Size_PhotographsC)
            }
          />
          <br />
          <label htmlFor='Returned_Signed_Declaration_FormsC'>
            Returned Signed Declaration Forms
          </label>
          <input
            id='Returned_Signed_Declaration_FormsC'
            type='checkbox'
            className='check'
            value={Returned_Signed_Declaration_FormsC}
            onChange={() =>
              setReturned_Signed_Declaration_FormsC(
                !Returned_Signed_Declaration_FormsC
              )
            }
          />
          <br />
          <br />
          <br />
          <h2 className='bold'>Head Teachers Signature</h2>
          <h3 className='sign'>signed</h3>
          <HeadMaterSignaturePadComponent />
          <br />
          <label htmlFor='signed_By'>Signed By:</label>
          <input
            id='signed_By'
            className='Input'
            type='string'
            placeholder='signed_By'
            value={head_Teacher_signed_by}
            onChange={(e) => sethead_Teacher_signed_by(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor='Comment'>Comment(Ofice Use Only)</label>
          <br />
          <textarea
            id='Comment'
            type='String'
            className='textareas'
            placeholder='Comment'
            value={Comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button className='btn'>submit </button>
      </form>
    </section>
  )
}
export default RegisterStudent
