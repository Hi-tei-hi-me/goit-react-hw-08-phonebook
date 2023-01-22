import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Oval
      height={150}
      width={150}
      color="rgb(106, 136, 157)"
      wrapperStyle={{
        position: 'absolute',
        zIndex: '1000',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#bcbcbc"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
