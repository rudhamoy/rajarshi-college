import React from 'react'
import { Link } from 'react-router-dom'

const InstructionNew = () => {
    return (
        <div className="pb-4">
            <div className="mx-6 sm:mx-36 pt-4 text-left">
                <h1 className="text-2xl">INSTRUCTIONS FOR STUDENT REGISTRATION & APPLICATION</h1>
                <h2 className="font-semibold">*READ THIS PAGE CAREFULLY BEFORE FILLING UP ONLINE APPLICATION FORM. *</h2>
                <p>RCES accepts online Application through its website <Link to="/apply">www.rajarshicollege.co.in.</Link></p>
                <p>To make an application, a candidate must first register by clicking on <span className="font-bold">“Account”</span> then choosing <span className="font-bold"><Link to="/register">“Register”</Link></span>. </p>

                {/** REGISTRATION */}
                <div>
                <h1 className="text-2xl my-3">REGISTRATION</h1>
                
                <div>
                    <p>A candidate must type in the following information for registration:</p>
                    <p>1. NAME</p>
                    <p>2. PHONE NUMBER</p>
                    <p>3. E-MAIL ID</p>
                    <br />
                    <p>Once, the information has been provided in the respective fields, click “Register” button.</p>
                    <br />
                    <p>The candidate will receive an email with a verification link in the ID provided during registration. The candidate must click the hyperlink in order to verify the email and set the log in password. Following which, the student can log in to the application portal.</p>
                </div>
                </div>

                {/** APPLICATION */}
                <div>
                    <h1 className="text-2xl my-3">APPLICATION</h1>
                    <div>
                    <p>To make the application, student must follow the following steps:</p>
                    <br />
                    <p>1.Log in to the application portal using registered Email ID and Password by choosing “Log In” under “Accounts” tab in the top right of the home page.</p>
                    <p>2.Carefully fill up the form.</p>
                    <div>
                    <p>3.Upload clear pictures of the required documents at the end of the application form. </p>
                    <div className="ml-6">
                        <p>a.To upload, choose the picture.</p>
                        <p>b.Click “Upload”.</p>
                        <p>c.Once the bar turns green (Shows that the file has been uploaded) click submit.</p>
                    </div>
                    </div>
                    <p>4.Once the application has been submitted successfully, you will be re directed to a page that will confirm the submission with a message “Successfully Submitted”.</p>
                    </div>
                    {/** notes */}
                    <div>
                    <p className="font-bold">Note: In case, you have not appeared for XII exams in 2021 but were eligible to have appeared, choose “YES” for the question “Have you been considered to have appeared for Class XII Examination in 2021?” and you do not have to enter the marks obtained in the following page.
Else choose “YES”, if you have appeared for XII examination last year and enter the marks obtained.
</p>
                    </div>
                </div>

                {/** BANK DETAILS */}
                <div>
                    <h1 className="text-2xl my-3">BANK DETAILS</h1>
                    <div>
                        <p>NAME OF BANK: STATE BANK OF INDIA</p>
                        <p>BRANCH: TLA HOUSE BRANCH, COLNEL CHOWMUNI</p>
                        <p>ACCOUNT NO.: 036934176422</p>
                        <p>NAME: RAJARSHI WELFARE TRUST</p>
                        <p>IFSC CODE: SBIN0005559</p>
                        <p>BANK CODE: 05559</p>
                    </div>
                </div>

                {/** GENERAL INSTRUCTIONS */}
                <div>
                <h1 className="text-2xl my-3">GENERAL INSTRUCTIONS </h1>
                    <div>
                        <p>1.Applicant may download the prospectus from the website. In order to apply online, applicants may click on the Apply Now button in the menu bar and submit the application form with all relevant documents. </p>
                        <p>
                        2.	All kind of payment is to be made in the bank account mentioned below through SBI Bank Deposit Slip. Students are advised to retain one copy of original bank deposit Slip of all kind of payments made to the college account with them. Applicants shall have to produce the original deposit slip if college authority demands so.
                        </p>
                        <p className="font-bold">
                        3.	Payment once made shall not be refunded under any circumstances. If a student is leaving the program at any point of time and does not continue the academic activities in the college, he/she has to pay the total amount of fees mentioned for the whole academic year.
                        </p>
                        <p>4.In addition to the RCES Fees, Student is liable to pay University registration fee, exam fee and other fees as imposed by the Tripura University from time to time in addition to the fee mentioned in fee structure of Rajarshi College of Education and Skill.</p>
                        <p>5.If an applicant has appeared for XII Examination, the candidate must fill up the marks obtained section.
In case, the applying candidate was eligible but could not appear due to Pandemic, and is waiting for results to be declared, the candidate may leave the marks obtained section blank.
</p>
                        <p>6.A student can’t take an elective subject as a combination in all Degree Program in which he/she failed in H.S.(+2) examination.</p>
                        <p>7.Student has to submit their testimonial in original at the time of student’s counselling/at the time of admission.</p>
                        <p>8.Mark sheets may be verified by the college authority with the appropriate authority. The verification process might take time.</p>
                        <p>9.Application shall be summarily rejected, if payment is not made on time and or candidate uploads forged documents. For any technical error of bank or student, college authority shall not be liable.</p>
                        <p>10.To submit the application, applicants must agree with the declaration at the end of the application form by clicking on “YES” check box. It is important to note that, once applicants submit their application they cannot alter under any circumstances. Therefore, they are advised to be sure about the accuracy and relevance of the uploaded information before clicking the submit button.</p>
                        <p>
                        11.	College will not be responsible for any problem, technical or otherwise, during the process of and after filling up of the application form.
                        </p>
                        <p>12.Incomplete Admission Form in any respect will be rejected.</p>
                        <p>13.	Admission related information will be uploaded in the College website. Candidates must visit the website on a regular basis. The College shall not be liable if an applicant fails to comply with the schedule.</p>
                        <p>14.	At the time of counselling applicants shall be present physically and should bring all credentials/certificates in ORIGINAL.</p>
                        <p>15.	For any kind of dispute regarding admission related matters, the decision of the College Authority shall be final. In case of necessity (if any) College may seek decision of Tripura University.</p>
                        <p>16.All litigation regarding admission shall lie within the jurisdiction of the Tripura High Court of Tripura. • For further information, contact the College authority, <span className="font-bold">e-mail: contact@rajarshicollege.co.in</span></p>
                        <p>17.After receiving the Online Application for Admission from the student, the college authority will acknowledge the same and intimation shall be sent to the students concern by email/sms.</p>
                        <p>18.	In the same email/sms, date for submission of fees and amount of fees shall be mentioned. Student is advised to submit his /her said amount of fees on or before the mentioned date, otherwise his/her admission may be cancelled. Student may intimate college through email (contact@rajarshicollege.co.in) that he/she has submitted the requisite fees, mentioning the Bank challan number and a scanned copy of the challan.</p>
                        <p>19.	Once the appropriate amount of fees has been received by the college, after provisional formalities of admission, applicant will be intimated again. However, applicant is encouraged to communicate at any point of time with the college authority for any doubt or clarifications.</p>
                        <p>20.	Counselling date and place shall be notified in the website.</p>
                        <p>21.	After Counselling, procedure for formal Admission will be over for the Academic Session 2020-21 and applicant shall be declared as student of the college. And list of admitted students shall be notified on the College Notice Board as well as in the website of the college.</p>
                        <p>22.	All the norms and standards shall be imposed on students as and when shall be notified by the Tripura University for the colleges.</p>
                    </div>
                </div>

                {/** IMPORTANT INSTRUCTIONS */}
                <div>
                <h1 className="text-2xl my-3">IMPORTANT INSTRUCTIONS </h1>
                <div>
                    <p>1.Carefully read the general instructions, Prospectus and “Rules and Regulations of Credit Based Six-Semester Degree Programme of B.A./B.Sc. (General and Honours) (Effective from 2014-2015 Session)” of Tripura University.</p>
                    <p>2.	If a candidate is applying on his own, the candidate shall choose “Others” in the field “Help Desk” but if a candidate is applying through any Help Desk, candidate shall choose Help Desk name. Though not encouraged, but if a student is having difficulty in filling up the application form, they may visit directly with all documents to the Rajarshi College of Education & Skill, Lembucherra, Bagbari. College authority shall help the student to fill up and submit the online application form</p>
                    <p>3.	Rajarshi College of Educations and Skills have B.A-TDCH (BA Honours), B.A-TDC (Without Honours), B.Sc.-TDCH (BSc. Honours) and B.Sc.-TDC (Without Honours) programs. Applicant may choose any one of the Programme.</p>
                    <div>
                        <p>4.	The following programs are available in the College:</p>
                        <div>
                            <div>
                            <h2>B.A (PASS & HONS)</h2>
                            <p>ENGLISH <br/>
                                HISTORY <br/>
                                POLITICAL SCIENCE<br/>
                                EDUCATION <br/>
                                PHILOSOPHY
                </p>
                            </div>
                            <div>
                            <h2>B.Sc (PASS & HONS)</h2>
                            <p>MATHEMATICS <br/>
                            CHEMISTRY<br />
                            PHYSICS

                            </p>
                            </div>
                        </div>
                    </div>
                    <p>5.In the box Programme/Subject Choice 1, 2 & 3; Honours student will choose their First, Second and Third Honours choice. BA Pass student will Choose BA Pass in all the three choices. BSc Pass Students will choose BSc Pass in all the three fields.</p>
                    <p>6.	While filling up of online admission form, the reserved category applicant should choose their respective category (SC/ST/OBC). UR stands for UNRESERVED. If a reserved category applicant does not have reserved category certificate from the appropriate authority, he/she shall be treated as Unreserved. Reserved category applicant will be asked to submit his/her Category Certificate at the time of admission.</p>
                    <p>7.Write Aadhar Number accurately. Upload the Scanned Aadhar Card.</p>
                    <p>8.	In case, an applicant is employed, it should be declared in the relevant section in the application form.</p>
                    <p>9.	In case, an applicant is already pursuing any other courses from any other college/university by distance/classroom mode of education, it should be declared in the relevant section of the application form.</p>
                    <p>10.	Postal address should be carefully entered by the candidate as this will be the means of communication from the college.</p>
                    <p>11.	Mobile Number and e-mail id of the applicant are very important. All communications form the College to the applicant will be made either in Mobile or in e-mail id. Mobile Number must be valid and it should be of 10 digits.</p>
                    <p>12.	While writing Academic Records be sure you are writing as per your Mark sheets / Grade Cards. In case student has grade card, where marks are not mentioned, they must upload the grade table.</p>
                </div>
                </div>
            </div>
            <button className="px-6 py-3 rounded bg-blue-600 text-white">Apply Today</button>
        </div>
    )
}

export default InstructionNew
