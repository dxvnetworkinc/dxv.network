import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map((social) => {
          const { icon, name, url } = social;
          return (
            <li>
              <a
                href={url}
                class={`icon ${icon}`}
                target="_blank"
                alt={name}
                rel="noreferrer"
              >
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; {config.copyText}</li>
        <li>
          <a href={config.terms_of_service} target="_blank" rel="noreferrer">
            Legal Terms
          </a>
        </li>
      </ul>
    </footer>
  );
}
