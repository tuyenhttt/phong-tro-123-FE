import { useCallback } from 'react';
import logo from '../../assets/logo.png';
import { Button } from '../../components/index';
import icons from '../../utils/icons';
import { useNavigate } from 'react-router-dom';
import { path } from '../../utils/constant';

const { GoPlusCircle } = icons;

const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);

  return (
    <div className='w-1100'>
      <div className='w-full flex items-center justify-between '>
        <img src={logo} alt='logo' className='w-[240px] h[70] object-contain' />
        <div className='flex items-center gap-1'>
          <spna>Phongtro123.com xin chào!</spna>
          <Button
            text={'Đăng nhập'}
            textColor='text-white'
            bgColor='bg-[#3961fb]'
            onClick={goLogin}
          />
          <Button
            text={'Đăng ký'}
            textColor='text-white'
            bgColor='bg-[#3961fb]'
            onClick={goLogin}
          />
          <Button
            text={'Đăng tin mới'}
            textColor='text-white'
            bgColor='bg-secondary2'
            IcAfter={GoPlusCircle}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
