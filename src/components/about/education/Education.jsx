

import React from 'react'
import './education.css'

const Education = () => {
  return (
    <table className="ed__table w-100">
        <thead>
            <tr>
                <th>Degree</th>
                <th>Department</th>
                <th>Institute</th>
                <th>Year</th>
            </tr>
        </thead>

        <tbody>

            <tr>
                <td>Engineering</td>
                <td>CS and Stat</td>
                <td>UC Berkeley</td>
                <td>2020 - Present</td>
            </tr>

            <tr>
                <td>Seniors</td>
                <td>Couputational Chemistry</td>
                <td>Columbia Grad College</td>
                <td>2018 - 2020</td>
            </tr>

            <tr>
                <td>Junior High</td>
                <td>General</td>
                <td>St. Augastine pre school</td>
                <td>2008 - 2018</td>
            </tr>

        </tbody>
    </table>
  )
}

export default Education