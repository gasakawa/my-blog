import React from 'react';
import {
  FaNodeJs,
  FaJava,
  FaDocker,
  FaReact,
  FaAws,
  FaPhp,
  FaLinux,
  FaWindows,
  FaCss3Alt,
  FaWordpress,
  FaHtml5,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { GrGatsbyjs } from 'react-icons/gr';
import { FiFigma } from 'react-icons/fi';
import {
  SiKubernetes,
  SiMongodb,
  SiGooglecloud,
  SiIbm,
  SiTypescript,
  SiAdobephotoshop,
  SiAdobelightroomcc,
  SiAdobepremiere,
  SiAdobexd,
  SiAdobeindesign,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
} from 'react-icons/si';
import Image from 'next/image';

import {
  AboutWrapper,
  AboutDescription,
  AboutSkills,
  AboutIcons,
} from '../styles/pages/about';
import Seo from '../interfaces/seo';
import SEO from '../components/SEO';

const About = () => {
  const seo: Seo = {
    metaTitle: 'Sobre mim',
    metaDescription:
      'Saiba um pouco mais sobre o ser humano por trás deste blog.',
    article: false,
  };
  return (
    <>
      <SEO {...seo} />
      <AboutWrapper>
        <h1>Sobre mim</h1>
        <AboutDescription>
          Meu nome é Gabriel Asakawa, sou formado em Engenharia de Computação
          pela Universidad del Valle (Cali - Colombia).
          <br />
          <br />
          Meu primeiro contato com computação foi ainda no Colégio (1999), na
          aula de informática aprendiamos linguagem C. Na época não me
          interessava tanto, porque na verdade eu queria ser Médico, computação
          era minha segunda opção. Mas o destino me levou a estudar computação e
          já se fazem mais de 16 anos brincando com máquinas.
          <br />
          <br />
          Hoje atúo como Tech Lead na empresa&nbsp;
          <a
            href='https://scalait.com/'
            target='_blank'
            rel='noopener noreferer'
          >
            Stefanini Scala
          </a>
          &nbsp;e já trabalhei em empresas como&nbsp;
          <a
            href='https://habber.com/'
            target='_blank'
            rel='noopener noreferer'
          >
            HabberTec
          </a>
          ,&nbsp;
          <a href='https://gft.com/' target='_blank' rel='noopener noreferer'>
            GFT
          </a>
          . Também sou co-fundador da{' '}
          <a
            href='https://ag7digital.com/'
            target='_blank'
            rel='noopener noreferer'
          >
            AG7 Digital Business
          </a>
          .
        </AboutDescription>
        <AboutSkills>
          <h2>Tenho experiência</h2>
          <AboutIcons>
            <span>
              <FaNodeJs />
              <p>NodeJs</p>
            </span>
            <span>
              <FaJava />
              <p>Java</p>
            </span>
            <span>
              <IoLogoJavascript />
              <p>Javascript</p>
            </span>
            <span>
              <GrGatsbyjs />
              <p>Gatsby</p>
            </span>
            <span>
              <FiFigma />
              <p>Figma</p>
            </span>
            <span>
              <SiKubernetes />
              <p>Kubernetes</p>
            </span>
            <span>
              <SiMongodb />
              <p>Mongodb</p>
            </span>
            <span>
              <FaDocker />
              <p>Docker</p>
            </span>
            <span>
              <FaReact />
              <p>React</p>
            </span>
            <span>
              <SiIbm />
              <p>IBM</p>
            </span>
            <span>
              <SiTypescript />
              <p>Typescript</p>
            </span>
            <span>
              <FaPhp />
              <p>PHP</p>
            </span>
            <span>
              <FaLinux />
              <p>Linux</p>
            </span>
            <span>
              <FaWindows />
              <p>Windows</p>
            </span>
            <span>
              <FaCss3Alt />
              <p>CSS</p>
            </span>
            <span>
              <FaHtml5 />
              <p>HTML</p>
            </span>
            <span>
              <FaWordpress />
              <p>Wordpress</p>
            </span>
            <span>
              <SiPostgresql />
              <p>PostgreSQL</p>
            </span>
            <span>
              <SiMicrosoftsqlserver />
              <p>SQL Server</p>
            </span>
            <span>
              <SiMysql />
              <p>MySQL</p>
            </span>
          </AboutIcons>
        </AboutSkills>
        <AboutSkills>
          <h2>Estou aprendendo</h2>
          <AboutIcons>
            <span>
              <FaAws />
              <p>AWS</p>
            </span>
            <span>
              <Image src='/nextjs-3.svg' width={32} height={32} />
              <p>NextJS</p>
            </span>
            <span>
              <SiGooglecloud />
              <p>Google Cloud</p>
            </span>
            <span>
              <SiAdobephotoshop />
              <p>Photoshop</p>
            </span>
            <span>
              <SiAdobelightroomcc />
              <p>Lightroom</p>
            </span>
            <span>
              <SiAdobeindesign />
              <p>InDesign</p>
            </span>
            <span>
              <SiAdobepremiere />
              <p>Premiere</p>
            </span>
            <span>
              <SiAdobexd />
              <p>XD</p>
            </span>
          </AboutIcons>
        </AboutSkills>
      </AboutWrapper>
    </>
  );
};

export default About;
