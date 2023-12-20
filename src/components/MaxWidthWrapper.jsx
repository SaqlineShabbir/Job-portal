
const MaxWidthWrapper = ({
    className,
    children
})=>{

    return (
        <div className="mx-auto w-full max-w-screen-xl px-2 md:px-5">
            {children}
        </div>
    )
}

export default MaxWidthWrapper