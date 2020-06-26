import Link from 'next/link'

const arHeaderStyles = {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#ffffff',
    height: 30,
    width: 200,
    padding: 15,
    borderRadius: '0 0 10px 0',
    boxShadow: '3px 5px 3px rgba(0, 0, 0, 0.5)'

}

type ARLayoutProps = {
    children: React.ReactNode
}

const DesktopARLayout = (props: ARLayoutProps) => (
    <>
        <div style={arHeaderStyles}>
            <Link href="/">
                <a>{'<- Go Back'}</a>    
            </Link> 
        </div>
        {props.children}
        <style jsx global>{`
            body {
                margin: 0;
            }
        `}</style>
    </>
)

export default DesktopARLayout