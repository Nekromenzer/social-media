import './App.css'
import {
  BsFacebook,
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsTiktok,
  BsWhatsapp,
  BsDiscord 
} from 'react-icons/bs'
import { BiLogoTelegram } from 'react-icons/bi'

function App () {
  const socialLinks = [
    {
      name: 'Telegram Group',
      url: 'https://t.me/+0AQ16PogUEM1YThl',
      icon: <BiLogoTelegram className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#229ED9] text-white'
    },
    {
      name: 'Discord Channel',
      url: 'https://discord.gg/AcBTdvX8',
      icon: <BsDiscord  className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#7289DA] text-white'
    },
    {
      name: 'Whatsapp channel',
      url: 'https://whatsapp.com/channel/0029VaDKBYI5Ui2cPup58U40',
      icon: <BsWhatsapp className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#128C7E] text-white'
    },
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
      url: 'https://www.youtube.com/channel/UClZf7b8FYFnGQKzMIP2n4wg',
      icon: <BsYoutube className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#FF0000] text-white'
    },
    {
      name: 'Tiktok',
      url: 'https://www.tiktok.com/@nekromenzer',
      icon: <BsTiktok className='text-2xl group-hover:text-3xl' />,
      customClass: 'bg-[#000000] text-white'
    }
  ]
  return (
    <div>
      <div className='text-center mt-5 italic'>Follow me here</div>
      <div className='flex flex-col justify-center items-center gap-6 my-8'>
        {socialLinks.map((item, idx) => (
          <a href={item.url} target='_blank' rel='noreferrer' key={idx}>
            <div
              className={`${item.customClass} rounded-3xl shadow  hover:px-12 gap-12 min-w-[18rem] xl:min-w-[20rem] duration-500 transition-all group w-auto flex items-center justify-between px-8 py-1 min-h-[3rem] max-w-[30rem]`}
            >
              <div className='font-mono text-md xl:text-xl'>{item.name}</div>
              <div>{item.icon}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
