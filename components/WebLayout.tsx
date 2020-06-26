const webContainerStyles = {
    padding: 15,
}

type WebLayoutProps = {
    children: React.ReactNode
}

const WebLayout = (props: WebLayoutProps) => (
    <div style={webContainerStyles}>
        {props.children}
    </div>
)

export default WebLayout