import {ReactComponent as GithubIcon} from 'assets/img/github.svg'
import 'components/NavBar/styles.css';

function NavBar() {
    return(
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/NickArthur3004">
            <div className="dsmovie-contact-container">
              <GithubIcon/>
              <p className="dsmovie-contact-link">/NickArthur3004</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}

export default NavBar;