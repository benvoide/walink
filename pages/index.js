import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/logo.svg'
import Router , {useRouter}  from 'next/router';

export default function Home() {
  const router = useRouter();
  const submitContact = async (event) => {
    event.preventDefault();
    let
      phone = event.target.phone.value;
      phone = phone.replace(/\D/g,'');
    const
      base = 'https://wa.me/',
      phoneRegex = /^[a-zA-Z0-9\-().\s]{10,15}$/;
    if(phone.match(phoneRegex)) {
      router.push( base + phone );
    } else {
      alert( 'El número ingresado es inválido.' );
    }
  };

  return (
    <div className='main'>
      <Head>
        <title>📨 Walink - Enviá mensajes de WhatsApp a contactos no agendados</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.14.1/css/uikit.min.css" integrity="sha512-E7TS+FaMV/M8JmF1DwrR0eQD2y3atLg7GFAYVlqVNLOUeupX50u07vN8DqKXdSEXlePsrO+pb/HhuHzJCsaByw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="icon" href="/favicon.png" />

        <meta property="og:image" content="https://i.imgur.com/Gu79iBp.png"/>
        <meta property="og:title" content="Walink"/>
        <meta property="og:description" content="Enviá mensajes através de WhatsApp a contactos no agendados."/>
        <meta property="og:image:width" content="1280"/>
        <meta property="og:image:height" content="720"/>
      </Head>
      <main className='uk-container uk-container-small uk-flex uk-flex-center uk-flex-middle uk-height-1-1'>
        <div className='uk-flex uk-flex-center uk-flex-column uk-flex-middle uk-width-1-1'>
          <div>
            <div><Image alt="Walink logo" src={logo} /></div>
          </div>
          <div className='uk-width-1-1'>
            <form className='uk-flex uk-flex-center' onSubmit={submitContact}>
              <input
                className='uk-input uk-border-rounded uk-width-1-1'
                id='phone'
                name='phone'
                type='text'
                placeholder='📱 Ingresá el número de WhatsApp...'
                required
              />
              <button className='uk-button uk-button-default uk-margin-left uk-width-1-3 uk-margin-top' type='submit'>Enviar</button>
            </form>
          </div>
          <div className='uk-margin-top'>
            Enviá mensajes a través de WhatsApp a contactos no agendados.
          </div>
        </div>
      </main>
      <footer className='uk-flex uk-flex-center uk-flex-middle uk-margin-auto-top uk-padding-small'>
        <a href="https://benvoide.xyz">
          benvoide.xyz
        </a>
      </footer>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.14.1/js/uikit.min.js" strategy="beforeInteractive" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5WSE22ZS9K"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5WSE22ZS9K');
        `}
      </Script>
    </div>
  )
}
