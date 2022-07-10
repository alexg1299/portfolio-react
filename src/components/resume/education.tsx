import React from 'react'
import Badge from 'react-bootstrap/Badge'
import EducationProps from '../../models/education'

export const Education: React.FC<EducationProps> = props => (
    <React.Fragment>
        <Badge variant="dark" className="badge float-right bg-medium">
            {props.graduationDate}
        </Badge>
        <h5>
            {props.schoolName} -{' '}
            <span className="font-weight-normal">{props.gpa}</span>
        </h5>
        <p className="font-weight-light">{props.degreeDetails}</p>
    </React.Fragment>
)

export default Education
