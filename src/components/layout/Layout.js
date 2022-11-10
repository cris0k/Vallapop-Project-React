import Header from '../layout/Header'

const Layout = ({ children, title, ...props}) => <div>
    <Header {...props}/>
    <main>
        <h1>{title}</h1>
        <section>{children}</section>
    </main>
    <footer>@ 2022 Cristina Kukhar KeepCoding React Project</footer>
</div>

export default Layout