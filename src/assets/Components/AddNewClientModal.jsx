import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:'70%', md:'45%', lg:'30%'},
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    px: 6,
    borderRadius: '10px'
};

const AddNewClientModal = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button onClick={handleOpen} variant='contained'>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ fontWeight: '600', fontSize: '24px', textAlign: 'center',}}>Add New Client</Typography>

                    <Box sx={{display:'grid', gap:'15px', marginTop:'20px'}}>
                        <Box sx={{display:'grid', gap:'10px'}}>
                            <Typography sx={{ fontWeight: '300', fontSize: '16px' }} variant=''>Name</Typography>
                            <TextField size='small' sx={{borderRadius:'10px',}} fullWidth placeholder='Wilson & Wilson Co'/>
                        </Box>
    
                        <Box sx={{display:'grid', gap:'10px'}}>
                            <Typography sx={{ fontWeight: '300', fontSize: '16px' }} variant=''>Contact Name</Typography>
                            <TextField size='small' sx={{borderRadius:'10px',}} fullWidth placeholder='Andrew Wilson'/>
                        </Box>
    
                        <Box sx={{display:'grid', gap:'10px'}}>
                            <Typography sx={{ fontWeight: '300', fontSize: '16px' }} variant=''>Phone Number</Typography>
                            <TextField size='small' sx={{borderRadius:'10px',}} fullWidth placeholder='+6655615645646'/>
                        </Box>
    
                        <Box sx={{display:'grid', gap:'10px'}}>
                            <Typography sx={{ fontWeight: '300', fontSize: '16px' }} variant=''>Email</Typography>
                            <TextField size='small' sx={{borderRadius:'10px',}} fullWidth placeholder='andrewwilson@gmail.com'/>
                        </Box>
    
                        <Box sx={{display:'grid', gap:'10px'}}>
                            <Typography sx={{ fontWeight: '300', fontSize: '16px' }} variant=''>Street Name</Typography>
                            <TextField size='small' sx={{borderRadius:'10px',}} fullWidth placeholder='1323 Street'/>
                        </Box>
    
                        <Box sx={{display:'grid', gap:'10px'}}>
                            <Typography sx={{ fontWeight: '300', fontSize: '16px' }} variant=''>City</Typography>
                            <TextField size='small' sx={{borderRadius:'10px',}} fullWidth placeholder='Hamilton'/>
                        </Box>
                    </Box>

                    <Box sx={{display:'flex', justifyContent:'center', gap:'20px', marginTop:'40px'}}>
                        <Button onClick={handleClose} variant='outlined' sx={{color:'#3153CD',textTransform:'none' ,borderColor:'#3153CD', width:'25%', fontFamily:'inherit'}}>Cancel</Button>
                        <Button variant='contained' sx={{backgroundColor:'#3153CD', textTransform:'none', width:'25%', fontFamily:'inherit'}}>Create</Button>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default AddNewClientModal