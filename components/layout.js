import Navigation from './navigation'

function Layout({children}) {

    return <div>
        <Navigation/>
        <main>
            {children}
        </main>
        <footer>
            design by cem
        </footer>
    </div>

}

export default Layout