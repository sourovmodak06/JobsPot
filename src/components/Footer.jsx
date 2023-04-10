import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className="mt-auto">
        <div className="w-full bg-[#1A1919] py-16 px-14 mt-20">
            <div className="flex justify-between py-12">
                <div className="w-72">
                    <h2 className="font-extrabold text-3xl text-white">JobsPot</h2>
                    <p className="font-normal text-[#ffffff73] py-5">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div>

                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-white">Company</h2>
                    <ul className="text-[#ffffff73] font-normal pt-3">
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-white">Product</h2>
                    <ul className="text-[#ffffff73] font-normal pt-3">
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-white">Support</h2>
                    <ul className="text-[#ffffff73] font-normal pt-3">
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-white">Contact</h2>
                    <ul className="text-[#ffffff73] font-normal pt-3">
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="flex justify-between items-center pt-12">
                <div>
                    <h2 className="text-[#ffffff73] font-normal">&copy;{year} JobsPot. All Rights Reserved</h2>
                </div>
                <div>
                    <p className="text-[#ffffff73] font-normal">Powered by JobsPot</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
