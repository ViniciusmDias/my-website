'use client';

import Link from 'next/link';
import * as S from './styles'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export function Header() {

  return (
	  <S.Header>
		  <S.HeaderContent>
			  <S.Logo>
				<p>logo aqui</p>
			  </S.Logo>
			  <S.Menu>
				  <S.MenuItem>
					  <Link title='Go to home page' href="/">
						<h4>Home</h4>
					  </Link>
				  </S.MenuItem>
				  <S.MenuItem>
					  <Link title='Go to home page' href="/">
						<h4>Projects</h4>
					  </Link>
				  </S.MenuItem>
				  <S.MenuItem>
					  <Link title='Go to home page' href="/">
						<h4>Carrer</h4>
					  </Link>
				  </S.MenuItem>
				  <S.MenuItem>
					  <Link title='Go to home page' href="/">
						<h4>Home</h4>
					  </Link>
				  </S.MenuItem>
				  <S.MenuItem>
					  <Link title='Go to home page' href="/">
						<h4>Resume</h4>
					  </Link>
				  </S.MenuItem>
				  <S.MenuItem>
					  <Link title='Go to home page' href="/">
						<h4>Contact</h4>
					  </Link>
				  </S.MenuItem>
			  </S.Menu>
			  <S.SocialContent>
				<a	
					title="Go to vinicius dias github"
					href="https://github.com/ViniciusmDias"
				>
					<FaGithub />
				</a>
				<a
					title="Go to vinicius dias linkedin"
					href="https://www.linkedin.com/in/vinicius-m-dias/"
				>
					<FaLinkedin />
				</a>
				<a
					title="Go to vinicius dias instagram"
					href="https://www.instagram.com/diasvini10/"
				>
					<FaInstagram />
				</a>
			  </S.SocialContent>
		  </S.HeaderContent>
    </S.Header>
  );
}
