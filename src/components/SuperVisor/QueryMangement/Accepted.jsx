import { Grid } from "@mantine/core"
import AccRejCard from "./AccRejCard"
// import RequsetCard from "./RequestCard"

const Accepted = ({acceptedR}) => {

    return(
        <>
        <Grid gutter={20}>
             {acceptedR?.map((r,i)=>(
            <Grid.Col span={{base:12,sm:3,lg:4}}>
                {/* <RequsetCard key={i} request={r}/> */}
                <AccRejCard request={r} key={i}/>
            </Grid.Col>
        ))}
        </Grid>
       
        </>
    )
}
export default Accepted