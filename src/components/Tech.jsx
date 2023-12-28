// Tech.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faVuejs, faPython, faHtml5, faCss3, faBootstrap } from "@fortawesome/free-brands-svg-icons";

function Tech({ theme }) {
    const iconStyle = {
        margin: '43px',
        transition: 'all 0.3s ease',
    };

    const iconHover = {
        transform: 'scale(1.1)',
        boxShadow: theme === 'light' ? '0 0 10px rgba(240, 240, 240, 0.6)' : '0 0 10px rgba(0, 0, 0, 0.6)',
    };

    return (
        <div className="text-center mt-8 md:mt-16">
            <div className="flex flex-wrap justify-center md:justify-between">
                <FontAwesomeIcon
                    icon={faJs}
                    size="3x"
                    className="text-yellow-400 rounded-lg p-2 cursor-pointer hover:bg-yellow-100"
                    style={{ ...iconStyle, ...iconHover }}
                />
                <FontAwesomeIcon
                    icon={faReact}
                    size="3x"
                    className="text-blue-400 rounded-lg p-2 cursor-pointer hover:bg-blue-100"
                    style={{ ...iconStyle, ...iconHover }}
                />
                <FontAwesomeIcon
                    icon={faVuejs}
                    size="3x"
                    className="text-green-400 rounded-lg p-2 cursor-pointer hover:bg-green-100"
                    style={{ ...iconStyle, ...iconHover }}
                />
                <FontAwesomeIcon
                    icon={faPython}
                    size="3x"
                    className="text-blue-500 rounded-lg p-2 cursor-pointer hover:bg-blue-100"
                    style={{ ...iconStyle, ...iconHover }}
                />
                <FontAwesomeIcon
                    icon={faHtml5}
                    size="3x"
                    className="text-orange-500 rounded-lg p-2 cursor-pointer hover:bg-orange-100"
                    style={{ ...iconStyle, ...iconHover }}
                />
                <FontAwesomeIcon
                    icon={faCss3}
                    size="3x"
                    className="text-blue-300 rounded-lg p-2 cursor-pointer hover:bg-blue-100"
                    style={{ ...iconStyle, ...iconHover }}
                />
                <FontAwesomeIcon
                    icon={faBootstrap}
                    size="3x"
                    className="text-purple-600 rounded-lg p-2 cursor-pointer hover:bg-purple-100"
                    style={{ ...iconStyle, ...iconHover }}
                />
            </div>
        </div>
    );
}

export default Tech;
