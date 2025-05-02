import { Container } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

const VerticalScrollableGrid = styled(Grid)(({ theme }) => ({
  overflowY: 'auto',
  maxHeight: '300px', // Adjust this value as needed
  '&::-webkit-scrollbar': { display: 'none' },
  scrollbarWidth: 'none',
}));


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: 'green',
      ...theme.applyStyles('dark', {
        backgroundColor: 'lightgreen',
      }),
    },
  }));
  
export default function Compliancepage() {

    const card = (
        <React.Fragment>
          <CardContent>
            HIPAA
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </React.Fragment>
      );

    return (
       <div style={{ height: '100vh', display: 'flex', flexDirection: 'column',}}>
        <h2 style={{borderBottom: '1px solid #000', margin: 0, paddingBottom: 0, height: '10vh' }}>Home</h2>
        <Container sx={{display: 'flex', flexDirection:'row', flexGrow: 1,  padding: '0px', overflow: 'hidden' }} disableGutters>
             <div>
                <div> 
                  <div>Compliance Progress</div>
                  <div>
                    Filter by:
                    <Button>Framework</Button>
                  </div>
                </div>
                <Container sx={{display:"flex", flexDirection:"row" }}>
                  <Container sx={{ justifyContent:'left'}}>
                    <VerticalScrollableGrid container spacing={1}Width >
                    {ComplianceData.map((item)=> (
                        <Box key={item.id} sx={{  display: 'flex', width:'250px' , height:'150px'}} >
                            <Card variant="outlined" sx={{ width: '100%', height:'100%' }}>
                            <React.Fragment>
                                <CardContent>
                                    {item.complianceType}
                                </CardContent>
                                <Box sx={{position:'relative', width: '160px', left:'5px', top:'50px' }}>
                                    <BorderLinearProgress variant="determinate" value={item.percentage} />
                                </Box>
                                <CardActions>
                                    <Button sx={{position:'relative', top:'20px' , left: '170px'}} size="small">{item.policies} Total</Button>
                                </CardActions>
                                </React.Fragment>
                            </Card>
                        </Box>
                    ))}
                    </VerticalScrollableGrid>
                  </Container>
                </Container>        
            </div>
            <Box sx={{width: '20vw',  background:'#DCDCDC',}}>
                    <Box >
                      Filter By
                      <Button>Priority</Button>
                    </Box> 
                    <Box>
                        <b style={{marginLeft:'10px'}}>Items overdue</b>
                    </Box>
                    <Container>
                    {ItemsOverdue.map((item)=> (
                        <Box key={item.id} sx={{  display: 'flex', width:'220px' , height:'60px', border: '0.5px solid gray', marginBottom:'10px' }} >
                            <Card variant="outlined" sx={{ width: '100%', height:'100%' }}>
                            <React.Fragment>
                                <CardContent>
                                    {item.task}
                                </CardContent>
                                </React.Fragment>
                            </Card>
                        </Box>
                    ))}
                    </Container>
            </Box>
        </Container>
       </div>       
    )
    
}

const ComplianceData= [
  {
    "id": "1",
    "complianceType": "HIPAA",
    "percentage": 82,
    "policies": 50
  },
  {
    "id": "2",
    "complianceType": "GDPR",
    "percentage": 74,
    "policies": 42
  },
  {
    "id": "3",
    "complianceType": "SOC 2",
    "percentage": 90,
    "policies": 58
  },
  {
    "id": "4",
    "complianceType": "PCI-DSS",
    "percentage": 67,
    "policies": 36
  },
  {
    "id": "5",
    "complianceType": "ISO 27001",
    "percentage": 88,
    "policies": 61
  },
  {
    "id": "6",
    "complianceType": "FERPA",
    "percentage": 71,
    "policies": 40
  },
  {
    "id": "7",
    "complianceType": "CCPA",
    "percentage": 79,
    "policies": 45
  }
]

const ItemsOverdue= [
  { "id": 1, "task": "Policies need renewal" },
  { "id": 2, "task": "Vendors need update" },
  { "id": 3, "task": "Review marketing strategy" },
  { "id": 4, "task": "Schedule team meeting" },
  { "id": 5, "task": "Prepare quarterly report" }
]