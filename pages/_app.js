import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
    
    return ( 
        <div>
            <Component {...pageProps} />
        </div>
    )
}