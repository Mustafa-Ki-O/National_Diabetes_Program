import { Grid } from "@mantine/core"
import RequsetCard from "./RequestCard"

const InProgress = () => {

    return(
        <>
        <Grid gutter={20}>
             {[1,2,3].map((e)=>(
            <Grid.Col span={{base:12,sm:3,lg:4}}>
                <RequsetCard key={e} id={e}/>
            </Grid.Col>
        ))}
        </Grid>
       
        </>
    )
}
export default InProgress