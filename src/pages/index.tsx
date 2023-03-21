
import Link from "next/link"
import { FilledInput } from '@mui/material';
import { TextField } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';




export default function HomePage() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


 return  (
  <div>
   <div>
    <h2>Welcome to AdvertFlair</h2></div>
    <div>
    <TextField id="emp_id" label="Emp ID" variant="outlined" />
    </div>
    <FormControl sx={{ m: 0, width: '30ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
            </FormControl>
            <div>
            <Button variant="outlined">Login</Button></div>

   <ul>
      <li>
        <Link href="/artist">Artist</Link>
      </li>
      <li>
        <Link href="/gl">Group Lead</Link>
      </li>
      <li>
        <Link href="/admin">Admin</Link>
      </li>
    </ul>

   </div>

  )
}


