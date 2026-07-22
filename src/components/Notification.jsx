import { notification1 } from "../assets";

import { notificationImages } from "../constants";



const Notification = ({ className, title }) => {

  return (

    <div

      className={`${

        className || ""

      } flex items-center p-4 pr-6 glass-depth rounded-2xl gap-5 transition-all duration-500 hover:shadow-tactile hover:border-color-1/25 hover:-translate-y-0.5`}

    >

      <img

        src={notification1}

        width={62}

        height={62}

        alt=""

        className="rounded-xl ring-1 ring-n-1/15 shadow-inner-light"

      />



      <div className="flex-1 min-w-0">

        <h6 className="mb-1 font-semibold text-base tracking-tight">{title}</h6>



        <div className="flex items-center justify-between gap-3">

          <ul className="flex -m-0.5">

            {notificationImages.map((item, index) => (

              <li

                key={index}

                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110 hover:z-1"

              >

                <img

                  src={item}

                  className="w-full"

                  width={20}

                  height={20}

                  alt=""

                />

              </li>

            ))}

          </ul>

          <div className="body-2 text-n-13 shrink-0">1m ago</div>

        </div>

      </div>

    </div>

  );

};



export default Notification;

