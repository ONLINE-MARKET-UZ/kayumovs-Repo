import menu from "../../icons/menu.svg";
import { Select } from "antd";

const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const Navbar = () => {
  return (
    <div>
      <nav className="navbar flex items-center justify-between py-[17px] mt-[20px]">
        <ul className="flex items-center gap-[28px]">
          <li>
            <img src={menu} alt="menu" />
          </li>
          <li>
            <p className="text-[16px] font-medium">All category</p>
          </li>
          <li>
            <p className="text-[16px] font-medium">Hot offers</p>
          </li>
          <li>
            <p className="text-[16px] font-medium">Gift boxes</p>
          </li>
          <li>
            <p className="text-[16px] font-medium">Projects</p>
          </li>
          <li>
            <p className="text-[16px] font-medium">Menu item</p>
          </li>
          <li>
            <Select
              className="select"
              bordered={false}
              placeholder="Help"
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
                  value: "about us",
                  label: "about us",
                },
                {
                  value: "contact",
                  label: "contact",
                },
              ]}
            />
          </li>
        </ul>
        <ul className="flex items-center gap-[32px]">
          <li>
            <Select
              // className='border border-blue-500'
              bordered={false}
              placeholder="English,USD"
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
                  value: "English, USD",
                  label: "English, USD",
                },
                {
                  value: "Russian, RUBL",
                  label: "Russian, RUBL",
                },
              ]}
            />
          </li>
          <li>
            <Select
              // className='border border-blue-500'
              bordered={false}
              placeholder="Ship to"
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
                  value: "england",
                  label: "england",
                },
                {
                  value: "russia",
                  label: "russia",
                },
              ]}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
