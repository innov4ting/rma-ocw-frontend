import * as React from 'react';
import Modal from '@mui/material/Modal';
import { X } from 'react-feather';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  Select,
  InputLabel,
  MenuItem
} from '@mui/material';
import { useState } from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #4caf50',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

export default function CompleteForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formValues, setFormValues] = useState({
    orderNumber: '',
    solventArea: '',
    description: '',
    delivey: '',
    authorize: '',
    quantity: '',
    date: '',

  });

  const [age, setAge] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.orderNumber = formValues.orderNumber ? '' : 'No. de orden es requerido';
    tempErrors.solventArea = formValues.solventArea ? '' : 'Area que solicita es requerida';
    tempErrors.delivey = formValues.delivey ? '' : 'Quien entrega es requerido';
    tempErrors.authorize = formValues.authorize ? '' : 'Quien authoriza es requerido';
    tempErrors.quantity = formValues.quantity.length >= 1 ? '' : 'Ingrese la cantidad de piezas';
    tempErrors.date = formValues.date ? '' : 'La fehca de entrega es requerida';
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted successfully', formValues);
    }
  };


  return (
    <div>
      <Button variant='contained' color="success" onClick={handleOpen}>Concluir Orden</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <header className='flex justify-between align-center'>
            <div className='flex items-center '>Concluir Orden</div>
            <Button onClick={handleClose}><X size={24} color="black" /></Button>
          </header>
          <body className='max-w-2xl px-5 overflow-hidden py-4'>
            <Box
            component="form"
            sx={{ mt: 3 }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            >
              <FormControl component="fieldset">
                <FormGroup>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="No. de orden"
                        name="orderNumber"
                        value={formValues.orderNumber}
                        onChange={handleInputChange}
                        error={!!errors.orderNumber}
                        helperText={errors.orderNumber}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Descripcion"
                        name="solventArea"
                        value={formValues.solventArea}
                        onChange={handleInputChange}
                        error={!!errors.solventArea}
                        helperText={errors.solventArea}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Estado"
                        name="description"
                        value={formValues.description}
                        onChange={handleInputChange}
                        error={!!errors.description}
                        helperText={errors.description}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Tipo de servicio"
                        name="delivery"
                        type="delivey"
                        value={formValues.delivey}
                        onChange={handleInputChange}
                        error={!!errors.delivey}
                        helperText={errors.delivey}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Fecha de inicio"
                        name="date"
                        type="date"
                        value={formValues.date}
                        onChange={handleInputChange}
                        error={!!errors.date}
                        helperText={errors.date}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Fecha de termino"
                        name="date"
                        type="date"
                        value={formValues.date}
                        onChange={handleInputChange}
                        error={!!errors.date}
                        helperText={errors.date}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Turno"
                        name="authorize"
                        type="authorize"
                        value={formValues.authorize}
                        onChange={handleInputChange}
                        error={!!errors.authorize}
                        helperText={errors.authorize}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Operador"
                        name="quantity"
                        type="quantity"
                        value={formValues.quantity}
                        onChange={handleInputChange}
                        error={!!errors.quantity}
                        helperText={errors.quantity}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Procesos"
                        name="authorize"
                        type="authorize"
                        value={formValues.authorize}
                        onChange={handleInputChange}
                        error={!!errors.authorize}
                        helperText={errors.authorize}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Corte de material"
                        name="quantity"
                        type="quantity"
                        value={formValues.quantity}
                        onChange={handleInputChange}
                        error={!!errors.quantity}
                        helperText={errors.quantity}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Recibe"
                        name="authorize"
                        type="authorize"
                        value={formValues.authorize}
                        onChange={handleInputChange}
                        error={!!errors.authorize}
                        helperText={errors.authorize}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        size='small'
                        label="Entrega"
                        name="quantity"
                        type="quantity"
                        value={formValues.quantity}
                        onChange={handleInputChange}
                        error={!!errors.quantity}
                        helperText={errors.quantity}
                      />
                    </Grid>
        
                      <Grid item xs={12} sm={6}>
                          <TextField
                          fullWidth
                          size='small'
                          label="Fecha de entrega"
                          name="date"
                          type="date"
                          value={formValues.date}
                          onChange={handleInputChange}
                          error={!!errors.date}
                          helperText={errors.date}
                        />
                    </Grid>
                  </Grid>
                </FormGroup>
                {/* <FormHelperText error={Object.values(errors).some(error => error !== '')}>
                  {Object.values(errors).some(error => error !== '') && "Please correct the errors above."}
                </FormHelperText> */}
                {/* <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
                  Submit
                </Button> */}
              </FormControl>
            </Box>
          </body>
          <footer className='flex justify-end items-center gap-4'>
            <Button color="success" variant="outlined" onClick={handleClose}>Cancelar</Button>
            <Button ype="submit" variant="contained" color="success" onClick={handleSubmit}>Concluir</Button>
          </footer>
        </Box>
      </Modal>
    </div>
  );
}