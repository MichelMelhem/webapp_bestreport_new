export { Layout }

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main>{children}</main>
        </>
    )
}