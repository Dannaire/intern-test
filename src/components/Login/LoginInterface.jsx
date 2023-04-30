import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import LoginTabs from "./LoginTabs";
import RegisterTabs from "./RegisterTabs";

const LoginInterface = () => {
  return (
    <>
    <section className="logres h-screen flex justify-center items-center">
      <div className="logres-wrap bg-white drop-shadow-xl rounded-2xl w-96 my-0 mx-auto h-max p-8">
        <Tabs>
          <TabList className={"flex flex-row gap-x-2 font-semibold p-2 bg-grey w-fit rounded-full m-auto"}>
            <Tab selectedClassName={"bg-green-primary px-6 py-2 rounded-full text-white"} className="px-6 py-2 text-gray-700">
              <button className="flex flex-row items-center gap-x-2">
                {" "}
                <p>Login</p>
              </button>
            </Tab>
            <Tab selectedClassName={"bg-green-primary px-6 py-2 rounded-full text-white"} className="px-6 py-2 text-gray-700">
              <button className="flex flex-row items-center gap-x-2">
                <p>Daftar</p>
              </button>
            </Tab>
          </TabList>
          <TabPanel>
            <LoginTabs />
          </TabPanel>
          <TabPanel>
            <RegisterTabs />
          </TabPanel>
        </Tabs>
      </div>
    </section>
    </>
  )
}

export default LoginInterface;