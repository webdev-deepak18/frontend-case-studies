import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/container'

export const metadata = {
  title: 'Deepak S | UI Engineer',
  description:
    'Designing and building clean, high-performance web experiences.',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main >
          <Container>


            {children}
      </Container>
            </main>
      <Footer />
    </body>
    </html >
  )
}
