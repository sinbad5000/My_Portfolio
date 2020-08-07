export default function test({queryParam}) {
    let name = queryParam
    return (
        <div>
            <h1> oh, Hi </h1>
            <style jsx>
                {`
                h1 {
                    color: hotpink;
                }
                `}
            </style>
        </div>
        
    )

}

export function getServerSideProps({query}) {
    let queryParam = query.name

    return {
        props: {
            queryParam,
        }
    }
}