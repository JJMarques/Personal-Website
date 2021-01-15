import Link from 'next/link'

export default function Page404() {
    return(
        <div style={{ 
            minHeight: '100vh', 
            background: 'rgb(230, 78, 78)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px'
        }}>
        <h1 style={{ 
            color: 'rgb(255, 255, 255)', 
            fontWeight: '200',
            textAlign: 'center' 
        }}>
            <span style={{ fontWeight: '600' }}>It's a 404! </span> 
            This page does not exist. 🎃
        </h1>
        <Link href="/"><a style={{ marginTop: '3em', color: 'white', fontSize: '1.2em' }}>Return to the home page</a></Link>
        </div>
    )
}