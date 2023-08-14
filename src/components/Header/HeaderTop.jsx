import Logo from "../../icons/logo.svg";
import User from "../../icons/profile.svg";
import Message from "../../icons/comments.svg";
import Likely from "../../icons/favourites.svg";
import Cart from "../../icons/cart.svg";
import { Input, Select, Button } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const HeaderTop = () => {
  return (
    <div>
      <ul className="flex items-center justify-between h-[86px] pt-[22px] pb-[24px]">
        <li>
          <img src={Logo} alt="" />
        </li>
        <li>
          <div className="flex items-center border border-blue-500 rounded-md overflow-hidden">
            <Input
              className=" rounded-none border-none  w-[421px] h-[45px] pl-[10px] pr-[5px] text-[16px] font-normal"
              placeholder="Search"
            />
            <Select
              // className='border border-blue-500'
              bordered={false}
              placeholder="All Category"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "Automobiles",
                  label: "Automobiles",
                },
                {
                  value: "Clothes and wear",
                  label: "Clothes and wear",
                },
                {
                  value: "Home interiors",
                  label: "Home interiors",
                },
                {
                  value: "Computer and tech",
                  label: "Computer and tech",
                },
                {
                  value: "Tools, equipments",
                  label: "Tools, equipments",
                },
                {
                  value: "Sports and outdoor",
                  label: "Sports and outdoor",
                },
                {
                  value: "Animal and pets",
                  label: "Animal and pets",
                },
                {
                  value: "Machinery tools",
                  label: "Machinery tools",
                },
              ]}
            />
            <Button
              default
              className=" bg-blue-500 text-white border-none rounded-none h-[45px] px-[23px]"
            >
              Search
            </Button>
          </div>
        </li>
        <li>
          <ul className="flex items-center gap-4">
            <li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
              <img src={User} alt="User" />
              <p className="text-[12px] font-normal text-[#8B96A5]">Profile</p>
            </li>
            <li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
              <img src={Message} alt="Message" />
              <p className="text-[12px] font-normal text-[#8B96A5]">Message</p>
            </li>
            <li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
              <img src={Likely} alt="Likely" />
              <p className="text-[12px] font-normal text-[#8B96A5]">Orders</p>
            </li>
            <li className="flex flex-col justify-end items-center h-[44px] gap-2 ">
              <img src={Cart} alt="Cart" />
              <p className="text-[12px] font-normal text-[#8B96A5]">My cart</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HeaderTop;
