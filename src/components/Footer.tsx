function Footer() {
  return (
    <footer className="w-full bg-white h-16 fixed bottom-0 left-0 flex items-center justify-center text-gray-400 gap-4 text-sm">
      <p><a className="hover:text-blue-500" href="https://www.pdnode.com">Pdnode</a>  {'\u00A9'} 2025 All rights reserved</p>
      <p className="text-blue-500"><a href="https://forum.pdnode.com/d/5-pdnode-terms-of-service" target="_blank" >Terms</a> | <a href="https://forum.pdnode.com/d/6-pdnode-privacy-policy" target="_blank">Privacy</a></p>
    </footer>
  )
}
export default Footer;