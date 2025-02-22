import './Navigation.scss';

export const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <a className="font_uppercase navigation__link" href="/">
          home
        </a>
      </li>
      <li>
        <a className="font_uppercase navigation__link" href="/">
          phones
        </a>
      </li>
      <li>
        <a className="font_uppercase navigation__link" href="/">
          tablets
        </a>
      </li>
      <li>
        <a className="font_uppercase navigation__link" href="/">
          accessories
        </a>
      </li>
    </ul>
  );
};
