
interface headerProps {
    title: string;
    text: string;
}


const Header = ({title, text}:headerProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-semibold text-maintext">{title}</div>
      <p className="text-softText text-sm">{text}</p>
    </div>
  )
}

export default Header;