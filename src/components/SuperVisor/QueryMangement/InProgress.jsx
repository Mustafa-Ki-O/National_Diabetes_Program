import { Grid } from "@mantine/core"
import RequsetCard from "./RequestCard"

const InProgress = ({InProgressR}) => {

    return(
        <>
        <Grid gutter={20}>
             {InProgressR?.map((r,i)=>(
            <Grid.Col span={{base:12,sm:3,lg:4}}>
                <RequsetCard key={i} request={r}/>
            </Grid.Col>
        ))}
        </Grid>
       
        </>
    )
}
export default InProgress