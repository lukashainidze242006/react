import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('სახელი სავალდებულოა'),
  email: yup.string().email('არასწორი ელფოსტის ფორმატი').required('ელფოსტა სავალდებულოა'),
  password: yup.string().min(6, 'პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო').required('პაროლი სავალდებულოა')
});

function RegisterForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('ფორმის მონაცემები:', data);
    reset();
  };

  return (
    <div style={{ border: '1px solid #333', padding: '20px', marginTop: '20px', maxWidth: '400px' }}>
      <h3>სარეგისტრაციო ფორმა</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>სახელი:</label>
          <input {...register('name')} style={{ display: 'block', width: '100%', marginBottom: '5px' }} />
          {errors.name && <p style={{ color: 'red', margin: '0 0 10px 0' }}>{errors.name.message}</p>}
        </div>

        <div>
          <label>ელფოსტა:</label>
          <input {...register('email')} style={{ display: 'block', width: '100%', marginBottom: '5px' }} />
          {errors.email && <p style={{ color: 'red', margin: '0 0 10px 0' }}>{errors.email.message}</p>}
        </div>

        <div>
          <label>პაროლი:</label>
          <input type="password" {...register('password')} style={{ display: 'block', width: '100%', marginBottom: '5px' }} />
          {errors.password && <p style={{ color: 'red', margin: '0 0 10px 0' }}>{errors.password.message}</p>}
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>რეგისტრაცია</button>
      </form>
    </div>
  );
}

export default RegisterForm;