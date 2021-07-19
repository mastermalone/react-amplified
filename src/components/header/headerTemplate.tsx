import { HeaderProps } from ".";


const HeaderTemplate = ({ headerLinks, setThemeValue, theme }: HeaderProps) => (
  <>
    <div className="header-wrap">
      <nav>
        <ul>
          {headerLinks && headerLinks.map((link, idx) => (
            <li key={`link${idx}`}><a href={link.link}>{link.text}</a></li>
          ))}
        </ul>
      </nav>
      <div>
        <button onClick={setThemeValue}>Theme {(theme === 'light') ? (<span>🌞</span>) : <span>🌙</span>}</button>
        <div>Value {theme}: {(theme === 'light') ? (<span>🌞</span>) : <span>🌙</span>}</div>
      </div>
    </div>

  </>
);

export default HeaderTemplate;