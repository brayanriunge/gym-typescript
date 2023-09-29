import Logo from "@/assets/Logo.png"



const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolores corporis corrupti pariatur fugiat dicta accusantium repellendus, consequuntur fugit enim.
          </p>
          <p>
           Evogym All Rights Reserved
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Instagram</p>
          <p className="my-5">Twitter</p>
          <p className="my-5">Facebook</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Developer</h4>
          <p className="my-5"> <span className="text-secondary-500 font-bold">Call:</span> O701842846</p>
          <p className="my-5"> <span className="text-secondary-500 font-bold">Email:</span> riungebrian@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


