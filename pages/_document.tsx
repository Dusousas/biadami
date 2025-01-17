import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title className="">Biadami.ART - Artista</title>
        <meta name="description" content="Descrição da página para SEO." />
        <meta name="keywords" content="arte, artista, pinturas, quadros, Biadami.ART, Bia adami" />
        <meta name="author" content="Nome do Artista" />
        <meta property="og:title" content="Título da Página - Nome do Artista" />
        <meta property="og:description" content="Descrição da página para SEO." />
        <meta property="og:image" content="/caminho/para/imagem.jpg" />
        <meta property="og:url" content="https://www.seusite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      </Head>


      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
