import { Button, InputForm } from '../../components';

const Login = () => {
  return (
    <div className='bg-white w-[600px] mt-10 p-[30px] pb-[100px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-2xl mb-3'>Đăng nhập</h3>
      <div className='w-full flex flex-col gap-5'>
        <InputForm label={'SỐ ĐIỆN THOẠI'} />
        <InputForm label={'MẬT KHẨU'} />
        <Button
          text={'Đăng nhập'}
          bgColor='bg-secondary1'
          textColor='text-white'
          fullWidth
        />
      </div>
      <div className='flex mt-7 justify-between'>
        <p className='text-[blue] hover:text-[red] cursor-pointer'>
          Bạn quên mật khẩu
        </p>
        <p className='text-[blue] hover:text-[red] cursor-pointer'>
          Tạo tài khoản mới
        </p>
      </div>
    </div>
  );
};

export default Login;
