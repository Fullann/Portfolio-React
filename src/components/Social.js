import React from "react";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaCodepen } from "react-icons/fa";
import config from '../config.js';

function Social() {
    return (
        <ul className="home-about-social-links">
            {config.social.github !== "" && (
                <li className="social-icons">
                    <a
                        href={config.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <AiFillGithub />
                    </a>
                </li>
            )}
            {config.social.twitter !== "" && (
                <li className="social-icons">
                    <a
                        href={config.social.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <AiOutlineTwitter />
                    </a>
                </li>
            )}
            {config.social.linkedin !== "" && (
                <li className="social-icons">
                    <a
                        href={config.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
            )}
            {config.social.instagram !== "" && (
                <li className="social-icons">
                    <a
                        href={config.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                    >
                        <AiFillInstagram />
                    </a>
                </li>
            )}
            {config.social.codepen !== "" && (
                <li className="social-icons">
                    <a
                        href={config.social.codepen}
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                    >
                        <FaCodepen />
                    </a>
                </li>
            )}
        </ul>
    )
}

export default Social;
