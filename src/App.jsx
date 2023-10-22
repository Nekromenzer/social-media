import './App.css'
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsTiktok
} from 'react-icons/bs'

function App () {
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/Nekromenzer',
      icon: <BsGithub className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#4078c0] text-white'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/gimshan.nekromenzer',
      icon: <BsFacebook className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#3b5998] text-white'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/maneesha-gimshan/',
      icon: <BsLinkedin className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#0a66c2] text-white'
    },
    {
      name: 'Youtube',
      url: 'https://www.linkedin.com/in/maneesha-gimshan/',
      icon: <BsYoutube className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#FF0000] text-white'
    },
    {
      name: 'Tiktok',
      url: 'https://www.linkedin.com/in/maneesha-gimshan/',
      icon: <BsTiktok className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#000000W] text-white'
    }
  ]
  return (
    <div className='flex flex-col justify-center items-center gap-6 my-8'>
      {socialLinks.map((item, idx) => (
        <a
          href={item.url}
          target='_blank'
          rel='noreferrer'
          key={idx}
        >
          <div
            className={`${item.customClass} rounded-3xl shadow  hover:px-12 gap-12 min-w-[18rem] duration-500 transition-all group w-auto flex items-center justify-between px-8 py-1 min-h-[3rem] max-w-[30rem]`}
          >
            <div className='font-mono text-xl'>{item.name}</div>
            <div>{item.icon}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default App
