import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithub,
    faTumblr,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Social from './../../models/social'

export const Socials: React.FC<{ list: Social[] }> = props => {
    const icons: { [key: string]: any } = {
        github: faGithub,
        tumblr: faTumblr,
        linkedin: faLinkedin,
        email: faEnvelope
    }

    return (
        <ul className="socials">
            {props.list.map((social: Social) => (
                <li key={social.service}>
                    <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        <span className="ico-circle">
                            <FontAwesomeIcon icon={icons[social.service]} />
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Socials
