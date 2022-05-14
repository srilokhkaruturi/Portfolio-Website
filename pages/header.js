function Header(){
    return (
        <h1> {process.env.NEXTAUTH_SECRET} </h1>
    )
}

export default Header