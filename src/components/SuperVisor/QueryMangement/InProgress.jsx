import { Grid } from "@mantine/core"
import RequsetCard from "./RequestCard"

const InProgress = ({inProgressR}) => {

    console.log('inPro : ',inProgressR)
    return(
        <>
        <Grid gutter={20}>
             {inProgressR?.reverse().map((r,i)=>(
            <Grid.Col span={{base:12,sm:3,lg:4}}>
                <RequsetCard key={i} request={r}/>
            </Grid.Col>
        ))}
        </Grid>
       
        </>
    )
}
export default InProgress