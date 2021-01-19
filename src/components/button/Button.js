import './Button.css'

export default function Button({children, onClick, style}) {
  return <button className='btn' onClick={onClick} style={style}>
    {children}
  </button>
}