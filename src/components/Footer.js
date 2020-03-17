import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import daiIcon from '@iconify/icons-cryptocurrency/dai';

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                {/*<li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>*/}
                <li><a href="https://github.com/NeverMindTheBlockchain" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
              {/*<li><a href="#" className="icon alt"><span><Icon icon={daiIcon}/></span></a></li>*/}
                {/*<li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>*/}
            </ul>
            <ul className="copyright">
                <li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
            </ul>


        </div>
    </footer>
)

export default Footer
