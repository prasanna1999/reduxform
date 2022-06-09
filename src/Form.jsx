import React from "react";
import { storeUserDetails, clearUserDetails } from "./actions";
import { connect } from "react-redux";

const schoolsList = [
    { name: 'Banglore High School' },
    { name: 'Canadian International School' },
    { name: 'Chrysalis High School' },
    { name: 'Gitanjali International School' },
    { name: 'Jain Heritage School' },
    { name: 'National Public School' },
    { name: 'National Hill View Public School' },
    { name: 'Oakridge International School' }
]

const coursesList = [
    { name: 'Public Speaking' },
    { name: 'Western Vocals' },
    { name: 'Stop Motion Animation' },
    { name: 'Art of Story Telling' },
    { name: 'Sing Along' },
    { name: 'Photography' },
    { name: 'Art' },
]

function Form(props) {
    return (
        <form>
            <div>
                <label>Parent's Name</label>
                <input type="text" placeholder="Name" value={props.user.pname} onChange={(e) => props.storeUserDetails('pname', e.target.value)} />
            </div>
            <div>
                <label>Mobile Number</label>
                <input type="phone" placeholder="Phone" value={props.user.mobile} onChange={(e) => props.storeUserDetails('mobile', e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Email" value={props.user.email} onChange={(e) => props.storeUserDetails('email', e.target.value)} />
            </div>
            <div>
                <label>Child's Name</label>
                <input type="text" placeholder="Child's Name" value={props.user.cname} onChange={(e) => props.storeUserDetails('cname', e.target.value)} />
            </div>
            <div>
                <label>Child's Age</label>
                <input type="number" placeholder="Child's Age" value={props.user.cage} onChange={(e) => props.storeUserDetails('cage', e.target.value)} />
            </div>
            <div>
                <label>Child's School</label>
                <select name="cars" id="cars" value={props.user.schoolname} onChange={(e) => props.storeUserDetails('schoolname', e.target.value)} >
                    <option value="">Select One</option>
                    {schoolsList.map((school) => {
                        return <option value={school.name}>{school.name}</option>
                    })}
                </select>
            </div>
            <div>
                <label>Child's Preferred Course</label>
                <select name="cars" id="cars" value={props.user.courseName} onChange={(e) => props.storeUserDetails('courseName', e.target.value)} >
                    <option value="">Select One</option>
                    {coursesList.map((course) => {
                        return <option value={course.name}>{course.name}</option>
                    })}
                </select>
            </div>
            <button onClick={() => { console.log(props.user) }}>Submit</button>
            <button onClick={() => { props.clearUserDetails() }}>Reset</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        storeUserDetails: (key, value) => dispatch(storeUserDetails(key, value)),
        clearUserDetails: () => dispatch(clearUserDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)