import Header from '../layout/Header'

const Layout = ({ children, title}) => <div>
    <Header/>
    <main>
        <h2>{title}</h2>
        <section>{children}</section>
    </main>
    <footer>@ 2022 Cristina Kukhar KeepCoding React Project</footer>
</div>

export default Layout