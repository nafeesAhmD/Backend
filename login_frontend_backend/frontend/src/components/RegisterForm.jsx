import React from 'react'
import axios from 'axios'

const RegisterForm = () => {
     const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/api/auth/register", formData);
            console.log('success',response.data);
            alert('Registration successful');
            }catch (error) {
                console.error('Error during registration:', error);
                alert('Registration failed');
            }
                                   
        }

  return (
    <div>RegisterForm</div>
  )
}

export default RegisterForm
