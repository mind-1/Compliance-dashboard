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
        <main>
             <div>
                <h2>Home</h2>
                <h3>Compliance Progress</h3>
                <Container>
                <Grid container spacing={2}>
                {ComplianceData.map((item)=> (
                    <Box sx={{  display: 'flex', width:'250px' , height:'150px'}} >
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
                        
                 </Grid>
                    
                </Container>   
                
            </div>
        </main>
           
    )
    
}