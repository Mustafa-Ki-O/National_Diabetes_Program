import { Grid } from "@mantine/core"
import AccRejCard from "./AccRejCard"

const Rejected = ({rejectedR}) => {

    return(
        <>
        <Grid gutter={20}>
        {rejectedR?.reverse().map((r,i)=>(
            <Grid.Col span={{base:12,sm:3,lg:4}}>
                 <AccRejCard request={r} key={i}/>
            </Grid.Col>
        ))}
        </Grid>
       
        </>
    )
}
export default Rejected